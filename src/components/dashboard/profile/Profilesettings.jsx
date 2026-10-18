import React from 'react';

function Profilesettings() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <nav className="px-6 md:px-10 py-4 border-b border-slate-200">
                <ol className="flex items-center gap-2 text-sm text-slate-600">
                    <li><a href="/dashboard/main" className="hover:text-indigo-600">Dashboard</a></li>
                    <li className="flex items-center gap-2"><span>/</span><span className="font-medium text-slate-900">Profile</span></li>
                    <li className="flex items-center gap-2"><span>/</span><span className="font-medium text-indigo-600">Account Settings</span></li>
                </ol>
            </nav>

            <div className="px-6 md:px-10 py-10 max-w-6xl mx-auto w-full space-y-12">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Account Settings
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section className="space-y-8">
                            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                Personal Information
                            </h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">
                                        Full Name
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="First name"
                                            className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your username"
                                        className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">
                                        Phone Number
                                    </label>
                                    <div className="flex">
                                        <div className="px-5 py-4 bg-slate-50 border border-r-0 border-slate-300 rounded-l-xl text-slate-600 font-medium">
                                            +880
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="Your phone number..."
                                            className="flex-1 px-5 py-4 border border-slate-300 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                Professional Details
                            </h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">
                                        Title / Profession
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Your title, profession or short bio"
                                            className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                        />
                                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                                            0/50
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700">
                                        Biography
                                    </label>
                                    <textarea
                                        placeholder="Tell about yourself, your teaching experience, passion for Korean language..."
                                        rows={5}
                                        className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                Social Profiles
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: 'Personal Website', placeholder: 'https://yourwebsite.com' },
                                    { label: 'Facebook', placeholder: 'Username' },
                                    { label: 'Instagram', placeholder: 'Username' },
                                    { label: 'LinkedIn', placeholder: 'Username or Profile URL' },
                                    { label: 'Twitter / X', placeholder: 'Username' },
                                    { label: 'WhatsApp', placeholder: 'Phone number' },
                                    { label: 'YouTube', placeholder: 'Channel name or URL' },
                                ].map((field, index) => (
                                    <div key={index} className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">
                                            {field.label}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={field.placeholder}
                                            className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8 lg:sticky lg:top-10 self-start">
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                            Profile Photo
                        </h2>

                        <div className="flex flex-col items-center gap-6">
                            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-slate-100 shadow-xl hover:shadow-2xl transition-shadow">
                                <img
                                    src="#"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-md">
                                        Upload Photo
                                    </button>
                                </div>
                            </div>

                            <p className="text-sm text-slate-500 text-center max-w-xs">
                                Image size should be under 1MB<br />
                                Recommended: 1:1 ratio (square)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-12 border-t border-slate-200">
                    <button className="px-12 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-md">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profilesettings;