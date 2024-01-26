import FeatureSection from "@/components/feature-section";
import FrontPage from "@/components/front-page";
import Header from "@/components/header";


export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-16">
        <FrontPage />
        <FeatureSection />
      </main>
    </div>
  );
}
