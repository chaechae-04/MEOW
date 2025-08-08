// src/components/diary/DiaryForm.tsx
import { useState } from 'react'
import type { CreateDiaryEntry } from '../../types/diary'

interface DiaryFormProps {
    onSubmit: (entry: CreateDiaryEntry) => Promise<string | void>
    loading?: boolean
}

const DiaryForm = ({ onSubmit, loading = false }: DiaryFormProps) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [mood, setMood] = useState<CreateDiaryEntry['mood']>('happy')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!title.trim() || !content.trim()) {
            alert('제목이랑 내용은 필수야. 모르는건 아니지?')
            return
        }

        try {
            await onSubmit({ title, content, mood })
            
            // 성공 메시지 표시
            alert('오늘도 엄청난 일을 해냈어 📝')
            
            // 폼 필드 초기화
            setTitle('')
            setContent('')
            setMood('happy')
        } catch (error) {
            console.error('Error submitting diary:', error)
            alert('오류가 발생했어. 빨리 콘솔 확인해')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">오늘의 일기</h2>
            
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    제목
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="제목을 쓰는 칸이야. 혹시 모를까봐"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    기분
                </label>
                <select
                    value={mood}
                    onChange={(e) => setMood(e.target.value as CreateDiaryEntry['mood'])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="happy">😺 행복해</option>
                    <option value="sad">😿 슬퍼</option>
                    <option value="excited">🤩 신나</option>
                    <option value="calm">😌 평온해</option>
                    <option value="angry">😠 화나</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    내용
                </label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="이건 내용을 쓰는 칸이고"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? '저장 중...' : '일기 저장하기'}
            </button>
        </form>
    )
}

export default DiaryForm