import { 
    CameraIcon,
    BookOpenIcon,
    LightBulbIcon
 } from "@heroicons/react/20/solid"

const FEATURE_CONTENT = {
    title: "Features",
    subtitle: "다양한 기능 제공. 잘 될거임. 내가 만들었으니까.",
    columns: 3,
    items: [
        {
            title: "Gallery",
            description: "마음에 안들어도 됨. 내 마음에 드니까.",
            buttonText: "내가 남긴 걸작들",
            icon: CameraIcon,
            imageUrl: '',
        },
        {
            title: "Diary",
            description: "내 일기.",
            buttonText: "절 대 유 출 금 지",
            icon: BookOpenIcon,
            imageUrl: '',
        },
        {
            title: "Tips",
            description: "자연스럽게 과자 먹는법 알려준다.",
            buttonText: "확인하러 오던가",
            icon: LightBulbIcon,
            imageUrl: '',
        },
    ]
} as const

export { FEATURE_CONTENT }