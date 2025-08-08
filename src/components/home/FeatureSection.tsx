import Button from "../common/Button";
import Card from "../common/Card";
import CardSection from "../common/CardSection";
import { FEATURE_CONTENT } from "../../constants/featureConstant";
import { DRIVE_CONFIG } from "../../constants/driveConfig";
import useGoogleDrive from "../../hooks/useGoogleDrive";

interface FeatureSectionProps {
    content?: typeof FEATURE_CONTENT
    onGalleryButtonClick: () => void
    onDiaryButtonClick: () => void
    onTipsButtonClick: () => void
}

const FeatureSection = ({ content = FEATURE_CONTENT, onGalleryButtonClick, onDiaryButtonClick, onTipsButtonClick }: FeatureSectionProps) => {
    
    const { images, loading } = useGoogleDrive(DRIVE_CONFIG.FEATURE_FOLDER_ID)
    
    if (loading) {
        return (
            <div id="team" className="pb-16">
                <div className="text-center py-8">
                    <p>기다려. 준비중이니까.</p>
                </div>
            </div>
        )
    }

    const featureItemsWithImages = content.items.map((item, index) => ( {
        ...item,
        imageUrl: images[index] || item.imageUrl
    }))

    const handleButtonClick = (index: number) => {
        switch (index) {
            case 0:
                onGalleryButtonClick()
                break
            case 1:
                onDiaryButtonClick()
                break
            case 2:
                onTipsButtonClick()
                break
            default:
                console.warn('Unknown button index: ', index)
        }
    }
    
    return (
        <div id="features" className="py-24">
            <CardSection
                title={content.title}
                subtitle={content.subtitle}
                columns={content.columns}
            >
                {featureItemsWithImages.map((item, index) => (
                    <Card key={item.title} hover>
                        <div className="flex items-center gap-2">
                            <item.icon aria-hidden="true" className="size-5 flex-none font-bold mb-2" />
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        </div>
                        <img src={item.imageUrl} alt={item.title} className="w-full aspect-square object-cover mb-4 rounded-lg"  />
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <Button 
                            variant="primary" 
                            size="small"
                            onClick={() => handleButtonClick(index)}
                        >{item.buttonText}</Button>
                    </Card>
                ))}
            </CardSection>
        </div>
    )
}

export default FeatureSection