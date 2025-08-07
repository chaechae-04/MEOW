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
        href: '/',
        icon: HomeIcon
    },
    {
        name: 'Gallery',
        description: 'chaechae\'s photo gallery',
        href: '/gallery',
        icon: PhotoIcon
    },
    {
        name: 'Diary',
        description: 'chaechae\'s daily life',
        href: '/diary',
        icon: BookOpenIcon
    },
    {
        name: 'Tips',
        description: 'chaechae\'s tips',
        href: '/tip',
        icon: LightBulbIcon
    },
    {
        name: 'Quiz',
        description: 'chaechae\'s quiz',
        href: '/quiz',
        icon: QuestionMarkCircleIcon
    },
] as const

const ADDITIONAL_ACTIONS = [
    {
        name: 'Photo upload',
        href: '/upload',
        icon: PlusCircleIcon
    },
    {
        name: 'About me',
        href: '/about',
        icon: BookOpenIcon
    },
]

export { NAVIGATION_ITEMS, ADDITIONAL_ACTIONS }