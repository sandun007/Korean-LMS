import React from 'react'
import Filter from "./filter.jsx";

function Courses() {

    const courses = [
        {
            title: "First Step Korean (Yonsei University)",
            category: "Beginner",
            categoryBg: "bg-green-100",
            categoryText: "text-green-700",
            price: "$49",
            oldPrice: "$99",
            instructor: "Yonsei University",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: "4.9",
            reviews: "53K",
            students: "540K",
            level: "Beginner",
            duration: "8 weeks",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
        },
        {
            title: "Talk To Me In Korean - Level 1",
            category: "Conversation",
            categoryBg: "bg-orange-100",
            categoryText: "text-orange-700",
            price: "$59",
            oldPrice: "$119",
            instructor: "Hyunwoo Sun",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            rating: "4.9",
            reviews: "45K",
            students: "450K",
            level: "Beginner",
            duration: "6 weeks",
            image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600&q=80",
        },
        {
            title: "Korean Grammar in Use - Beginning",
            category: "Grammar",
            categoryBg: "bg-blue-100",
            categoryText: "text-blue-700",
            price: "$39",
            oldPrice: "$79",
            instructor: "Darakwon",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: "4.8",
            reviews: "28K",
            students: "280K",
            level: "Beginner",
            duration: "10 weeks",
            image: "https://m.media-amazon.com/images/I/81Aec2PZd2L._AC_UF1000,1000_QL80_.jpg",
        },
        {
            title: "TOPIK II Preparation Course",
            category: "Exam Prep",
            categoryBg: "bg-purple-100",
            categoryText: "text-purple-700",
            price: "$69",
            oldPrice: "$139",
            instructor: "Talk To Me In Korean",
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            rating: "4.7",
            reviews: "15K",
            students: "150K",
            level: "Intermediate",
            duration: "12 weeks",
            image: "https://cdn.talktomeinkorean.com/wp-content/uploads/2023/11/11171125/TOPIK-MVP_course_thumbnailfin-low.webp",
        },
        {
            title: "Essential Korean Vocabulary Builder",
            category: "Vocabulary",
            categoryBg: "bg-pink-100",
            categoryText: "text-pink-700",
            price: "$45",
            oldPrice: "$89",
            instructor: "JAEM Korean",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg",
            rating: "4.8",
            reviews: "32K",
            students: "320K",
            level: "Beginner",
            duration: "4 weeks",
            image: "https://jaem.io/wp-content/uploads/2023/12/014.jpg",
        },
        {
            title: "Learn Korean Through K-Pop & Dramas",
            category: "Fun Learning",
            categoryBg: "bg-indigo-100",
            categoryText: "text-indigo-700",
            price: "$55",
            oldPrice: "$109",
            instructor: "Seoul Korean",
            avatar: "https://randomuser.me/api/portraits/women/55.jpg",
            rating: "4.9",
            reviews: "48K",
            students: "480K",
            level: "All Levels",
            duration: "Ongoing",
            image: "https://i.ytimg.com/vi/4t-gqJ3JVFo/maxresdefault.jpg",
        },
    ];

    return (
        <div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] text-center mb-12">
                        All Korean Courses
                    </h1>

                    <div className="flex gap-10">
                        <Filter />
                        {/* Courses Grid */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {courses.map((course) => (
                                    <div
                                        key={course.title}
                                        className="border border-[var(--color-border)] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                                    >
                                        <div className="aspect-video relative">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className={`px-4 py-1.5 text-xs font-medium rounded-full ${course.categoryBg} ${course.categoryText}`}>
                                                    {course.category}
                                                </span>
                                                <div className="text-right">
                                                    <span className="text-xl font-bold text-[var(--color-foreground)]">{course.price}</span>
                                                    <span className="text-sm text-[var(--color-muted)] line-through ml-2">{course.oldPrice}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-4 line-clamp-2">
                                                {course.title}
                                            </h3>

                                            <div className="flex items-center gap-3 mb-4">
                                                <img src={course.avatar} alt={course.instructor} className="w-8 h-8 rounded-full" />
                                                <span className="text-sm text-[var(--color-subtle)]">{course.instructor}</span>
                                            </div>

                                            <div className="flex items-center justify-between text-sm text-[var(--color-subtle)] mb-2">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-[var(--color-rating)] text-base">★</span>
                                                    <span>{course.rating} ({course.reviews})</span>
                                                </div>
                                                <span>{course.students} students</span>
                                            </div>

                                            <div className="flex items-center gap-4 text-sm text-[var(--color-subtle)]">
                                                <span>{course.level}</span>
                                                <span>•</span>
                                                <span>{course.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Courses;