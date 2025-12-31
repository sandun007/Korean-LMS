import React, { useState } from 'react';

function Filter() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTools, setSelectedTools] = useState([]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedDurations, setSelectedDurations] = useState([]);

    const toggleSelection = (setFunc, item) => {
        setFunc((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    return (
        <div>
            <aside className="w-80 flex-shrink-0 hidden lg:block">
                <div className="sticky top-24 space-y-6">
                    {/* Category Section */}
                    <div className="border border-[var(--color-border)] bg-white rounded-lg p-5">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-lg font-medium text-[var(--color-foreground)]">Category</p>
                            <svg className="w-5 h-5 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: 'Beginner', count: 1245 },
                                { name: 'Conversation', count: 892 },
                                { name: 'Grammar', count: 756 },
                                { name: 'Vocabulary', count: 634 },
                                { name: 'Exam Prep', count: 512 },
                                { name: 'Fun Learning', count: 428 },
                            ].map((cat) => (
                                <label key={cat.name} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 px-2 py-1 rounded" onClick={() => toggleSelection(setSelectedCategories, cat.name)}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(cat.name)}
                                            className="w-4 h-4 text-[var(--color-primary)] rounded border-[var(--color-border)] focus:ring-[var(--color-primary)]"
                                        />
                                        <span className={`text-sm ${selectedCategories.includes(cat.name) ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-subtle)]'}`}>
                                            {cat.name}
                                        </span>
                                    </div>
                                    <span className={`text-sm ${selectedCategories.includes(cat.name) ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-muted)]'}`}>
                                        ({cat.count})
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Tools Section */}
                    <div className="border border-[var(--color-border)] bg-white rounded-lg p-5">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-lg font-medium text-[var(--color-foreground)]">Tools</p>
                            <svg className="w-5 h-5 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: 'Yonsei Korean Textbook', count: 1345 },
                                { name: 'Talk To Me In Korean', count: 2689 },
                                { name: 'Korean Grammar in Use', count: 1892 },
                                { name: 'TOPIK Preparation Books', count: 956 },
                                { name: 'Seogang Korean Series', count: 732 },
                                { name: 'Hangul Practice App', count: 1456 },
                                { name: 'Anki Korean Deck', count: 1123 },
                            ].map((tool) => (
                                <label key={tool.name} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 px-2 py-1 rounded" onClick={() => toggleSelection(setSelectedTools, tool.name)}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedTools.includes(tool.name)}
                                            className="w-4 h-4 text-[var(--color-primary)] rounded border-[var(--color-border)] focus:ring-[var(--color-primary)]"
                                        />
                                        <span className={`text-sm ${selectedTools.includes(tool.name) ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-subtle)]'}`}>
                                            {tool.name}
                                        </span>
                                    </div>
                                    <span className={`text-sm ${selectedTools.includes(tool.name) ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-muted)]'}`}>
                                        ({tool.count})
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Rating Section - Updated with Stars */}
                    <div className="border border-[var(--color-border)] bg-white rounded-lg p-5">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-lg font-medium text-[var(--color-foreground)]">Rating</p>
                            <svg className="w-5 h-5 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="space-y-4">
                            {[
                                { stars: 5, label: '5 Star' },
                                { stars: 4, label: '4 Star & up' },
                                { stars: 3, label: '3 Star & up' },
                                { stars: 2, label: '2 Star & up' },
                                { stars: 1, label: '1 Star & up' },
                            ].map((rating) => (
                                <label key={rating.label} className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedRatings.includes(rating.label)}
                                        onChange={() => toggleSelection(setSelectedRatings, rating.label)}
                                        className="w-4 h-4 text-[var(--color-primary)] rounded border-[var(--color-border)] focus:ring-[var(--color-primary)]"
                                    />
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: rating.stars }).map((_, index) => (
                                            <svg key={index} className="w-4 h-4 text-[var(--color-rating)]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className={`text-sm ${selectedRatings.includes(rating.label) ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-subtle)]'}`}>
                                            {rating.label}
                                        </span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Course Level Section */}
                    <div className="border border-[var(--color-border)] bg-white rounded-lg p-5">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-lg font-medium text-[var(--color-foreground)]">Course Level</p>
                            <svg className="w-5 h-5 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: 'All Levels', count: 2345 },
                                { name: 'Beginner', count: 1245 },
                                { name: 'Intermediate', count: 892 },
                                { name: 'Advanced', count: 512 },
                            ].map((level) => (
                                <label key={level.name} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 px-2 py-1 rounded" onClick={() => toggleSelection(setSelectedLevels, level.name)}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedLevels.includes(level.name)}
                                            className="w-4 h-4 text-[var(--color-primary)] rounded border-[var(--color-border)] focus:ring-[var(--color-primary)]"
                                        />
                                        <span className={`text-sm ${selectedLevels.includes(level.name) ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-subtle)]'}`}>
                                            {level.name}
                                        </span>
                                    </div>
                                    <span className={`text-sm ${selectedLevels.includes(level.name) ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-muted)]'}`}>
                                        ({level.count})
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Section */}
                    <div className="border border-[var(--color-border)] bg-white rounded-lg p-5">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-lg font-medium text-[var(--color-foreground)]">Price</p>
                            <svg className="w-5 h-5 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="space-y-4">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="price" className="w-4 h-4 text-[var(--color-primary)]" defaultChecked />
                                <span className="text-sm text-[var(--color-subtle)]">All Prices</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="price" className="w-4 h-4 text-[var(--color-primary)]" />
                                <span className="text-sm text-[var(--color-subtle)]">Free</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="price" className="w-4 h-4 text-[var(--color-primary)]" />
                                <span className="text-sm text-[var(--color-subtle)]">Paid</span>
                            </label>
                        </div>
                    </div>

                    {/* Duration Section - Fixed with checkboxes and primary color on selection */}
                    <div className="border border-[var(--color-border)] bg-white rounded-lg p-5">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-lg font-medium text-[var(--color-foreground)]">Duration</p>
                            <svg className="w-5 h-5 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: '6-12 Months', count: 345 },
                                { name: '3-6 Months', count: 678 },
                                { name: '1-3 Months', count: 1245 },
                                { name: '1-4 Weeks', count: 892 },
                                { name: '1-7 Days', count: 512 },
                            ].map((duration) => (
                                <label key={duration.name} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 px-2 py-1 rounded" onClick={() => toggleSelection(setSelectedDurations, duration.name)}>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedDurations.includes(duration.name)}
                                            className="w-4 h-4 text-[var(--color-primary)] rounded border-[var(--color-border)] focus:ring-[var(--color-primary)]"
                                        />
                                        <span className={`text-sm ${selectedDurations.includes(duration.name) ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-subtle)]'}`}>
                                            {duration.name}
                                        </span>
                                    </div>
                                    <span className={`text-sm ${selectedDurations.includes(duration.name) ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-muted)]'}`}>
                                        ({duration.count})
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Filter;
