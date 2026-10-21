import { siteUrl } from "@/lib/site";

export const runtime = "nodejs";

type QueryResponse = { results?: unknown[][] };

export async function GET(request: Request) {
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY;
  const projectId = process.env.POSTHOG_PROJECT_ID;
  const siteHost = siteUrl
    ? new URL(siteUrl).host
    : process.env.NODE_ENV === "development" ? new URL(request.url).host : undefined;

  if (!apiKey || !projectId || !/^\d+$/.test(projectId) || !siteHost) {
    return Response.json({ error: "Visitor count is unavailable" }, { status: 503 });
  }

  try {
    const apiHost = process.env.POSTHOG_API_HOST || "https://us.posthog.com";
    const endpoint = new URL(`/api/projects/${projectId}/query/`, apiHost);
    const query = `SELECT count(DISTINCT distinct_id) FROM events WHERE event = '$pageview' AND properties.$host = '${siteHost}'`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: { kind: "HogQLQuery", query } }),
      next: { revalidate: 300 },
    });

    if (!response.ok) throw new Error(`PostHog returned ${response.status}`);

    const data = (await response.json()) as QueryResponse;
    const count = data.results?.[0]?.[0];

    if (typeof count !== "number" || !Number.isFinite(count) || count < 0) {
      throw new Error("PostHog returned an invalid visitor count");
    }

    return Response.json(
      { count },
      { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" } },
    );
  } catch (error) {
    console.error("Could not load visitor count", error);
    return Response.json({ error: "Visitor count is unavailable" }, { status: 502 });
  }
}
