import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
    padding?: 'none' | 'small' | 'medium' | 'large'
    shadow?: 'none' | 'small' | 'medium' | 'large'
    hover?: boolean
    onClick?: () => void
}

const Card = ({
    children,
    className,
    padding = 'medium',
    shadow = 'medium',
    hover = false,
    onClick,
}: CardProps) => {
    
    const paddingClasses = {
        none: "",
        small: "p-3",
        medium: "p-6",
        large: "p-8"
    }

    const shadowClasses = {
        none: "",
        small: "shadow-sm",
        medium: "shadow-md",
        large: "shadow-lg"
    }

    const hoverClasses = hover ? "hover:shadow-lg transition-shadow cursor-pointer" : ""

    return (
        <div
            className={`
                bg-white rounded-lg border border-gray-200
                ${paddingClasses[padding]}
                ${shadowClasses[shadow]}
                ${hoverClasses}
                ${className}
            `}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Card;