import { useCallback } from "react"

const useScrollTo = () => {
    const scrollToElement = useCallback((elementId: string) => {
        const element = document.getElementById(elementId)
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }, [])

    return scrollToElement
}

export { useScrollTo }