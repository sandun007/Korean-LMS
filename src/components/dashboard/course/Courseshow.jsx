import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout.jsx";

function Courseshow() {
    return (
        <>
            <DashboardLayout>
                <div className="min-h-screen bg-white flex flex-col">
                    <nav className="px-6 md:px-8 py-4 border-b border-slate-200">
                        <ol className="flex items-center gap-2 text-sm text-slate-600">
                            <li>
                                <a href="#" className="hover:text-indigo-600">Dashboard</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>/</span>
                                <span className="font-medium text-slate-900">Courses Management</span>
                            </li>
                        </ol>
                    </nav>

                    <div className="border-b border-slate-200">
                        <div className="px-6 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                                    Courses Management
                                </h1>
                                <p className="mt-2 text-lg text-slate-600">
                                    Manage and update Korean language courses for learners
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link
                                    to="/dashboard/course/create"
                                    className="inline-flex items-center px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-sm"
                                >
                                    Add New Course
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Filters & Search */}
                    <div className="px-6 md:px-8 py-6 border-b border-slate-200">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-wrap gap-4">
                                <div className="min-w-[240px] flex border border-slate-300 rounded-full overflow-hidden bg-white">
                                    <div className="bg-slate-50 px-4 flex items-center">
                                        <span className="text-slate-500">Category</span>
                                    </div>
                                    <div className="px-4 py-3 flex-1">
                                        <span className="text-slate-700">Korean Grammar</span>
                                    </div>
                                </div>

                                {/* Level */}
                                <div className="min-w-[220px] flex border border-slate-300 rounded-full overflow-hidden bg-white">
                                    <div className="bg-slate-50 px-4 flex items-center">
                                        <span className="text-slate-500">Level</span>
                                    </div>
                                    <div className="px-4 py-3 flex-1">
                                        <span className="text-slate-700">Beginner</span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="min-w-[200px] flex border border-slate-300 rounded-full overflow-hidden bg-white">
                                    <div className="bg-slate-50 px-4 flex items-center">
                                        <span className="text-slate-500">Price</span>
                                    </div>
                                    <div className="px-4 py-3 flex-1">
                                        <span className="text-slate-700">$50+</span>
                                    </div>
                                </div>

                                <button className="px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                                    Filters
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
                                        placeholder="Search Korean courses, levels, topics..."
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
                                Highest Rated
                            </button>
                            <button className="px-5 py-2 rounded-full text-sm font-medium bg-white shadow text-slate-900">
                                Newest First
                            </button>
                        </div>

                        <div className="flex gap-2">
                            <button className="p-3 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100">
                                {/* List view icon */}
                                <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </button>
                            <button className="p-3 border border-slate-200 rounded-lg bg-white hover:bg-slate-50">
                                {/* Grid view icon */}
                                <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="px-6 md:px-8 py-8 flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                            {/* Korean LMS Course Cards */}
                            {[
                                {
                                    category: 'Beginner',
                                    title: 'Korean Basics: Hangul & Greetings',
                                    desc: 'Learn the Korean alphabet and basic greetings to start your journey.',
                                    rating: 4.9,
                                    reviews: 456,
                                    price: 49,
                                    icon: '한'
                                },
                                {
                                    category: 'Intermediate',
                                    title: 'Everyday Korean Conversation',
                                    desc: 'Practice real-life dialogues for shopping, dining and daily interactions.',
                                    rating: 4.8,
                                    reviews: 321,
                                    price: 79,
                                    icon: '말'
                                },
                                {
                                    category: 'Advanced',
                                    title: 'Business Korean & Etiquette',
                                    desc: 'Master professional language, cultural nuances and business communication.',
                                    rating: 4.7,
                                    reviews: 278,
                                    price: 129,
                                    icon: '비'
                                },
                                {
                                    category: 'Beginner',
                                    title: 'Korean Grammar Fundamentals',
                                    desc: 'Build a strong foundation with essential grammar rules and patterns.',
                                    rating: 4.9,
                                    reviews: 512,
                                    price: 59,
                                    icon: '문'
                                },
                                {
                                    category: 'Intermediate',
                                    title: 'Korean Listening & Speaking',
                                    desc: 'Improve pronunciation and comprehension through audio exercises.',
                                    rating: 4.8,
                                    reviews: 389,
                                    price: 89,
                                    icon: '듣'
                                },
                                {
                                    category: 'Advanced',
                                    title: 'TOPIK Preparation Course',
                                    desc: 'Targeted training for TOPIK exam with practice tests and strategies.',
                                    rating: 4.9,
                                    reviews: 423,
                                    price: 149,
                                    icon: '시'
                                }
                            ].map((course, i) => (
                                <Link to="/courseview"
                                    className="block">
                                    <div
                                        key={i}
                                        className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                                    >
                                        <div className="h-48 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-8xl font-black text-indigo-300/40">
                                            {course.icon}
                                        </div>

                                        <div className="p-5">
                                            <div className="text-xs font-bold text-indigo-600 mb-1">
                                                {course.category}
                                            </div>

                                            <h3 className="text-xl font-extrabold text-slate-900 mb-2 line-clamp-2">
                                                {course.title}
                                            </h3>

                                            <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                                                {course.desc}
                                            </p>

                                            <div className="flex items-center gap-4 mb-5">
                                                <div className="flex items-center gap-1">
                                                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="font-bold text-slate-900">{course.rating}</span>
                                                    <span className="text-slate-500 text-sm">({course.reviews})</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="text-2xl font-extrabold text-slate-900">
                                                    ${course.price}
                                                    <span className="text-base font-medium text-slate-500"> USD</span>
                                                </div>

                                                <button className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition-colors">
                                                    Edit Course
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
                                <button className="px-3 py-1 text-slate-600 hover:text-indigo-600 transition-colors">
                                    &lt; Prev
                                </button>
                                <button className="px-3 py-1 bg-indigo-600 text-white rounded-full font-medium">
                                    1
                                </button>
                                <button className="px-3 py-1 text-slate-600 hover:text-indigo-600 transition-colors">
                                    2
                                </button>
                                <button className="px-3 py-1 text-slate-600 hover:text-indigo-600 transition-colors">
                                    3
                                </button>
                                <span className="text-slate-400">...</span>
                                <button className="px-3 py-1 text-slate-600 hover:text-indigo-600 transition-colors">
                                    10
                                </button>
                                <button className="px-3 py-1 text-slate-600 hover:text-indigo-600 transition-colors">
                                    Next &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}

export default Courseshow;


