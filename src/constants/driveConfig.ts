const DRIVE_CONFIG = {
    FOLDER_ID: '161u9nxCCFknJ-Z9uZtp9ALVF_1tWKsv_',
    PROFILE_FOLDER_ID: '1aks5BqE-NKsm8bjugtKVlOgi8jLmXOkG',
    FEATURE_FOLDER_ID: '1adkt-ijJnmY5wZb0XQGPDf5a5JOQxaf3',
    BASE_URL: 'https://www.googleapis.com/drive/v3',
    API_KEY: import.meta.env.VITE_GOOGLE_DRIVE_API_KEY,
} as const

const getDriveImageUrl = (fileId: string) => {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`
}

export { DRIVE_CONFIG, getDriveImageUrl }