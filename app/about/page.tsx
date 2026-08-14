import type { Metadata } from "next";
import AboutOrexa from "@/components/home/AboutOrexa";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About OREXA | Engineering Material Solutions Provider in Saudi Arabia",
  description:
    "Learn about OREXA-KSA, a provider of engineering material solutions for construction, industrial, commercial, residential, infrastructure, and government projects across Saudi Arabia.",
  keywords: [
    "Orexa KSA",
    "Engineering Material Solutions Saudi Arabia",
    "Engineering Material Supplier Riyadh",
    "MEP Material Supplier Saudi Arabia",
    "Industrial Material Supplier KSA",
    "Construction Material Supplier Riyadh",
    "Fit-Out Material Supplier Saudi Arabia",
    "Electrical Material Supplier KSA",
    "Mechanical Material Supplier KSA",
  ],
  openGraph: {
    title: "About OREXA | Engineering Material Solutions Provider",
    description:
      "OREXA provides reliable mechanical, electrical, fit-out, and engineering material solutions for projects across Saudi Arabia.",
    type: "website",
    locale: "en_SA",
  },
};

export default function AboutPage() {
  return (
  <>
  <Navbar />
  <AboutOrexa />
  <Footer />  
  </>
  );
  
  
}