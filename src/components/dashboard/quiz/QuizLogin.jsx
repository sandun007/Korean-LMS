import React from 'react';
import { Link } from 'react-router-dom';

function QuizLogin() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                {/* Card */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    {/* Header */}
                    <div className="bg-indigo-600 py-8 px-10 text-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-1">
                            LOGIN
                        </h1>
                    </div>

                    {/* Form */}
                    <div className="p-8 md:p-10 space-y-8">
                        <div className="space-y-6">
                            {/* Phone / Email */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Phone No / Email
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter phone or email"
                                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                />
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Date of Birth (Eg: YYYY-MM-DD)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Eg: 1990-01-11"
                                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                />
                            </div>
                        </div>

                        {/* Login Button */}
                        <Link
                            to="/dashboard/quizshow"
                            className="block w-full px-8 py-5 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-xl text-center transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Login
                        </Link>

                        {/* Optional help text */}
                        <p className="text-center text-sm text-slate-500 mt-4">
                            Enter correct details to start your UBT Test
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizLogin;