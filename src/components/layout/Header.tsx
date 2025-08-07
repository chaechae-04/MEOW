import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
    HomeIcon,
    PhotoIcon,
    BookOpenIcon,
    LightBulbIcon,
    QuestionMarkCircleIcon,
    PlusCircleIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const menuItems = [
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
]

const additionalAcrtions = [
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

function Header() {
    return (
        <header className="w-full bg-white shadow-sm fixed top-0 z-50">
            <div className="w-full px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-gray-800 ml-25 hover:text-blue-600 transition-colors">
                        MEOW
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center space-x-6 mx-50">
                        {/* Home Link */}
                        <Link to="/" className="mr-10 text-gray-600 hover:text-gray-800 font-medium hover:text-blue-600 transition-colors">
                            집
                        </Link>

                        {/* Dropdown Menu */}
                        <Popover className="relative">
                            <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                                <span>Me(ow)nu</span>
                                <ChevronDownIcon aria-hidden="true" className="size-5" />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        {menuItems.map((item) => (
                                            <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                </div>
                                                <div>
                                                    <a href={item.href} className="font-semibold text-gray-900">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                        {additionalAcrtions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                            >
                                                <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Popover>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header