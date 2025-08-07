import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";

const HomePage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <HeroSection />
            <FeatureSection />
        </div>
    )
}

export default HomePage;