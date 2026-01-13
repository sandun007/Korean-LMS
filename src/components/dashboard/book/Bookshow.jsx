import React from 'react';
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout.jsx";

function Bookshow() {
    return (
        <DashboardLayout>
            <div className="min-h-screen bg-white flex flex-col">
                <nav className="px-6 md:px-8 py-4 border-b border-slate-200">
                    <ol className="flex items-center gap-2 text-sm text-slate-600">
                        <li>
                            <a href="/admin/dashboard" className="hover:text-indigo-600">Dashboard</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>/</span>
                            <span className="font-medium text-slate-900">Book Management</span>
                        </li>
                    </ol>
                </nav>

                {/* Top Header */}
                <div className="border-b border-slate-200">
                    <div className="px-6 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                                Book Management
                            </h1>
                            <p className="mt-2 text-lg text-slate-600">
                                Manage textbooks, workbooks, graded readers, and reference books for Korean learners
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-sm">
                                Add New Book
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="px-6 md:px-8 py-6 border-b border-slate-200">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-wrap gap-4">
                            <div className="min-w-[240px] flex border border-slate-300 rounded-full overflow-hidden bg-white">
                                <div className="bg-slate-50 px-4 flex items-center">
                                    <span className="text-slate-500">Type</span>
                                </div>
                                <div className="px-4 py-3 flex-1">
                                    <span className="text-slate-700">Textbook</span>
                                </div>
                            </div>

                            <div className="min-w-[220px] flex border border-slate-300 rounded-full overflow-hidden bg-white">
                                <div className="bg-slate-50 px-4 flex items-center">
                                    <span className="text-slate-500">Level</span>
                                </div>
                                <div className="px-4 py-3 flex-1">
                                    <span className="text-slate-700">Beginner ~ Intermediate</span>
                                </div>
                            </div>

                            <div className="min-w-[200px] flex border border-slate-300 rounded-full overflow-hidden bg-white">
                                <div className="bg-slate-50 px-4 flex items-center">
                                    <span className="text-slate-500">Price</span>
                                </div>
                                <div className="px-4 py-3 flex-1">
                                    <span className="text-slate-700">$30+</span>
                                </div>
                            </div>

                            <button className="px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                                More Filters
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <div className="flex-1 min-w-[300px] flex border border-slate-300 rounded-full overflow-hidden bg-white">
                                <div className="bg-slate-50 px-4 flex items-center">
                                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search book title, author, publisher, ISBN..."
                                    className="flex-1 px-4 py-3 outline-none text-slate-700"
                                />
                            </div>

                            <button className="px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                                Clear
                            </button>

                            <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-sm">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-6 md:px-8 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200">
                    <div className="flex bg-slate-100 rounded-full p-1">
                        <button className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-white transition-colors">
                            Price: High to Low
                        </button>
                        <button className="px-5 py-2 rounded-full text-sm font-medium bg-white shadow text-slate-900">
                            Newest First
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <button className="p-3 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100">
                            <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>
                        <button className="p-3 border border-slate-200 rounded-lg bg-white hover:bg-slate-50">
                            <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Books Grid */}
                <div className="px-6 md:px-8 py-8 flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                        {[
                            {
                                type: 'Textbook',
                                level: 'Beginner',
                                title: 'Seoul Korean 1 (세울 코리안 1)',
                                desc: 'Official textbook used by many Korean language institutes — Hangul + basic grammar',
                                rating: 4.9,
                                reviews: 284,
                                price: 38,
                                icon: '1'
                            },
                            {
                                type: 'Workbook',
                                level: 'Beginner',
                                title: 'Yonsei Korean 1 Workbook',
                                desc: 'Practice exercises perfectly matched with Yonsei Korean textbook',
                                rating: 4.7,
                                reviews: 156,
                                price: 28,
                                icon: '연'
                            },
                            {
                                type: 'Graded Reader',
                                level: 'Intermediate',
                                title: 'Korean Short Stories for Intermediate Learners',
                                desc: '20 fun stories with vocabulary & grammar explanations',
                                rating: 4.8,
                                reviews: 203,
                                price: 45,
                                icon: '읽'
                            },
                            {
                                type: 'Grammar',
                                level: 'Intermediate-Advanced',
                                title: 'Korean Grammar in Use - Intermediate',
                                desc: 'Comprehensive grammar reference with clear explanations and examples',
                                rating: 4.9,
                                reviews: 421,
                                price: 52,
                                icon: '문'
                            },
                            {
                                type: 'TOPIK Prep',
                                level: 'Advanced',
                                title: 'TOPIK II Master Final Set (2025 Edition)',
                                desc: 'Latest TOPIK II practice tests + detailed answer explanations',
                                rating: 4.8,
                                reviews: 289,
                                price: 78,
                                icon: '토'
                            },
                            {
                                type: 'Vocabulary',
                                level: 'All Levels',
                                title: 'Korean Vocabulary Builder 6000',
                                desc: 'Thematic vocabulary with example sentences and audio support',
                                rating: 4.6,
                                reviews: 167,
                                price: 35,
                                icon: '단'
                            }
                        ].map((book, i) => (
                            <div
                                key={i}
                                className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-7xl font-black text-indigo-300/50">
                                    {book.icon}
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-bold text-indigo-600 px-2.5 py-0.5 bg-indigo-50 rounded-full">
                                            {book.type}
                                        </span>
                                        <span className="text-xs font-medium text-slate-500">
                                            {book.level}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 line-clamp-2">
                                        {book.title}
                                    </h3>

                                    <p className="text-sm text-slate-600 line-clamp-2 mb-4 min-h-[42px]">
                                        {book.desc}
                                    </p>

                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="flex items-center gap-1">
                                            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="font-bold text-slate-900">{book.rating}</span>
                                            <span className="text-slate-500 text-sm">({book.reviews})</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-extrabold text-slate-900">
                                            ${book.price}
                                            <span className="text-base font-medium text-slate-500"> USD</span>
                                        </div>

                                        <button className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition-colors">
                                            Edit Book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
                            <button className="px-3 py-1 text-slate-600 hover:text-indigo-600 transition-colors">
                                ← Prev
                            </button>
                            <button className="px-4 py-1 bg-indigo-600 text-white rounded-full font-medium min-w-[36px]">
                                1
                            </button>
                            <button className="px-4 py-1 text-slate-600 hover:text-indigo-600 transition-colors min-w-[36px]">
                                2
                            </button>
                            <button className="px-4 py-1 text-slate-600 hover:text-indigo-600 transition-colors min-w-[36px]">
                                3
                            </button>
                            <span className="px-2 text-slate-400">...</span>
                            <button className="px-4 py-1 text-slate-600 hover:text-indigo-600 transition-colors min-w-[36px]">
                                8
                            </button>
                            <button className="px-3 py-1 text-slate-600 hover:text-indigo-600 transition-colors">
                                Next →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Bookshow;

