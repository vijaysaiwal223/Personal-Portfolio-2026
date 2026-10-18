import localFont from "next/font/local";

export const circular = localFont({
  src: [
    { path: "../public/font/CircularStd-Book.otf", weight: "400" },
    { path: "../public/font/CircularStd-Medium.otf", weight: "500" },
    { path: "../public/font/CircularStd-Bold.otf", weight: "700" },
  ],
  variable: "--font-circular",
  display: "swap",
});
