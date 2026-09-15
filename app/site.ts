const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;

export const site = {
  name: "Vijay Saiwal",
  title: "Vijay Saiwal — Product Designer & Builder",
  description: "Product designer with 4+ years of SaaS experience, creating clean interfaces, smooth user journeys, and meaningful digital products. Available for work.",
  linkedIn: "https://www.linkedin.com/in/vijay-saiwal/",
  cover: "/assets/cover.png",
  coverAlt: "Vijay Saiwal’s portfolio — product designer with 4+ years of SaaS experience, available for work.",
};
