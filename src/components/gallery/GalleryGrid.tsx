import GalleryItem from "./GalleryItem"

interface GalleryGridProps {
    images: string[]
    hasMoreImages: boolean
}

const GalleryGrid = ({ images, hasMoreImages }: GalleryGridProps) => {
    if (images.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-600">사진이 없다. 다른거나 보러가라.</p>
            </div>
        )
    }

    return (
        <>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {images.map((imageUrl, index) => (
                    <GalleryItem
                        key={index}
                        imageUrl={imageUrl}
                        index={index}
                    />
                ))}
            </div>

            {hasMoreImages && (
                <div className="text-center py-8">
                    <p className="text-gray-600">더 보고 싶다면 아래로 내려봐.</p>
                </div>
            )}
        </>
    )
}

export default GalleryGrid