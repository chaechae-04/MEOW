const HERO_CONTENT = {
    title: "엄청난 디지털 왕국. 고양이만 출입가능.",
    subtitle: "내 사진. 내 일기. 내 모든 것. 모두 여기에.",
    primaryButtonText: "사진 보러가기",
    secondaryButtonText: "다른 기능 보러가기",
    featureBannerText: "이런 엄청난 페이지를 만든사람이 궁금하다면",
    featureButtonText: "이걸 눌러라.",
} as const

const TEAM_CONTENT = {
    title: "위대한 페이지를 만든 팀원들",
    subtitle: "내가 혼자 만들었다. 나는 위대하니까-.",
    items: [
        {
            name: "이채채",
            description: "PM, FE",
            imageUrl: "1VbrNwbt9jMsRPjc024Ni57XzyboqidqE"
        },
        {
            name: "chaechae",
            description: "BE, TL",
            imageUrl: "1vAcyMOPHGy7CfHDX_shIDLuX0Pau-PSb"
        },
        {
            name: "채채",
            description: "Designer",
            imageUrl: "1oXBdIu5RetEt016gahxDaP4OSPrd5_4M"
        }
    ]
} as const

export { HERO_CONTENT, TEAM_CONTENT }