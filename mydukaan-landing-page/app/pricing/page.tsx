import React from 'react'
import MainBackground from "@/components/landing-page/general/main-background";
import Header from "@/components/landing-page/header";
import SellingSection from "@/components/landing-page/selling-section";
import TestimonialSection from "@/components/landing-page/testimonial-section";
import Footer from "@/components/landing-page/footer";
import FAQSection from '@/components/landing-page/faq-section';

export default function Pricing() {
  return (
    <div className="flex flex-col">
      <MainBackground />
      <Header />
      <main className="relative z-20 pt-20">
        <h1 className='font-bold xl:text-5xl sm:text-4xl text-3xl mt-20 text-center'>Choose your success path with Dukaan’s flexible pricing</h1>

        <section className='h-[100vh]'></section>

        <TestimonialSection bgColor />
        <FAQSection />
        <SellingSection pricingPage />
      </main>
      <Footer />
    </div>
  )
}
