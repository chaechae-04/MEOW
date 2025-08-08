import { useState, useEffect } from 'react'
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    orderBy,
    query,
    Timestamp
} from 'firebase/firestore'
import { db } from '../firebase'
import type { DiaryEntry, CreateDiaryEntry } from '../types/diary'

export const useDiary = () => {
    const [entries, setEntries] = useState<DiaryEntry[]>([])
    const [loading, setLoading] = useState(true)

    // 다이어리 목록 가져오기
    const fetchEntries = async () => {
        try {
            setLoading(true)
            const q = query(collection(db, 'diaries'), orderBy('createdAt', 'desc'))
            const querySnapshot = await getDocs(q)

            const diaryEntries: DiaryEntry[] = []
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                diaryEntries.push({
                    id: doc.id,
                    title: data.title,
                    content: data.content,
                    mood: data.mood,
                    createdAt: data.createdAt.toDate(),
                    updatedAt: data.updatedAt.toDate()
                })
            })

            setEntries(diaryEntries)
        } catch (error) {
            console.error('Error fetching diaries:', error)
        } finally {
            setLoading(false)
        }
    }

    // src/hooks/useDiary.ts에서 addEntry 함수 수정
    const addEntry = async (entry: CreateDiaryEntry) => {
        try {
            await addDoc(collection(db, 'diaries'), {
                ...entry,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now()
            })

            await fetchEntries()
            // return docRef.id  // 이 줄 제거
        } catch (error) {
            console.error('Error adding diary:', error)
            throw error
        }
    }

    // 다이어리 수정
    const updateEntry = async (id: string, entry: Partial<CreateDiaryEntry>) => {
        try {
            const docRef = doc(db, 'diaries', id)
            await updateDoc(docRef, {
                ...entry,
                updatedAt: Timestamp.now()
            })

            await fetchEntries()
        } catch (error) {
            console.error('Error updating diary:', error)
            throw error
        }
    }

    // 다이어리 삭제
    const deleteEntry = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'diaries', id))
            await fetchEntries()
        } catch (error) {
            console.error('Error deleting diary:', error)
            throw error
        }
    }

    useEffect(() => {
        fetchEntries()
    }, [])

    return {
        entries,
        loading,
        addEntry,
        updateEntry,
        deleteEntry,
        fetchEntries
    }
}