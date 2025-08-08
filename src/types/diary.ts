// src/types/diary.ts
export interface DiaryEntry {
    id: string
    title: string
    content: string
    mood: 'happy' | 'sad' | 'excited' | 'calm' | 'angry'
    createdAt: Date
    updatedAt: Date
}

export interface CreateDiaryEntry {
    title: string
    content: string
    mood: DiaryEntry['mood']
}