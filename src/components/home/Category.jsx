import React from 'react'

function Category() {
    const categories = [
        {
            name: "Grammar Essentials",
            courses: "2,736 Courses",
            color: "bg-orange-100",
            icon: (
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 21v-9m-9 3h18" />
                </svg>
            ),
        },
        {
            name: "Listening & Pronunciation",
            courses: "2,600 Courses",
            color: "bg-red-100",
            icon: (
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
        },
        {
            name: "Hangul Basics",
            courses: "1,678 Courses",
            color: "bg-green-100",
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 12l2 2 4-4" />
                </svg>
            ),
        },
        {
            name: "Intermediate Conversation",
            courses: "959 Courses",
            color: "bg-orange-100",
            icon: (
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
            ),
        },
    ];
    return (
        <>
            <section className="py-16 md:py-24 bg-[var(--color-surface)]">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-foreground)] text-center mb-12">
                        Browse top category
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat) => (
                            <div
                                key={cat.name}
                                className={`p-6 ${cat.color} rounded-2xl flex items-center gap-6 hover:shadow-lg transition-shadow cursor-pointer`}
                            >
                                <div className="p-4 bg-white rounded-xl">
                                    {cat.icon}
                                </div>
                                <div>
                                    <p className="text-[var(--color-foreground)] font-medium text-lg">{cat.name}</p>
                                    <p className="text-[var(--color-subtle)] text-sm mt-1">{cat.courses}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-[var(--color-subtle)] text-sm inline mr-4">
                            We have more category & subcategory.
                        </p>
                        <button className="text-[var(--color-primary)] font-medium text-sm hover:underline inline-flex items-center gap-2">
                            Browse All
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category;