// src/pages/GalleryPage.tsx
import PageLayout from "../components/common/PageLayout"
import GalleryGrid from "../components/gallery/GalleryGrid"
import { useGallery } from "../hooks/useGallery"

const GalleryPage = () => {
    const { displayedImages, loading, hasMoreImages } = useGallery()

    if (loading) {
        return (
            <PageLayout>
                <div className="text-center py-8">
                    <p>기다려봐. 기깔난거 보여줄테니까.</p>
                </div>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
                <GalleryGrid 
                    images={displayedImages} 
                    hasMoreImages={hasMoreImages} 
                />
            </div>
        </PageLayout>
    )
}

export default GalleryPage