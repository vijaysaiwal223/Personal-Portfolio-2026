import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vijay Saiwal — Designer & Builder",
  description: "Product designer crafting smooth journeys, clean UI, and meaningful product experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
