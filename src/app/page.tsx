"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar onOpenContact={openContactModal} />
      <Hero onOpenContact={openContactModal} />
      <Services />
      <Footer onOpenContact={openContactModal} />
      
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </main>
  );
}
