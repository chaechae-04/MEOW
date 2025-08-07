import { useState, useEffect } from 'react'
import { DRIVE_CONFIG } from '../constants/driveConfig'

interface DriveFile {
    id: string
    name: string
    mimeType: string
    webContentLink?: string
    webViewLink?: string
    thumbnailLink?: string
}

const API_KEY = DRIVE_CONFIG.API_KEY

const useGoogleDrive = (folderId: string) => {
    const [images, setImages] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchImages = async () => {
            try {
                console.log('Fetching images from folder:', folderId)
                console.log('Using API key:', API_KEY)

                const response = await fetch(
                    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,mimeType,webContentLink,webViewLink,thumbnailLink)&key=${API_KEY}`
                )

                console.log('Response status:', response.status)
                const data = await response.json()
                console.log('API Response:', data)

                console.log('Files found:', data.files)
                const imageUrls = data.files
                    .filter((file: DriveFile) => file.mimeType.startsWith('image/'))
                    .map((file: DriveFile) => {
                        // API에서 제공하는 thumbnailLink 사용
                        if (file.thumbnailLink) {
                            console.log(`Using thumbnailLink for ${file.name}:`, file.thumbnailLink)
                            return file.thumbnailLink
                        }
                        // 백업: 수동 생성
                        const url = `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`
                        console.log(`Generated URL for ${file.name}:`, url)
                        return url
                    })
                
                data.files.forEach((file: DriveFile) => {
                    console.log(`=== ${file.name} ===`)
                    console.log('webContentLink:', file.webContentLink)
                    console.log('webViewLink:', file.webViewLink)
                    console.log('thumbnailLink:', file.thumbnailLink)
                    console.log('mimeType:', file.mimeType)
                    console.log('id:', file.id)
                    console.log('--------------------------------')
                })

                setImages(imageUrls)
            } catch (error) {
                console.error('Error fetching images:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchImages()
    }, [folderId])

    return { images, loading }
}

export default useGoogleDrive 