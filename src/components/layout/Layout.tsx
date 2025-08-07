import useNavigation from '../../hooks/useNavigation'

import React from 'react'
import Header from './Header.tsx'
import { NAVIGATION_ITEMS, ADDITIONAL_ACTIONS } from '../../constants/navigationConstant'
import Footer from './Footer.tsx'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    
    const { goToHome, goToGallery, goToDiary, goToTips, goToUpload, goToAbout } = useNavigation()
    
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header 
                navigationItems={NAVIGATION_ITEMS}
                additionalActions={ADDITIONAL_ACTIONS}
                onHomeClick={goToHome}
                onGalleryClick={goToGallery}
                onDiaryClick={goToDiary}
                onTipsClick={goToTips}
                onUploadClick={goToUpload}
                onAboutClick={goToAbout}
            />

            {/* Main */}
            <main className="flex-1 pt-16">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Layout