import Button from "../common/Button";
import Card from "../common/Card";
import CardSection from "../common/CardSection";

const FeatureSection = () => {
    return (
        <div id="features">
            <CardSection
                title="Features"
                subtitle="다양한 기능 제공. 잘 될거임. 내가 만들었으니까."
                columns={3}
            >
                <Card hover>
                    <h3 className="text-lg font-semibold mb-2">Gallery</h3>
                    <p className="text-gray-600 mb-4">내 사진.</p>
                    <Button variant="primary" size="small">보러 오던가</Button>
                </Card>
                <Card hover>
                    <h3 className="text-lg font-semibold mb-2">Diary</h3>
                    <p className="text-gray-600 mb-4">내 일기.</p>
                    <Button variant="primary" size="small">읽으러 오던가</Button>
                </Card>
                <Card hover>
                    <h3 className="text-lg font-semibold mb-2">Tips</h3>
                    <p className="text-gray-600 mb-4">고양이 팁.</p>
                    <Button variant="primary" size="small">확인하러 오던가</Button>
                </Card>
            </CardSection>
        </div>
    )
}

export default FeatureSection