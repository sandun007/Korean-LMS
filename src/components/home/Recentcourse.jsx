import React from 'react'

function Recentcourse() {
    const courses = [
        {
            category: "Beginner",
            categoryBg: "bg-green-100",
            categoryText: "text-green-700",
            title: "First Step Korean (Yonsei University)",
            price: "$49",
            oldPrice: "$89",
            instructor: "Yonsei University",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: "4.9",
            reviews: "53,000",
            students: "540K",
            level: "Beginner",
            duration: "10 hour",
            image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7b/3030708c3111e5ae965dd3ea8cdc5d/________03.jpg?auto=format%2Ccompress&dpr=1&w=300&h=300&fit=crop",
        },
        {
            category: "Conversation",
            categoryBg: "bg-orange-100",
            categoryText: "text-orange-700",
            title: "Learn to Speak Korean 1",
            price: "$59",
            oldPrice: "$99",
            instructor: "Yonsei University",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            rating: "4.9",
            reviews: "540,000",
            students: "1.2M",
            level: "Beginner",
            duration: "12 hour",
            image: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/ece19a97ad23.jpg",
        },
        {
            category: "Grammar",
            categoryBg: "bg-blue-100",
            categoryText: "text-blue-700",
            title: "Korean Grammar in Use - Beginning",
            price: "$38",
            oldPrice: "$55",
            instructor: "Darackbang",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: "4.9",
            reviews: "28,000",
            students: "150K",
            level: "Beginner",
            duration: "8 hour",
            image: "https://m.media-amazon.com/images/I/81Aec2PZd2L._AC_UF1000,1000_QL80_.jpg",
        },
        {
            category: "Exam Prep",
            categoryBg: "bg-purple-100",
            categoryText: "text-purple-700",
            title: "TOPIK II Preparation Course",
            price: "$69",
            oldPrice: "$99",
            instructor: "Talk To Me In Korean",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg",
            rating: "4.7",
            reviews: "3,600",
            students: "45K",
            level: "Intermediate",
            duration: "20 hour",
            image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2161806929/settings_images/c266fe6-a447-1000-2f33-71ef41f131a_f652c230-d24b-4f4c-9093-8d46e715a4ff.png",
        },
    ];

    return (
        <>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <h2 className="text-4xl font-bold text-[var(--color-foreground)] text-center mb-12">
                        Our feature courses
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {courses.map((course) => (
                            <div
                                key={course.title}
                                className="flex border border-[var(--color-border)] bg-[var(--color-card)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-40 md:w-48 flex-shrink-0">
                                    <div className="w-full h-48 md:h-56">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover rounded-l-2xl"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 p-4 md:p-5 flex flex-col justify-between">
                                    <div className="flex justify-between items-start mb-2">
                                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${course.categoryBg} ${course.categoryText}`}>
                                            {course.category}
                                          </span>
                                        <div className="text-right">
                                            <span className="text-lg font-bold text-[var(--color-foreground)]">{course.price}</span>
                                            <span className="text-sm text-[var(--color-muted)] line-through ml-1">{course.oldPrice}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-base font-medium text-[var(--color-foreground)] mb-2 line-clamp-2">
                                        {course.title}
                                    </h3>

                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <img src={course.avatar} alt={course.instructor} className="w-6 h-6 rounded-full" />
                                            <span className="text-sm text-[var(--color-subtle)]">{course.instructor}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-[var(--color-rating)] text-base">★</span>
                                            <span className="text-sm text-[var(--color-subtle)]">
                                              {course.rating} ({course.reviews})
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center text-xs text-[var(--color-subtle)]">
                                      <span className="flex items-center gap-1">
                                        <span className="text-[var(--color-info)]">👥</span> {course.students} students
                                      </span>
                                        <span className="flex items-center gap-1">
                                        <span className="text-[var(--color-danger)]">||</span> {course.level}
                                      </span>
                                        <span className="flex items-center gap-1">
                                        <span className="text-[var(--color-success)]">⏱</span> {course.duration}
                                      </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Recentcourse;