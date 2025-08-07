import CardSection from "../common/CardSection"
import Card from "../common/Card"
import { TEAM_CONTENT } from "../../constants/homeConstant"
import { DRIVE_CONFIG } from "../../constants/driveConfig"
import useGoogleDrive from "../../hooks/useGoogleDrive"

interface TeamSectionProps {
    content?: typeof TEAM_CONTENT
}

const TeamSection = ({ content = TEAM_CONTENT }: TeamSectionProps) => {
    
    const { images, loading } = useGoogleDrive(DRIVE_CONFIG.PROFILE_FOLDER_ID)

    if (loading) {
        return (
            <div id="team" className="pb-16">
                <div className="text-center py-8">
                    <p>팀원 사진을 불러오는중이니까 거기 앉아서 좀만 기다려.</p>
                </div>
            </div>
        )
    }

    const teamMemberWithImages = content.items.map((member, index) => ( {
        ...member,
        imageUrl: images[index] || member.imageUrl
    }))

    return (
        <div id="team" className="py-24">
            <CardSection 
                title={content.title} 
                subtitle={content.subtitle} 
                columns={3}
            >
                {teamMemberWithImages.map((item, index) => (
                    <Card hover key={index} className="text-center font-bold">
                        {item.imageUrl && (
                            <img 
                                src={item.imageUrl} 
                                alt={item.name}
                                onError={(e) => {
                                    e.currentTarget.src = "/images/default-profile.png"
                                }} 
                                className="w-full aspect-square object-cover rounded-lg mb-4" 
                            />
                        )}
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </Card>
                ))}
            </CardSection>
        </div>
    )
}

export default TeamSection