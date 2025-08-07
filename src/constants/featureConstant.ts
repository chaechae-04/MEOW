const FEATURE_CONTENT = {
    title: "Features",
    subtitle: "다양한 기능 제공. 잘 될거임. 내가 만들었으니까.",
    columns: 3,
    items: [
        {
            title: "Gallery",
            description: "내 사진.",
            buttonText: "보러 오던가",
        },
        {
            title: "Diary",
            description: "내 일기.",
            buttonText: "읽으러 오던가",
        },
        {
            title: "Tips",
            description: "고양이 팁.",
            buttonText: "확인하러 오던가",
        },
    ]
} as const

export { FEATURE_CONTENT }