import useNavigation from "../hooks/useNavigation";

import PageLayout from "../components/common/PageLayout";

import HeroSection from "../components/home/HeroSection";
import { HERO_CONTANT } from "../constants/homeConstant";
import FeatureSection from "../components/home/FeatureSection";
import { FEATURE_CONTENT } from "../constants/featureConstant";

const HomePage = () => {

    const { goToGallery, goToDiary, goToTips } = useNavigation()

    return (
        <PageLayout>
            <HeroSection 
                content={HERO_CONTANT}
                onPrimaryClick={() => {goToGallery()}}
            />
            <FeatureSection 
                content={FEATURE_CONTENT}
                onGalleryButtonClick={() => {goToGallery()}}
                onDiaryButtonClick={() => {goToDiary()}}
                onTipsButtonClick={() => {goToTips()}}
            />
        </PageLayout>
    )
}

export default HomePage;