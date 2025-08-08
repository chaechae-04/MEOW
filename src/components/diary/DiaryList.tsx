// src/components/diary/DiaryList.tsx
import DiaryItem from './DiaryItem'
import type { DiaryEntry } from '../../types/diary'

interface DiaryListProps {
    entries: DiaryEntry[]
    onDelete: (id: string) => Promise<void>
    loading: boolean
}

const DiaryList = ({ entries, onDelete, loading }: DiaryListProps) => {
    if (loading) {
        return (
            <div className="text-center py-8">
                <p>일기를 불러오는 중...</p>
            </div>
        )
    }

    if (entries.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-600">일기가 없다. 작성하던지</p>
            </div>
        )
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">내 엄청난 일기 목록</h2>
            {entries.map((entry) => (
                <DiaryItem 
                    key={entry.id} 
                    entry={entry} 
                    onDelete={onDelete} 
                />
            ))}
        </div>
    )
}

export default DiaryList