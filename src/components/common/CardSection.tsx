import React from 'react'

interface CardSectionProps {
    title?: string
    subtitle?: string
    children: React.ReactNode
    className?: string
    columns?: 1 | 2 | 3 | 4
    gap?: 'small' | 'medium' | 'large'
}

const CardSection = ({
    title,
    subtitle,
    children,
    className = '',
    columns = 3,
    gap = 'medium',
}: CardSectionProps) => {
    
    const columnClasses = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    }

    const gapClasses = {
        small: "gap-4",
        medium: "gap-6",
        large: "gap-8"
    }

    return (
        <section className={`${className}`}>
            {(title || subtitle) && (
                <div className="text-center mb-8">
                    {title && (
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-lg text-gray-600">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}

            <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
                {children}
            </div>
        </section>
    )
}

export default CardSection;