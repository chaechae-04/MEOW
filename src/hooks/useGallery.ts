// src/hooks/useGallery.ts
import { useState, useEffect, useCallback } from 'react'
import { DRIVE_CONFIG } from '../constants/driveConfig'
import useGoogleDrive from './useGoogleDrive'

export const useGallery = () => {
    const { images, loading } = useGoogleDrive(DRIVE_CONFIG.GALLERY_FOLDER_ID)
    const [displayedImages, setDisplayedImages] = useState<string[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const imagesPerPage = 12

    // 디버깅 로그
    console.log('Gallery images:', images)
    console.log('Loading state:', loading)
    console.log('GALLERY_FOLDER_ID:', DRIVE_CONFIG.GALLERY_FOLDER_ID)

    // 초기 이미지 로드
    useEffect(() => {
        if (images.length > 0) {
            const initialImages = images.slice(0, imagesPerPage)
            setDisplayedImages(initialImages)
        }
    }, [images])

    // 더 많은 이미지 로드
    const loadMoreImages = useCallback(() => {
        const nextIndex = currentIndex + imagesPerPage
        if (nextIndex < images.length) {
            const newImages = images.slice(currentIndex, nextIndex)
            setDisplayedImages(prev => [...prev, ...newImages])
            setCurrentIndex(nextIndex)
        }
    }, [currentIndex, images, imagesPerPage])

    // 스크롤 이벤트 처리
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            if (scrollTop + windowHeight >= documentHeight - 100) {
                loadMoreImages()
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [loadMoreImages])

    return {
        displayedImages,
        loading,
        currentIndex,
        totalImages: images.length,
        hasMoreImages: currentIndex < images.length
    }
}