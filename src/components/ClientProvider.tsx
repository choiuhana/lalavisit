"use client";

import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import ContactModal from "./ContactModal";
import { useState } from "react";

const ClientProvider = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <HeroSection />
      <ServiceSection setShowContact={setShowContact} />
      <ContactModal
        showContact={showContact}
        setShowContact={setShowContact}
        context="홈페이지 문의"
      />
    </>
  );
};

export default ClientProvider;
