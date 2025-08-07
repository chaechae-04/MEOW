import {
    HomeIcon,
    PhotoIcon,
    BookOpenIcon,
    LightBulbIcon,
    QuestionMarkCircleIcon,
    PlusCircleIcon
} from '@heroicons/react/24/outline'

const NAVIGATION_ITEMS = [
    {
        name: 'Home',
        description: 'chaechae\'s home',
        icon: HomeIcon
    },
    {
        name: 'Gallery',
        description: 'chaechae\'s photo gallery',
        icon: PhotoIcon
    },
    {
        name: 'Diary',
        description: 'chaechae\'s daily life',
        icon: BookOpenIcon
    },
    {
        name: 'Tips',
        description: 'chaechae\'s tips',
        icon: LightBulbIcon
    },
    {
        name: 'Quiz',
        description: 'chaechae\'s quiz',
        icon: QuestionMarkCircleIcon
    },
] as const

const ADDITIONAL_ACTIONS = [
    {
        name: 'Photo upload',
        icon: PlusCircleIcon
    },
    {
        name: 'About me',
        icon: BookOpenIcon
    },
]

export { NAVIGATION_ITEMS, ADDITIONAL_ACTIONS }