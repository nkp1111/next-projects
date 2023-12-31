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

export default function Home() {
  return (
    <div className="flex flex-col">
      <MainBackground />
      <Header />
      <main className="relative z-20">
        <FrontPage />
        <MovingBrand />
        <FeatureSection />
        <ToolsSection />
        <ThemeSection />
        <PluginSection />
        <TestimonialSection />
        <ScaleSection />
        <BlogSection />
        <SellingSection />
      </main>
      <Footer />
    </div>
  )
}
