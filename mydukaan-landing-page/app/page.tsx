import FeatureSection from "@/components/landing-page/feature-section";
import FrontPage from "@/components/landing-page/front-page";
import MainBackground from "@/components/landing-page/general/main-background";
import Header from "@/components/landing-page/header";
import MovingBrand from "@/components/landing-page/moving-brand";

export default function Home() {
  return (
    <div className="flex flex-col">
      <MainBackground />
      <Header />
      <main className="relative z-20">
        <FrontPage />
        <MovingBrand />
        <FeatureSection />
      </main>
    </div>
  )
}
