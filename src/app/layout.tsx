import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIDBI National DeepTech Platform",
  description: "A national platform bringing together early-stage capital, institutional expertise, industry access and structured acceleration for India's most promising deeptech ventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
