import useNavigation from "../hooks/useNavigation";

import PageLayout from "../components/common/PageLayout";

import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";
import TeamSection from "../components/home/TeamSection";

const HomePage = () => {

    const { goToGallery, goToDiary, goToTips } = useNavigation()

    return (
        <PageLayout>
            <HeroSection 
                onPrimaryClick={goToGallery}
            />
            <FeatureSection 
                onGalleryButtonClick={goToGallery}
                onDiaryButtonClick={goToDiary}
                onTipsButtonClick={goToTips}
            />
            <TeamSection />
        </PageLayout>
    )
}

export default HomePage;