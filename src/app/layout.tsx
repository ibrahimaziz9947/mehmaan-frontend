import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import MainLayout from "@/layouts/MainLayout";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehmaan | Short-term Rental Marketplace",
  description: "A professional short-term rental marketplace platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full font-sans">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
