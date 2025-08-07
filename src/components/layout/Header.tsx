import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { NAVIGATION_ITEMS, ADDITIONAL_ACTIONS } from '../../constants/navigationConstant'
import useNavigation from '../../hooks/useNavigation'

function Header() {

    const { goToHome, goToGallery, goToDiary, goToTips, goToUpload, goToAbout } = useNavigation()

    const navigationHandlers = [goToHome, goToGallery, goToDiary, goToTips]
    const additionalActionHandlers = [goToUpload, goToAbout]

    const handleNavigationClick = (index: number) => {
        if (navigationHandlers[index]) {
            navigationHandlers[index]()
        } else {
            console.warn('Unknown navigation index: ', index)
        }
    }

    const handleAdditionalActionClick = (index: number) => {
        if (additionalActionHandlers[index]) {
            additionalActionHandlers[index]()
        } else {
            console.warn('Unknown additional action index: ', index)
        }
    }

    return (
        <header className="w-full bg-white shadow-sm fixed top-0 z-50">
            <div className="w-full px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-gray-800 sm:ml-0 md:ml-0 lg:ml-25 xl:ml-25 hover:text-blue-600 transition-colors">
                        MEOW
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center space-x-6 sm:mx-0 md:mx-0 lg-mx-25 xl:mx-50">
                        {/* Home Link */}
                        <Button
                            variant="noneBorder"
                            size="small"
                            onClick={goToHome}
                            className="mr-10 text-gray-600 hover:text-gray-800 font-medium hover:text-blue-600 transition-colors"
                        >
                            Home
                        </Button>

                        {/* Dropdown Menu */}
                        <Popover className="relative">
                            <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                                <span>Me(ow)nu</span>
                                <ChevronDownIcon aria-hidden="true" className="size-5" />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute z-10 mt-5 flex w-screen max-w-max bg-transparent px-4 
                                                left-1/2 -translate-x-1/2 
                                                sm:left-auto sm:right-0 sm:translate-x-0
                                                md:left-auto md:right-0 md:translate-x-0
                                                lg:left-auto lg:right-0 lg:translate-x-0
                                                xl:left-1/2 xl:-translate-x-1/2
                                                2xl:left-1/2 2xl:-translate-x-1/2"
                                >
                                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        {NAVIGATION_ITEMS.map((item, index) => (
                                            <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                </div>
                                                <div>
                                                    <Button
                                                        variant="ghost"
                                                        size="small"
                                                        onClick={() => handleNavigationClick(index)}
                                                        className="font-semibold text-gray-900"
                                                    >
                                                        {item.name}
                                                    </Button>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                        {ADDITIONAL_ACTIONS.map((item, index) => (
                                            <Button
                                                variant="noneBorder"
                                                size="small"
                                                onClick={() => handleAdditionalActionClick(index)}
                                                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                            >
                                                <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                                                {item.name}
                                            </Button>
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