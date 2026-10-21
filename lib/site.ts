const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;

export const site = {
  name: "Vijay Saiwal",
  title: "Vijay Saiwal — Product Designer & Builder",
  description: "Product designer with 4+ years of SaaS experience, making complex workflows easier to understand through research, UX, and clear interfaces. Available for work.",
  cover: "/assets/portfolio-social-cover.png",
  coverAlt: "Your next big idea. Designed. Built. Shipped. Vijay Saiwal’s product design portfolio.",
};

export const links = {
  email: "vijaysaiwal223@gmail.com",
  linkedIn: "https://www.linkedin.com/in/vijay-saiwal/",
  x: "https://x.com/jrvijaxx",
  bookCall: "https://cal.com/vijay-saiwal/30min",
};
