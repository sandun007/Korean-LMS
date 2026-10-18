import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout.jsx";

// Dummy data
const mockQuizzes = [
    {
        id: 1,
        title: "TOPIK I - Beginner Hangul Test",
        totalQuestions: 40,
        textQuestions: 20,
        audioQuestions: 20,
        createdAt: "2025-11-05",
        status: "Published",
    },
    {
        id: 2,
        title: "EPS-TOPIK Vocabulary Quiz #1",
        totalQuestions: 30,
        textQuestions: 25,
        audioQuestions: 5,
        createdAt: "2025-11-10",
        status: "Draft",
    },
    {
        id: 3,
        title: "Korean Daily Conversation Practice",
        totalQuestions: 25,
        textQuestions: 10,
        audioQuestions: 15,
        createdAt: "2025-11-15",
        status: "Published",
    },
];

function AdminQuizDashboard() {
    const [quizzes] = useState(mockQuizzes);

    const totalQuizzes = quizzes.length;
    const publishedCount = quizzes.filter(q => q.status === "Published").length;

    return (
        <DashboardLayout>
            <div className="min-h-screen bg-white flex flex-col">
                {/* Breadcrumb */}
                <nav className="px-6 md:px-10 py-4 border-b border-slate-200 bg-white">
                    <ol className="flex items-center gap-2 text-sm text-slate-600">
                        <li>
                            <Link to="/dashboard" className="hover:text-indigo-600">
                                Dashboard
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>/</span>
                            <span className="font-medium text-indigo-600">Exam Management</span>
                        </li>
                    </ol>
                </nav>

                {/* Main Content */}
                <div className="px-6 md:px-10 py-8 max-w-7xl mx-auto w-full">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                                Exam Management
                            </h1>
                            <p className="text-slate-600 mt-2">
                                Create and manage Korean language exams
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div className="bg-white border border-slate-200 rounded-xl px-6 py-4 shadow-sm">
                                <p className="text-sm text-slate-600">Total Exams</p>
                                <p className="text-3xl font-bold text-indigo-600">{totalQuizzes}</p>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl px-6 py-4 shadow-sm">
                                <p className="text-sm text-slate-600">Published</p>
                                <p className="text-3xl font-bold text-green-600">{publishedCount}</p>
                            </div>
                        </div>
                    </div>

                    {/* Create New Quiz Button */}
                    <div className="mb-10">
                        <Link
                            to="/dashboard/adminquiz"
                            className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-lg rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            + Create New Quiz / Exam
                        </Link>
                        <Link
                            to="/dashboard/quiz"
                            className="ms-3 inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-lg rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            View Quiz
                        </Link>
                    </div>

                    {/* Quiz List */}
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-200">
                            <h2 className="text-xl font-extrabold text-slate-900">
                                All Quizzes / Exams ({totalQuizzes})
                            </h2>
                        </div>

                        {quizzes.length === 0 ? (
                            <div className="p-12 text-center text-slate-500">
                                No quizzes created yet. Click the button above to start!
                            </div>
                        ) : (
                            <div className="divide-y divide-slate-200">
                                {quizzes.map((quiz) => (
                                    <div
                                        key={quiz.id}
                                        className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                                    >
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">
                                                {quiz.title}
                                            </h3>
                                            <div className="mt-1 flex flex-wrap gap-4 text-sm text-slate-600">
                                                <span>Questions: <strong>{quiz.totalQuestions}</strong></span>
                                                <span>Text: <strong>{quiz.textQuestions}</strong></span>
                                                <span>Audio: <strong>{quiz.audioQuestions}</strong></span>
                                                <span className="text-slate-500">
                                                    Created: {quiz.createdAt}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                quiz.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                                            }`}>
                                                {quiz.status}
                                            </span>
                                            <Link
                                                to="#"
                                                className="px-5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium transition-colors"
                                            >
                                                Manage / Edit
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default AdminQuizDashboard;