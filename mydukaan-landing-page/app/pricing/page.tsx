import React from 'react'
import MainBackground from "@/components/landing-page/general/main-background";
import Header from "@/components/landing-page/header";
import SellingSection from "@/components/landing-page/selling-section";
import TestimonialSection from "@/components/landing-page/testimonial-section";
import Footer from "@/components/landing-page/footer";
import FAQSection from '@/components/landing-page/faq-section';
import PricingFrontPage from '@/components/landing-page/pricing-front-page';
import PricingPlugins from '@/components/landing-page/pricing-plugins';

export default function Pricing() {
  return (
    <div className="flex flex-col">
      <MainBackground />
      <Header />
      <main className="relative z-20">
        <PricingFrontPage />
        <PricingPlugins />
        <TestimonialSection bgColor />
        <FAQSection />
        <SellingSection pricingPage />
      </main>
      <Footer />
    </div>
  )
}
