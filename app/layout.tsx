import type { Metadata } from "next";
import "@fontsource/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "OREXA KSA | Premium Office Fit-Out Company",
  description:
    "Office Fit-Out, Office Renovation, Office Furniture, Interior Design & MEP Solutions in Saudi Arabia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
