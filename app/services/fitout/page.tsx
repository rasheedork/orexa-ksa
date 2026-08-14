import type { Metadata } from "next";
import FitoutServices from "@/components/services/FitoutServices";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export const metadata: Metadata = {
  title: "Fit-Out Material Solutions | Orexa KSA",
  description:
    "Orexa-KSA provides complete fit-out material solutions including flooring, partitions, furniture, ceilings, surface finishes, and sustainable materials for commercial, residential, industrial, and government projects across Saudi Arabia.",
  keywords: [
    "Fit-Out Material Supplier Saudi Arabia",
    "Fit Out Materials Riyadh",
    "Interior Materials Saudi Arabia",
    "Flooring Supplier Riyadh",
    "Office Partition Supplier Saudi Arabia",
    "Office Furniture Supplier Riyadh",
    "Ceiling Materials Saudi Arabia",
    "Interior Finishing Materials KSA",
    "Commercial Fit Out Materials",
    "Office Fit Out Riyadh",
    "Sustainable Building Materials Saudi Arabia",
    "Orexa KSA",
  ],
  openGraph: {
    title: "Fit-Out Material Solutions | Orexa KSA",
    description:
      "Complete flooring, partitions, furniture, ceiling, surface finish, and sustainable material solutions for projects across Saudi Arabia.",
    type: "website",
    locale: "en_SA",
  },
};

export default function FitoutPage() {
  return (
  <>
  <Navbar />
  <FitoutServices />
  <Footer />  
  </>
  );
  
  
}