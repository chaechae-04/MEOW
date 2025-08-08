// src/pages/DiaryPage.tsx 수정
import PageLayout from "../components/common/PageLayout"
import DiaryForm from "../components/diary/DiaryForm"
import DiaryList from "../components/diary/DiaryList"
import { useDiary } from "../hooks/useDiary"

const DiaryPage = () => {
    const { entries, loading, addEntry, deleteEntry } = useDiary()

    return (
        <PageLayout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">My Diary 📖</h1>
                
                <DiaryForm onSubmit={addEntry} loading={loading} />
                <DiaryList 
                    entries={entries} 
                    onDelete={deleteEntry} 
                    loading={loading} 
                />
            </div>
        </PageLayout>
    )
}

export default DiaryPage