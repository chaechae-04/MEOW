// src/components/diary/DiaryItem.tsx
import type { DiaryEntry } from '../../types/diary'

interface DiaryItemProps {
    entry: DiaryEntry
    onDelete: (id: string) => Promise<void>
}

const DiaryItem = ({ entry, onDelete }: DiaryItemProps) => {
    const moodEmojis = {
        happy: '😺',
        sad: '😿',
        excited: '🤩',
        calm: '😌',
        angry: '😠'
    }

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date)
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {entry.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{moodEmojis[entry.mood]}</span>
                        <span>{formatDate(entry.createdAt)}</span>
                    </div>
                </div>
                <button
                    onClick={() => onDelete(entry.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                >
                    삭제
                </button>
            </div>
            
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {entry.content}
            </p>
        </div>
    )
}

export default DiaryItem