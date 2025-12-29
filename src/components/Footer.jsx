import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-[#1D2026] text-white">
                <div className="border-t border-[#363B47] py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                Start learning Korean with thousands of students worldwide.
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 font-semibold rounded transition">
                                    Join the Family
                                </button>
                                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 font-semibold rounded transition">
                                    Browse all courses
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-4xl md:text-5xl font-bold">6.3k+</p>
                                <p className="text-gray-400 mt-2">Online Courses</p>
                            </div>
                            <div>
                                <p className="text-4xl md:text-5xl font-bold">26k+</p>
                                <p className="text-gray-400 mt-2">Certified Instructors</p>
                            </div>
                            <div>
                                <p className="text-4xl md:text-5xl font-bold">99.9%</p>
                                <p className="text-gray-400 mt-2">Success Rate</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#363B47] py-12">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-10">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                              <span className="text-3xl md:text-4xl font-bold text-orange-600">
                                E-tutor
                              </span>
                            </div>
                            <p className="text-gray-400 text-sm mb-8 max-w-md">
                                Master Korean with expert instructors through interactive lessons, real conversations, and cultural insights.
                            </p>

                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded transition">Facebook</a>
                                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded transition">Instagram</a>
                                <a href="#" className="p-3 bg-orange-600 hover:bg-orange-700 rounded transition">LinkedIn</a>
                                <a href="#" className="p-3 bg-white/10 hover:bg-white/20 rounded transition">Twitter</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium mb-5">Category</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition">Hangul & Basics</a></li>
                                <li><a href="#" className="hover:text-white transition">Conversation</a></li>
                                <li><a href="#" className="hover:text-white transition">Grammar</a></li>
                                <li><a href="#" className="hover:text-white transition">TOPIK Prep</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium mb-5">Quick Links</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition">About</a></li>
                                <li><a href="#" className="hover:text-white flex items-center gap-2 transition">
                                    Browse Courses <span>→</span>
                                </a></li>
                                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium mb-5">Support</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#363B47] py-6">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>© 2025 E-tutor. All rights reserved.</p>
                        <button className="flex items-center gap-2 px-5 py-2 border border-[#363B47] hover:bg-white/10 rounded transition">
                            English <span>↓</span>
                        </button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
