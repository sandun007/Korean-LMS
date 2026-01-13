import React from 'react';

function Createcourse() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Breadcrumb */}
            <nav className="px-6 md:px-10 py-4 border-b border-slate-200">
                <ol className="flex items-center gap-2 text-sm text-slate-600">
                    <li>
                        <a href="/admin/dashboard" className="hover:text-indigo-600">Dashboard</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <span>/</span>
                        <span className="font-medium text-slate-900">Courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span>/</span>
                        <span className="font-medium text-slate-900">Create New Course</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span>/</span>
                        <span className="font-medium text-indigo-600">Basic Information</span>
                    </li>
                </ol>
            </nav>

            {/* Header with Progress Steps */}
            <div className="border-b border-slate-200">
                <div className="px-6 md:px-10 py-6">
                    {/* Title & Actions */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                            Basic Information
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

                    {/* Step Navigation */}
                    <div className="flex flex-wrap gap-4">
                        <button className="flex-1 min-w-[280px] flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600 rounded-xl shadow-sm hover:shadow transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                    1
                                </div>
                                <span className="font-medium text-slate-900">Basic Information</span>
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                7/12
              </span>
                        </button>

                        <button className="flex-1 min-w-[280px] flex items-center justify-between px-6 py-4 bg-white border-b-4 border-transparent rounded-xl hover:bg-slate-50 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                                    2
                                </div>
                                <span className="font-medium text-slate-600">Advance Information</span>
                            </div>
                        </button>

                        <button className="flex-1 min-w-[280px] flex items-center justify-between px-6 py-4 bg-white border-b-4 border-transparent rounded-xl hover:bg-slate-50 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                                    3
                                </div>
                                <span className="font-medium text-slate-600">Curriculum</span>
                            </div>
                        </button>

                        <button className="flex-1 min-w-[280px] flex items-center justify-between px-6 py-4 bg-white border-b-4 border-transparent rounded-xl hover:bg-slate-50 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                                    4
                                </div>
                                <span className="font-medium text-slate-600">Publish Course</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Form Content */}
            <div className="px-6 md:px-10 py-10 max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Title */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                            Course Title <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Your course title"
                                className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            />
                            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                0/80
              </span>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                            Course Subtitle
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Your course subtitle"
                                className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            />
                            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                0/120
              </span>
                        </div>
                    </div>

                    {/* Category & Sub-category */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                            Course Category
                        </label>
                        <div className="relative">
                            <select className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white appearance-none">
                                <option>Select category...</option>
                                <option>Korean Grammar</option>
                                <option>Conversation</option>
                                <option>TOPIK Preparation</option>
                                <option>Business Korean</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                            Course Sub-category
                        </label>
                        <div className="relative">
                            <select className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white appearance-none">
                                <option>Select sub-category...</option>
                                <option>Beginner Grammar</option>
                                <option>Intermediate Conversation</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Topic */}
                    <div className="lg:col-span-2 space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                            Main Course Topic
                        </label>
                        <textarea
                            placeholder="What is primarily taught in your course? (e.g., Hangul, daily conversation, TOPIK prep...)"
                            rows={3}
                            className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
                        />
                    </div>

                    {/* Language, Level, Duration */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                            Course Language
                        </label>
                        <select className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white appearance-none">
                            <option>Korean</option>
                            <option>English (bilingual)</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                            Subtitle Language (Optional)
                        </label>
                        <select className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white appearance-none">
                            <option>None</option>
                            <option>English</option>
                            <option>Japanese</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                            Course Level
                        </label>
                        <select className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white appearance-none">
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                            Course Duration
                        </label>
                        <div className="flex gap-4">
                            <input
                                type="number"
                                placeholder="e.g. 12"
                                className="flex-1 px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <select className="w-32 px-4 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white appearance-none">
                                <option>Weeks</option>
                                <option>Months</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <button className="px-10 py-4 border border-slate-300 text-slate-600 rounded-full font-medium hover:bg-slate-50 transition-colors w-full sm:w-auto">
                        Cancel
                    </button>

                    <button className="px-12 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-sm w-full sm:w-auto">
                        Save & Next →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Createcourse;
