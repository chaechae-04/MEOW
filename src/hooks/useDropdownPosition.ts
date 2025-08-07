'use client'

import { useState, useEffect, useRef } from "react"

interface UseDropdownPositionProps {
    breakpoint?: number
}

const useDropdownPosition = ({ breakpoint = 1024 }: UseDropdownPositionProps) => {
    const [dropdownOffset, setDropdownOffset] = useState(0)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const updateOffset = () => {
            const screenWidth = window.innerWidth
            if (screenWidth < breakpoint) {
                const headerCenter = window.innerWidth / 2
                const buttonCenter = buttonRef.current?.getBoundingClientRect().left || 0
                setDropdownOffset(buttonCenter - headerCenter)
            } else {
                setDropdownOffset(0)
            }
        }

        updateOffset()
        window.addEventListener('resize', updateOffset)
        return () => window.removeEventListener('resize', updateOffset)
    }, [breakpoint])

    return { dropdownOffset, buttonRef }
}

export default useDropdownPosition