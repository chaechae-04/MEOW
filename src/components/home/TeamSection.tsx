import CardSection from "../common/CardSection"
import Card from "../common/Card"
import { TEAM_CONTENT } from "../../constants/homeConstant"

interface TeamSectionProps {
    content?: typeof TEAM_CONTENT
}

const TeamSection = ({ content = TEAM_CONTENT }: TeamSectionProps) => {
    return (
        <div id="team" className="pb-16">
            <CardSection 
                title={content.title} 
                subtitle={content.subtitle} 
                columns={3}
            >
                {content.items.map((item, index) => (
                    <Card key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </Card>
                ))}
            </CardSection>
        </div>
    )
}

export default TeamSection