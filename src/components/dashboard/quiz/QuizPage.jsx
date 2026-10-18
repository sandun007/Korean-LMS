import { Link } from 'react-router-dom';
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout.jsx";

function QuizPage() {
    return (
        <DashboardLayout>
            <div className="min-h-screen bg-white flex flex-col">
                {/* Breadcrumb */}
                <nav className="px-6 md:px-10 py-3 border-b border-slate-200 bg-white">
                    <ol className="flex items-center gap-2 text-sm text-slate-600">
                        <li>
                            <Link to="/dashboard" className="hover:text-indigo-600">
                                Dashboard
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>/</span>
                            <span className="font-medium text-indigo-600">UBT Test</span>
                        </li>
                    </ol>
                </nav>

                {/* Main Content */}
                <div className="px-6 md:px-10 py-8 max-w-5xl mx-auto w-full">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                        {/* Header */}
                        <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-indigo-50 to-blue-50">
                            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                                UBT Test
                            </h1>
                            <p className="text-sm md:text-base text-slate-600">
                                Answer all questions
                            </p>
                        </div>

                        {/* Test Info */}
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                        <span className="text-slate-600 font-medium">Time</span>
                                        <span className="text-slate-900 font-semibold">50 minutes</span>
                                    </div>

                                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                        <span className="text-slate-600 font-medium">More attempts allowed</span>
                                        <span className="text-slate-900 font-semibold">99</span>
                                    </div>

                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-slate-600 font-medium">Total attempts</span>
                                        <span className="text-slate-900 font-semibold">100</span>
                                    </div>
                                </div>

                                {/* Start Button */}
                                <div className="flex items-center justify-center md:justify-end">
                                    <Link
                                        to="/dashboard/quizlogin"
                                        className="inline-flex items-center px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                    >
                                        Start
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Previous Attempts */}
                        <div className="p-6 border-t border-slate-200 bg-slate-50">
                            <h2 className="text-lg font-extrabold text-slate-900 mb-4">
                                Last Attempts
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-200 text-sm">
                                    <thead>
                                    <tr>
                                        <th className="py-2 px-3 text-left font-semibold text-slate-700">Attempt</th>
                                        <th className="py-2 px-3 text-left font-semibold text-slate-700">Marks</th>
                                        <th className="py-2 px-3 text-left font-semibold text-slate-700">Date & Time</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-100 transition-colors">
                                        <td className="py-3 px-3">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Finished
                                            </span>
                                        </td>
                                        <td className="py-3 px-3 font-medium text-slate-900">97.5%</td>
                                        <td className="py-3 px-3 text-slate-600">
                                            2025-11-06 05:10 PM
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Color Blind Section */}
                        <div className="p-6 border-t border-slate-200">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Color Blind Test Results
                                </h3>

                                <Link
                                    to="/color-blind-exam"
                                    className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
                                >
                                    Color Blind Exam
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default QuizPage;