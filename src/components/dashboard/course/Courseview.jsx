import React from 'react';
import { Link } from 'react-router-dom';
import {
    IconBrandFacebook,
    IconBrandTiktok,
    IconBrandYoutube,
    IconProgressCheck,
    IconStopwatch,
    IconStarFilled,
} from "@tabler/icons-react";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout.jsx";

function Courseview() {
    return (
        <DashboardLayout>
            <div className="min-h-screen bg-white flex flex-col">
                <nav className="px-6 md:px-10 py-4 border-b border-slate-200 bg-white">
                    <ol className="flex items-center gap-2 text-sm text-slate-600">
                        <li>
                            <Link to="/student/dashboard" className="hover:text-indigo-600">Home</Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>/</span>
                            <Link to="/student/courses" className="hover:text-indigo-600">Courses</Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>/</span>
                            <span className="font-medium text-indigo-600">
                                Hangul Master: Read & Write Korean in 3 Hours
                            </span>
                        </li>
                    </ol>
                </nav>

                <div className="px-6 md:px-10 py-10 max-w-7xl mx-auto w-full space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Hangul Master: Read & Write Korean in 3 Hours
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-slate-900">Beginner</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>2 hrs 26 min</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="font-medium">4.8</span>
                                <span className="text-slate-500">(20 ratings)</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Main Content - Video + Lessons */}
                        <div className="lg:col-span-2 space-y-10">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                                <div className="aspect-video bg-slate-900 flex items-center justify-center">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://player.vimeo.com/video/97243285?title=0&byline=0&portrait=0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                                    Course Description
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Master Hangul — the Korean alphabet — in just 3 hours! This beginner-friendly course teaches you how to read, write, and pronounce every Korean character with clear explanations, fun examples, and practice exercises. Perfect for absolute beginners who want to start reading K-pop lyrics, K-drama subtitles, or street signs in Korea right away.
                                </p>
                            </div>

                            {/* Lessons List */}
                            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                <div className="px-6 py-4 border-b border-slate-200">
                                    <h3 className="text-xl font-extrabold text-slate-900">
                                        Course Content
                                    </h3>
                                </div>
                                <ul className="divide-y divide-slate-200">
                                    {[
                                        { number: '1', title: 'Why Hangul is Easy & Unique', duration: '12:45' },
                                        { number: '2', title: 'Consonants (자음) - Full Guide', duration: '28:30', active: true },
                                        { number: '3', title: 'Vowels (모음) - Shape & Sound', duration: '25:10', pro: true  },
                                        { number: '4', title: 'Batchim (받침) - Final Consonants', duration: '32:20', pro: true  },
                                        { number: '5', title: 'Reading Practice - Real Words', duration: '45:00', pro: true },
                                        { number: '6', title: 'Writing Practice & Quiz', duration: '35:15', pro: true },
                                    ].map((lesson, index) => (
                                        <li
                                            key={index}
                                            className={`px-6 py-4 hover:bg-slate-50 transition-colors ${
                                                lesson.active ? 'bg-indigo-50' : ''
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                <span className={`font-medium ${lesson.active ? 'text-indigo-600' : 'text-slate-600'}`}>
                                                    {lesson.number}.
                                                </span>
                                                    <span className={`font-medium ${lesson.active ? 'text-indigo-700' : 'text-slate-900'}`}>
                                                    {lesson.title}
                                                </span>
                                                    {lesson.pro && (
                                                        <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                                                        PRO
                                                    </span>
                                                    )}
                                                </div>
                                                {lesson.duration && (
                                                    <span className="text-sm text-slate-500">{lesson.duration}</span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-slate-200">
                                    <h3 className="text-2xl font-extrabold text-slate-900">
                                        Course Rating
                                    </h3>
                                </div>

                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-10">
                                        <div className="text-center">
                                            <div className="text-6xl md:text-7xl font-extrabold text-slate-900 mb-2">
                                                4.8
                                            </div>
                                            <div className="flex justify-center gap-1 mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <IconStarFilled key={i} className="w-7 h-7 text-amber-500" />
                                                ))}
                                            </div>
                                            <p className="text-slate-600 font-medium">Course Rating</p>
                                        </div>

                                        <div className="flex-1 space-y-5 w-full max-w-md">
                                            {[
                                                { stars: 5, percent: 75, width: '75%' },
                                                { stars: 4, percent: 21, width: '21%' },
                                                { stars: 3, percent: 3, width: '3%' },
                                                { stars: 2, percent: 1, width: '1%' },
                                                { stars: 1, percent: '<1', width: '0.5%' },
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1.5 min-w-[100px]">
                                                        <span className="font-medium text-slate-700 w-6 text-right">
                                                            {item.stars}
                                                        </span>
                                                        <IconStarFilled className="w-5 h-5 text-amber-500" />
                                                    </div>
                                                    <div className="flex-1 h-2.5 bg-amber-50 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-amber-500 rounded-full transition-all"
                                                            style={{ width: item.width }}
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-slate-600 min-w-[40px] text-right">
                                                        {item.percent}%
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Students Feedback Section */}
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                                    <h3 className="text-2xl font-extrabold text-slate-900">
                                        Students Feedback
                                    </h3>
                                    <button className="flex items-center gap-3 px-5 py-2.5 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
                                        <span className="text-slate-600 font-medium">5 Star Rating</span>
                                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.75 0.75L5.75 5.75L0.75 0.75" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="p-8 space-y-10">
                                    {/* Feedback Item 1 */}
                                    <div className="flex gap-5">
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
                                            alt="Student"
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div className="flex-1 space-y-3">
                                            <div className="flex items-center gap-3">
                                                <span className="font-medium text-slate-900">Guy Hawkins</span>
                                                <span className="text-slate-400">•</span>
                                                <span className="text-slate-500 text-sm">1 week ago</span>
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <IconStarFilled key={i} className="w-5 h-5 text-amber-500" />
                                                ))}
                                            </div>
                                            <p className="text-slate-600 leading-relaxed">
                                                test
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-200" />

                                    {/* Feedback Item 2 */}
                                    <div className="flex gap-5">
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
                                            alt="Student"
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div className="flex-1 space-y-3">
                                            <div className="flex items-center gap-3">
                                                <span className="font-medium text-slate-900">Dianne Russell</span>
                                                <span className="text-slate-400">•</span>
                                                <span className="text-slate-500 text-sm">51 mins ago</span>
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <IconStarFilled key={i} className="w-5 h-5 text-amber-500" />
                                                ))}
                                            </div>
                                            <p className="text-slate-600 leading-relaxed">
                                                test2
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-200" />

                                    {/* Load More Button */}
                                    <div className="flex justify-center">
                                        <button className="px-8 py-3 bg-amber-50 hover:bg-amber-100 text-amber-600 font-medium rounded-full transition-colors flex items-center gap-2">
                                            Load more
                                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.75 0.75L5.75 5.75L0.75 0.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar - Course Info & Instructor */}
                        <div className="space-y-8 lg:sticky lg:top-10 self-start">
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden">
                                <div className="p-6 text-center space-y-6">
                                    <Link
                                        to="/student/cart"
                                        className="block w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors shadow-md"
                                    >
                                        Get All Courses
                                        <br />
                                        <strong>$9 / month</strong>
                                    </Link>

                                    <div className="relative py-2">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-slate-200"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-4 bg-white text-slate-500">or</span>
                                        </div>
                                    </div>

                                    <Link
                                        to="/student/cart"
                                        className="block w-full px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors shadow-md"
                                    >
                                        Purchase This Course
                                        <br />
                                        <strong>$25 USD</strong>
                                    </Link>
                                </div>
                            </div>

                            {/* Instructor Card */}
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden">
                                <div className="p-6 border-b border-slate-200">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                                            alt="Instructor"
                                            className="w-16 h-16 rounded-full object-cover border-2 border-slate-100"
                                        />
                                        <div>
                                            <h4 className="font-bold text-slate-900">
                                                <Link to="/student/profile/adrian" className="hover:text-indigo-600">
                                                    Kim Soo-jin 선생님
                                                </Link>
                                            </h4>
                                            <p className="text-sm text-slate-600">Instructor</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <p className="text-slate-600 leading-relaxed">
                                        8+ years teaching Korean to international students. Former TOPIK examiner and certified Korean language teacher.
                                    </p>
                                    <div className="flex gap-3">
                                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                                            <IconBrandFacebook />
                                        </a>
                                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                                            <IconBrandTiktok />
                                        </a>
                                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                                            <IconBrandYoutube />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Course Details */}
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden">
                                <ul className="divide-y divide-slate-200">
                                    <li className="px-6 py-4 flex items-center gap-3">
                                        <IconProgressCheck />
                                        <span className="text-slate-900">Beginner</span>
                                    </li>
                                    <li className="px-6 py-4 flex items-center gap-3">
                                        <IconStopwatch />
                                        <span className="text-slate-900">2 hrs 26 min</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Courseview;
