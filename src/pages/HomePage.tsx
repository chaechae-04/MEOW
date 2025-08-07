import HeroSection from "../components/home/HeroSection";
import { HERO_CONTANT } from "../constants/homeConstant";
import FeatureSection from "../components/home/FeatureSection";

const HomePage = () => {

    return (
        <div className="container mx-auto px-4 py-8">
            <HeroSection 
                content={HERO_CONTANT}
                onPrimaryClick={() => {}}
            />
            <FeatureSection />
        </div>
    )
}

export default HomePage;