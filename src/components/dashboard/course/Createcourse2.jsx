import React from 'react';
import { Link } from 'react-router-dom'

function Createcourse2() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <nav className="px-6 md:px-10 py-4 border-b border-slate-200 bg-white">
                <ol className="flex items-center gap-2 text-sm text-slate-600">
                    <li><Link to="/dashboard/main" className="hover:text-indigo-600">Dashboard</Link></li>
                    <li className="flex items-center gap-2"><span>/</span><span className="font-medium text-slate-900">Courses</span></li>
                    <li className="flex items-center gap-2"><span>/</span><span className="font-medium text-slate-900">Create New Course</span></li>
                    <li className="flex items-center gap-2"><span>/</span><span className="font-medium text-indigo-600">Advance Information</span></li>
                </ol>
            </nav>

            <div className="border-b border-slate-200 bg-white">
                <div className="px-6 md:px-10 py-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Advance Information
                        </h1>

                        <div className="flex items-center gap-4">
                            <button className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-medium transition-colors">
                                Save Draft
                            </button>
                            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-sm">
                                Save & Preview
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex-1 min-w-[260px] flex items-center justify-between px-5 py-4 bg-white border-b-4 border-green-500 rounded-xl shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">
                                    1
                                </div>
                                <span className="font-medium text-slate-900">Basic Information</span>
                            </div>
                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        {/* Active */}
                        <div className="flex-1 min-w-[260px] flex items-center justify-between px-5 py-4 bg-white border-b-4 border-indigo-600 rounded-xl shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                                    2
                                </div>
                                <span className="font-medium text-slate-900">Advance Information</span>
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                                7/12
                            </span>
                        </div>

                        {/* Next */}
                        <div className="flex-1 min-w-[260px] flex items-center justify-between px-5 py-4 bg-white border-b-4 border-transparent rounded-xl hover:bg-slate-50 transition-all opacity-70">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                                    3
                                </div>
                                <span className="font-medium text-slate-600">Curriculum</span>
                            </div>
                        </div>

                        <div className="flex-1 min-w-[260px] flex items-center justify-between px-5 py-4 bg-white border-b-4 border-transparent rounded-xl hover:bg-slate-50 transition-all opacity-70">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                                    4
                                </div>
                                <span className="font-medium text-slate-600">Publish Course</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-10 py-10 max-w-7xl mx-auto w-full space-y-14">
                {/* Thumbnail + Trailer Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Thumbnail */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                            Course Thumbnail
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="w-full md:w-72 h-56 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center hover:border-indigo-400 transition-colors">
                                <div className="text-center text-slate-400">
                                    <svg className="w-20 h-20 mx-auto mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                                    </svg>
                                    <p className="text-sm">1200×800px recommended<br />JPG / PNG</p>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Upload your course thumbnail here. Important guidelines: 1200×800 pixels or 12:8 ratio. Supported formats: .jpg, .jpeg, .png
                                </p>
                                <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-sm">
                                    Upload Image
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Trailer */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                            Course Trailer (Optional)
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="w-full md:w-72 h-56 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center hover:border-indigo-400 transition-colors">
                                <div className="text-center text-slate-400">
                                    <svg className="w-20 h-20 mx-auto mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm">Promo video recommended<br />MP4 • max 100MB</p>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Students who watch a well-made promo video are 5× more likely to enroll. This can go up to 10× for truly exceptional videos.
                                </p>
                                <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-sm">
                                    Upload Video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course Description */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        Course Description
                    </h2>
                    <div className="relative">
                        <textarea
                            placeholder="Enter your course description here..."
                            rows={8}
                            className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
                        />
                        <div className="absolute bottom-3 left-3 flex gap-3">
                            <button className="p-2 hover:bg-slate-100 rounded"><strong>B</strong></button>
                            <button className="p-2 hover:bg-slate-100 rounded"><em>i</em></button>
                            <button className="p-2 hover:bg-slate-100 rounded">Link</button>
                            <button className="p-2 hover:bg-slate-100 rounded">•</button>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                            What you will teach in this course (4/8)
                        </h2>
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-full font-medium transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add new
                        </button>
                    </div>

                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">
                                {String(i + 1).padStart(2, '0')}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="What you will teach in this course..."
                                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                />
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                                    0/120
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                            Target Audience (4/8)
                        </h2>
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-full font-medium transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add new
                        </button>
                    </div>

                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">
                                {String(i + 1).padStart(2, '0')}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Who this course is for..."
                                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                />
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                                    0/120
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                            Course Requirements (4/8)
                        </h2>
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-full font-medium transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add new
                        </button>
                    </div>

                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">
                                {String(i + 1).padStart(2, '0')}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="What are the requirements for this course..."
                                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                />
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                                    0/120
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-200">
                    <Link
                        to="/dashboard/course/create"
                        className="px-12 py-4 border border-slate-300 text-slate-600 rounded-full font-medium hover:bg-slate-50 transition-colors w-full sm:w-auto text-center"
                    >
                        Previous
                    </Link>

                    <Link to="#"
                        className="px-12 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-md w-full sm:w-auto">
                        Save & Next →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Createcourse2;
