import Button from "../common/Button";
import Card from "../common/Card";
import CardSection from "../common/CardSection";
import { FEATURE_CONTENT } from "../../constants/featureConstant";

interface FeatureSectionProps {
    content?: typeof FEATURE_CONTENT
    onGalleryButtonClick: () => void
    onDiaryButtonClick: () => void
    onTipsButtonClick: () => void
}

const FeatureSection = ({ content = FEATURE_CONTENT, onGalleryButtonClick, onDiaryButtonClick, onTipsButtonClick }: FeatureSectionProps) => {
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
                {content.items.map((item, index) => (
                    <Card key={item.title} hover>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
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