import { useNavigate } from "react-router-dom"

const useNavigation = () => {
    const navigate = useNavigate()

    const goToHome = () => navigate('/')
    const goToGallery = () => navigate('/gallery')
    const goToDiary = () => navigate('/diary')
    const goToTips = () => navigate('/tips')
    const goToUpload = () => navigate('/upload')
    const goToAbout = () => navigate('/about')

    return {
        goToHome,
        goToGallery,
        goToDiary,
        goToTips,
        goToUpload,
        goToAbout,
    }
}

export default useNavigation