import Button from "../common/Button";
import { useScrollTo } from "../../hooks/useScrollTo";

interface HeroSectionProps {
    content: typeof import('../../constants/homeConstant').HERO_CONTANT
    onPrimaryClick: () => void
}

function HeroSection({ content, onPrimaryClick }: HeroSectionProps) {
    const scrollToElement = useScrollTo()

    const handleFeatureClick = () => {
        scrollToElement('features')
    }

    return (
        <div className="bg-white">
            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-30">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            {content.featureBannerText}{' '}
                            <Button
                                variant="noneBorder"
                                size="small"
                                onClick={handleFeatureClick}
                            >
                                <span aria-hidden="true" className="absolute inset-0" />
                                {content.featureButtonText} <span aria-hidden='true'>&rarr;</span>
                            </Button>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                            {content.title}
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                            {content.subtitle}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button 
                                variant="primary"
                                size="medium"
                                onClick={onPrimaryClick}
                            >
                                {content.primaryButtonText}
                            </Button>
                            <Button
                                variant="ghost"
                                size="medium"
                                onClick={handleFeatureClick}
                            >
                                {content.secondaryButtonText} <span aria-hidden="true">→</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection