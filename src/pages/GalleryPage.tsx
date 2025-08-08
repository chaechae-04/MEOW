import { useState, useEffect, useCallback } from 'react'
import PageLayout from "../components/common/PageLayout"
import { DRIVE_CONFIG } from "../constants/driveConfig"
import useGoogleDrive from "../hooks/useGoogleDrive"

const GalleryPage = () => {
    const { images, loading } = useGoogleDrive(DRIVE_CONFIG.GALLERY_FOLDER_ID)
    const [displayedImages, setDisplayedImages] = useState<string[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const imagesPerPage = 12

    // 디버깅 로그
    console.log('Gallery images:', images)
    console.log('Loading state:', loading)
    console.log('GALLERY_FOLDER_ID:', DRIVE_CONFIG.GALLERY_FOLDER_ID)

    const sizeClasses = [
        'h-72',    // 288px
        'h-88',    // 352px
        'h-104',   // 416px
        'h-120',   // 480px
        'h-136',   // 544px
    ]

    useEffect(() => {
        if (images.length > 0) {
            const initialImages = images.slice(0, imagesPerPage)
            setDisplayedImages(initialImages)
        }
    }, [images])

    // loadMoreImages를 useCallback으로 감싸기
    const loadMoreImages = useCallback(() => {
        const nextIndex = currentIndex + imagesPerPage
        if (nextIndex < images.length) {
            const newImages = images.slice(currentIndex, nextIndex)
            setDisplayedImages(prev => [...prev, ...newImages])
            setCurrentIndex(nextIndex)
        }
    }, [currentIndex, images, imagesPerPage])

    // 스크롤 이벤트 처리
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            // 스크롤이 하단에 가까워지면 더 많은 이미지 로드
            if (scrollTop + windowHeight >= documentHeight - 100) {
                loadMoreImages()
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [loadMoreImages])

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

                {displayedImages.length === 0 && !loading ? (
                    <div className="text-center py-8">
                        <p className="text-gray-600">사진이 없다. 다른거나 보러가라.</p>
                    </div>
                ) : (
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                        {displayedImages.map((imageUrl, index) => {
                            // 인덱스에 따라 다양한 크기 적용 (패턴 반복)
                            const sizeIndex = index % sizeClasses.length
                            const sizeClass = sizeClasses[sizeIndex]

                            return (
                                <div
                                    key={index}
                                    className={`break-inside-avoid mb-4 ${sizeClass}`}
                                >
                                    <img
                                        src={imageUrl}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg shadow-md"
                                        onError={(e) => {
                                            console.error('Image load error:', imageUrl)
                                            e.currentTarget.src = '/images/default-gallery.png'
                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                )}

                {currentIndex < images.length && (
                    <div className="text-center py-8">
                        <p className="text-gray-600">더 많은 사진을 불러오는 중... 📸</p>
                    </div>
                )}
            </div>
        </PageLayout>
    )
}

export default GalleryPage