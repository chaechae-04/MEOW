interface GalleryItemProps {
    imageUrl: string
    index: number
}

const sizeClasses = [
    'h-72',
    'h-88',
    'h-104',
    'h-120',
    'h-136',
]

const GalleryItem = ({ imageUrl, index }: GalleryItemProps) => {
    const sizeIndex = index % sizeClasses.length
    const sizeClass = sizeClasses[sizeIndex]

    return (
        <div className={`break-inside-avoid mb-4 ${sizeClass}`}>
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
}

export default GalleryItem