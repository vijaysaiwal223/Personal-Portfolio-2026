"use client";

import { useEffect, useState } from "react";

export default function FooterVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/visitor-count", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((data: { count?: unknown } | null) => {
        if (typeof data?.count === "number" && Number.isFinite(data.count)) {
          setCount(data.count);
        }
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  if (count === null) return null;

  const label = `${count.toLocaleString()} ${count === 1 ? "visitor" : "visitors"}`;

  return <span aria-label={`${label} to this portfolio`}>• {label}</span>;
}
