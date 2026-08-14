import type { Metadata } from "next";
import ProductsPage from "@/components/products/ProductsPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Products | Engineering Materials & Solutions | OREXA KSA",

  description:
    "Explore OREXA-KSA engineering products including mechanical, electrical, fit-out materials, and thermal paper rolls for commercial, industrial, infrastructure, residential, and government projects.",

  keywords: [
    "Engineering Products Saudi Arabia",
    "Engineering Material Supplier Riyadh",
    "Mechanical Materials KSA",
    "Electrical Materials Saudi Arabia",
    "Fit-Out Materials Riyadh",
    "HVAC Materials Saudi Arabia",
    "Piping Materials KSA",
    "Electrical Cables Saudi Arabia",
    "Lighting Materials Riyadh",
    "Office Fit-Out Materials",
    "Thermal Paper Rolls Saudi Arabia",
    "OREXA KSA",
  ],

  openGraph: {
    title: "Products | OREXA-KSA",
    description:
      "Mechanical, electrical, fit-out, and thermal paper material solutions for projects across Saudi Arabia.",
    type: "website",
    locale: "en_SA",
  },
};

export default function Page() {
  return (
  <>
  <Navbar />
  <ProductsPage />
  <Footer />  
  </>
  );
}