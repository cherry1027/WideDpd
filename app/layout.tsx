import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WideDPD Lab — AI-Assisted Digital Predistortion Research Platform",
  description: "Interactive synthetic research prototype for exploring wideband PA nonlinearities, memory effects, and digital predistortion.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
