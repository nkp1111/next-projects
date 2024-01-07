import React from 'react'
import BlogSection from "@/components/landing-page/blog-section";
import FeatureSection from "@/components/landing-page/feature-section";
import FrontPage from "@/components/landing-page/front-page";
import MainBackground from "@/components/landing-page/general/main-background";
import Header from "@/components/landing-page/header";
import SellingSection from "@/components/landing-page/selling-section";
import MovingBrand from "@/components/landing-page/moving-brand";
import PluginSection from "@/components/landing-page/plugin-section";
import ScaleSection from "@/components/landing-page/scale-section";
import TestimonialSection from "@/components/landing-page/testimonial-section";
import ThemeSection from "@/components/landing-page/theme-section";
import ToolsSection from "@/components/landing-page/tools-section";
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
