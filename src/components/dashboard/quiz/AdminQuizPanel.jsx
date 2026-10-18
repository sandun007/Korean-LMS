import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout.jsx";

function AdminQuizPanel() {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState({
        type: 'text',
        question: '',
        options: ['', '', '', ''],
        audioOptions: [null, null, null, null],
        correct: '',
        audioUrl: '',
        useAudioOptions: false,
    });
    const [editingId, setEditingId] = useState(null);

    const handleInputChange = (e, field) => {
        setNewQuestion({ ...newQuestion, [field]: e.target.value });
    };

    const handleOptionChange = (e, index) => {
        const updated = [...newQuestion.options];
        updated[index] = e.target.value;
        setNewQuestion({ ...newQuestion, options: updated });
    };

    const handleAudioOptionUpload = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const tempUrl = URL.createObjectURL(file);
            const updated = [...newQuestion.audioOptions];
            updated[index] = { file, url: tempUrl };
            setNewQuestion({ ...newQuestion, audioOptions: updated });
        }
    };

    const handleQuestionAudioUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const tempUrl = URL.createObjectURL(file);
            setNewQuestion({ ...newQuestion, audioUrl: tempUrl });
        }
    };

    const addOrUpdateQuestion = () => {
        const questionData = {
            ...newQuestion,
        };

        if (editingId !== null) {
            setQuestions(questions.map(q => (q.id === editingId ? { id: editingId, ...questionData } : q)));
            setEditingId(null);
        } else {
            const newId = questions.length ? Math.max(...questions.map(q => q.id)) + 1 : 1;
            setQuestions([...questions, { id: newId, ...questionData }]);
        }

        resetForm();
    };

    const editQuestion = (q) => {
        setNewQuestion({
            type: q.type,
            question: q.question,
            options: q.options || ['', '', '', ''],
            audioOptions: q.audioOptions || [null, null, null, null],
            correct: q.correct,
            audioUrl: q.audioUrl || '',
            useAudioOptions: q.useAudioOptions || false,
        });
        setEditingId(q.id);
    };

    const deleteQuestion = (id) => {
        setQuestions(questions.filter(q => q.id !== id));
    };

    const resetForm = () => {
        setNewQuestion({
            type: 'text',
            question: '',
            options: ['', '', '', ''],
            audioOptions: [null, null, null, null],
            correct: '',
            audioUrl: '',
            useAudioOptions: false,
        });
    };

    return (
        <DashboardLayout>
            <div className="min-h-screen bg-white flex flex-col">
                <nav className="px-6 md:px-10 py-4 border-b border-slate-200 bg-white">
                    <ol className="flex items-center gap-2 text-sm text-slate-600">
                        <li><Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link></li>
                        <li className="flex items-center gap-2">
                            <span>/</span>
                            <span className="font-medium text-indigo-600">Create Quiz Panel</span>
                        </li>
                    </ol>
                </nav>

                <div className="px-6 md:px-10 py-10 max-w-7xl mx-auto w-full space-y-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Create Quiz Panel
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Form */}
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
                            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                                {editingId ? 'Edit Question' : 'Add New Question'}
                            </h2>

                            <div className="space-y-6">
                                {/* Question Type */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Question Type</label>
                                    <select
                                        value={newQuestion.type}
                                        onChange={(e) => handleInputChange(e, 'type')}
                                        className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <option value="text">Text Question</option>
                                        <option value="audio">Listening (Audio) Question</option>
                                    </select>
                                </div>

                                {/* Question Text */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Question</label>
                                    <textarea
                                        value={newQuestion.question}
                                        onChange={(e) => handleInputChange(e, 'question')}
                                        placeholder="Enter question text..."
                                        rows={3}
                                        className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                {/* Use Audio Options Toggle (only shown when type is audio) */}
                                {newQuestion.type === 'audio' && (
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="useAudioOptions"
                                            checked={newQuestion.useAudioOptions}
                                            onChange={(e) => setNewQuestion({ ...newQuestion, useAudioOptions: e.target.checked })}
                                            className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                                        />
                                        <label htmlFor="useAudioOptions" className="text-sm font-medium text-slate-700">
                                            Use audio files for answer options (instead of text)
                                        </label>
                                    </div>
                                )}

                                {/* Options - Text or Audio depending on toggle */}
                                {['A', 'B', 'C', 'D'].map((letter, idx) => (
                                    <div key={idx}>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Option {letter}
                                        </label>

                                        {newQuestion.type === 'audio' && newQuestion.useAudioOptions ? (
                                            <div>
                                                <input
                                                    type="file"
                                                    accept="audio/*"
                                                    onChange={(e) => handleAudioOptionUpload(e, idx)}
                                                    className="w-full px-5 py-4 border border-slate-300 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                                />
                                                {newQuestion.audioOptions[idx]?.url && (
                                                    <audio controls className="mt-3 w-full">
                                                        <source src={newQuestion.audioOptions[idx].url} type="audio/mpeg" />
                                                    </audio>
                                                )}
                                            </div>
                                        ) : (
                                            <input
                                                type="text"
                                                value={newQuestion.options[idx]}
                                                onChange={(e) => handleOptionChange(e, idx)}
                                                placeholder={`Enter option ${letter}`}
                                                className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        )}
                                    </div>
                                ))}

                                {/* Correct Answer */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Correct Answer</label>
                                    <select
                                        value={newQuestion.correct}
                                        onChange={(e) => handleInputChange(e, 'correct')}
                                        className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <option value="">Select correct option</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                    </select>
                                </div>

                                {/* Question Audio (only for audio type) */}
                                {newQuestion.type === 'audio' && (
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Upload Question Audio</label>
                                        <input
                                            type="file"
                                            accept="audio/*"
                                            onChange={handleQuestionAudioUpload}
                                            className="w-full px-5 py-4 border border-slate-300 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                        />
                                        {newQuestion.audioUrl && (
                                            <audio controls className="mt-4 w-full">
                                                <source src={newQuestion.audioUrl} type="audio/mpeg" />
                                            </audio>
                                        )}
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={addOrUpdateQuestion}
                                        className="flex-1 px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-md"
                                    >
                                        {editingId ? 'Update Question' : 'Add Question'}
                                    </button>
                                    {editingId && (
                                        <button
                                            onClick={resetForm}
                                            className="px-6 py-4 border border-slate-300 rounded-full font-medium hover:bg-slate-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Question List */}
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
                            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                                Existing Questions ({questions.length})
                            </h2>

                            <div className="space-y-6 max-h-[70vh] overflow-y-auto">
                                {questions.length === 0 ? (
                                    <p className="text-center text-slate-500 py-12">
                                        No questions added yet. Start adding above!
                                    </p>
                                ) : (
                                    questions.map((q) => (
                                        <div key={q.id} className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <span className="text-sm font-medium text-indigo-600">
                                                        Q{q.id} • {q.type.toUpperCase()}
                                                    </span>
                                                    <p className="text-lg font-semibold text-slate-900 mt-1">
                                                        {q.question}
                                                    </p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => editQuestion(q)}
                                                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm transition-colors"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => deleteQuestion(q.id)}
                                                        className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-full text-sm transition-colors"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="space-y-2 mb-4">
                                                {q.useAudioOptions ? (
                                                    <p className="text-sm text-slate-600 italic">
                                                        Audio options uploaded ({q.options.length} files)
                                                    </p>
                                                ) : (
                                                    q.options.map((opt, idx) => (
                                                        <p key={idx} className="text-sm text-slate-700">
                                                            {String.fromCharCode(65 + idx)}. {opt}
                                                        </p>
                                                    ))
                                                )}
                                            </div>

                                            <p className="text-sm text-slate-500 mb-2">
                                                Correct: {q.correct}
                                            </p>

                                            {q.type === 'audio' && q.audioUrl && (
                                                <audio controls className="w-full mt-3">
                                                    <source src={q.audioUrl} type="audio/mpeg" />
                                                </audio>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default AdminQuizPanel;