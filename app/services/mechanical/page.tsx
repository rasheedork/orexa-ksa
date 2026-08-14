import type { Metadata } from "next";
import MechanicalServices from "@/components/services/MechanicalServices";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mechanical Material Solutions | Orexa KSA",
  description:
    "Orexa-KSA provides high-quality HVAC, piping, sanitary fixtures, fire protection, and life & safety equipment for commercial, industrial, infrastructure, and government projects across Saudi Arabia.",
  keywords: [
    "Mechanical Material Supplier Saudi Arabia",
    "HVAC Material Supplier Saudi Arabia",
    "HVAC Materials Riyadh",
    "Piping Materials Saudi Arabia",
    "PPR Pipes Saudi Arabia",
    "HDPE Pipes Saudi Arabia",
    "Sanitary Fixtures Saudi Arabia",
    "Fire Fighting Materials Saudi Arabia",
    "Safety Equipment Supplier Riyadh",
    "Mechanical Engineering Materials KSA",
    "Orexa KSA",
  ],
  openGraph: {
    title: "Mechanical Material Solutions | Orexa KSA",
    description:
      "HVAC, piping, sanitary, fire protection, and life & safety material solutions for projects across Saudi Arabia.",
    type: "website",
    locale: "en_SA",
  },
};

export default function MechanicalPage() {
  return (
    <>
    <Navbar />
    <MechanicalServices />
    <Footer />  
    </>
  );
}