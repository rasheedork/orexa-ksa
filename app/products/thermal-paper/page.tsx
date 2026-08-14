import type { Metadata } from "next";
/*import ThermalPaperPage from "@/components/products/ThermalPaperPage";*/
import ThermalPaperPage from "@/components/products/ThermalPaperPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer-norfq";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls for POS Machines | OREXA KSA",
  description:
    "OREXA-KSA supplies 80mm and 57/58mm thermal paper rolls for POS machines, retail, hospitality, kiosks, and multi-branch operations. Custom printing, packaging, bulk supply, and delivery options available.",
  keywords: [
    "Thermal Paper Rolls Saudi Arabia",
    "POS Paper Rolls Riyadh",
    "80mm Thermal Paper Rolls",
    "57mm Thermal Paper Rolls",
    "58mm Thermal Paper Rolls",
    "POS Receipt Paper Saudi Arabia",
    "Thermal Paper Supplier KSA",
    "POS Roll Supplier Riyadh",
    "Custom Thermal Paper Rolls",
    "OREXA KSA",
  ],
  openGraph: {
    title: "Thermal Paper Rolls for POS Machines | OREXA KSA",
    description:
      "Reliable thermal paper rolls for POS machines with bulk supply, custom configurations, and delivery options.",
    type: "website",
    locale: "en_SA",
  },
};

export default function Page() {
  return (
  <>
  <Navbar />
  <ThermalPaperPage />
  <Footer />  
  </>
  );

}