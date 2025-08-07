interface NavigationItem {
    name: string
    description: string
    icon: React.ElementType
}

interface AdditionalAction {
    name: string
    icon: React.ElementType
}

interface FeatureItem {
    title: string
    description: string
    buttonText: string
}

interface HeroContent {
    title: string
    subtitle: string
    primaryButtonText: string
    secondaryButtonText: string
    featureBannerText: string
    featureButtonText: string
}

interface PageLayoutProps {
    children: React.ReactNode
    className?: string
}

export type { NavigationItem, AdditionalAction, FeatureItem, HeroContent, PageLayoutProps }