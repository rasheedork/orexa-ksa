import ServicesHero from "@/components/services/ServicesHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Engineering Material Solutions | Orexa KSA",
  description:
    "Orexa-KSA provides premium electrical, mechanical, MEP, fit-out, and engineering materials for commercial, industrial, residential, infrastructure, and government projects across Saudi Arabia.",
  keywords: [
    "Engineering Material Supplier Saudi Arabia",
    "MEP Material Supplier Saudi Arabia",
    "Electrical Material Supplier Riyadh",
    "Mechanical Material Supplier Saudi Arabia",
    "Fit-Out Material Supplier Saudi Arabia",
    "HVAC Materials Saudi Arabia",
    "Industrial Materials Supplier KSA",
    "Building Materials Supplier Riyadh",
    "Orexa KSA",
  ],
  openGraph: {
    title: "Engineering Material Solutions | Orexa KSA",
    description:
      "Electrical, Mechanical, Fit-Out and engineering material solutions for projects across Saudi Arabia.",
    type: "website",
    locale: "en_SA",
  },
};

export default function ServicesPage() {
  return  (
  <>
  <Navbar />
  <ServicesHero />
  <Footer />  
  </>
  );
}