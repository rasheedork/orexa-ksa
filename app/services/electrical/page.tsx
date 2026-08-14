import type { Metadata } from "next";
import ElectricalServices from "@/components/services/ElectricalServices";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Electrical Material Solutions | Orexa KSA",
  description:
    "Orexa-KSA provides high-quality electrical materials including lighting, cables, wires, wiring devices, audio visual equipment, and low-current solutions for commercial, industrial, infrastructure, and government projects across Saudi Arabia.",
  keywords: [
    "Electrical Material Supplier Saudi Arabia",
    "Electrical Material Supplier Riyadh",
    "Electrical Products Saudi Arabia",
    "Lighting Supplier Saudi Arabia",
    "LED Lighting Saudi Arabia",
    "Electrical Cables Saudi Arabia",
    "Power Cables Riyadh",
    "Wiring Devices Saudi Arabia",
    "Switches and Sockets Saudi Arabia",
    "Audio Visual Equipment Riyadh",
    "Electrical Engineering Materials KSA",
    "Orexa KSA",
  ],
  openGraph: {
    title: "Electrical Material Solutions | Orexa KSA",
    description:
      "Professional electrical material solutions including lighting, cables, wiring devices, and audio visual equipment for projects across Saudi Arabia.",
    type: "website",
    locale: "en_SA",
  },
};

export default function ElectricalPage() {
  return (
  <>
  <Navbar />
  <ElectricalServices />
  <Footer />  
  </>
  );
  
}