import React, { useState, useEffect } from 'react';

const sampleQuestions = [
    // Questions 1-20: Text-based
    {
        id: 1,
        type: 'text',
        question: "다음 중 '안녕하세요'의 뜻으로 가장 알맞은 것은?",
        options: ["A. Goodbye", "B. Hello", "C. Thank you", "D. Sorry"],
        correct: "B",
    },
    {
        id: 2,
        type: 'text',
        question: "가: 이름이 뭐예요?  나: ___________",
        options: [
            "A. 저는 학생이에요",
            "B. 저는 김민수예요",
            "C. 저는 한국 사람이에요",
            "D. 저는 배고파요",
        ],
        correct: "B",
    },
    ...Array.from({ length: 18 }, (_, i) => ({
        id: i + 3,
        type: 'text',
        question: `한국어 문법 문제 ${i + 3}번 (예시)`,
        options: ["A. 보기 1", "B. 보기 2", "C. 보기 3", "D. 보기 4"],
        correct: "A",
    })),

    // Questions 21-40: Listening/Audio
    {
        id: 21,
        type: 'audio',
        question: "듣기: 남자가 방금 말한 내용과 가장 일치하는 것은?",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        options: ["A. 내일 만나요", "B. 오늘 피곤해요", "C. 좋아요!", "D. 안녕!"],
        correct: "B",
    },
    {
        id: 22,
        type: 'audio',
        question: "듣기: 여자가 묻는 질문에 대한 적절한 대답은?",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        options: ["A. 네, 한국어 공부해요", "B. 아니요, 배고파요", "C. 커피 마실래요?", "D. 잘 지내세요"],
        correct: "A",
    },
    ...Array.from({ length: 18 }, (_, i) => ({
        id: i + 23,
        type: 'audio',
        question: `듣기 문제 ${i + 23}번 (예시)`,
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        options: ["A. 보기 1", "B. 보기 2", "C. 보기 3", "D. 보기 4"],
        correct: "B",
    })),
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(50 * 60); // Timer
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (timeLeft <= 0 || isSubmitted) return;
        const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft, isSubmitted]);

    const handleSelect = (option) => {
        setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    };

    const handleNext = () => {
        if (currentQuestion < sampleQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        alert("Quiz Submitted!");
        console.log("Your answers:", answers);
    };

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    const currentQ = sampleQuestions[currentQuestion];
    const selected = answers[currentQuestion];

    return (
        <>
            <div className="h-screen flex flex-col overflow-hidden bg-white">
                {/* Header */}
                <div className="border-b border-slate-200 bg-white shrink-0">
                    <div className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div>
                            <h1 className="text-2xl font-extrabold text-slate-900">
                                TOPIK I Practice Quiz
                            </h1>
                            <p className="text-slate-600 text-sm">50 minutes • 40 questions</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-lg font-bold text-red-600 bg-red-50 px-5 py-2 rounded-full">
                                {formatTime(timeLeft)}
                            </div>
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitted}
                                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-md disabled:opacity-50"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 overflow-hidden">
                    <div className="hidden md:flex md:w-80 flex-col border-r border-slate-200 bg-slate-50 shrink-0">
                        <div className="p-4 flex flex-col h-full">
                            {/* Text Questions Group */}
                            <h3 className="text-base font-bold text-slate-900 mb-2">Text Questions</h3>
                            <div className="grid grid-cols-5 gap-1.5 mb-5">
                                {sampleQuestions.slice(0, 20).map((q, i) => (
                                    <button
                                        key={q.id}
                                        onClick={() => setCurrentQuestion(i)}
                                        className={`aspect-square flex items-center justify-center rounded-md text-xs font-medium transition-colors p-1 ${
                                            i === currentQuestion
                                                ? "bg-indigo-600 text-white"
                                                : answers[i]
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-white border border-slate-300 hover:bg-slate-100"
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <hr className="border-slate-300 my-4" />

                            {/* Listening Group - same spacing & style */}
                            <h3 className="text-base font-bold text-slate-900 mb-2">Listening</h3>
                            <div className="grid grid-cols-5 gap-1.5">
                                {sampleQuestions.slice(20, 40).map((q, i) => {
                                    const index = i + 20;
                                    return (
                                        <button
                                            key={q.id}
                                            onClick={() => setCurrentQuestion(index)}
                                            className={`aspect-square flex items-center justify-center rounded-md text-xs font-medium transition-colors p-1 ${
                                                index === currentQuestion
                                                    ? "bg-indigo-600 text-white"
                                                    : answers[index]
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-white border border-slate-300 hover:bg-slate-100"
                                            }`}
                                        >
                                            {index + 1}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 flex flex-col overflow-hidden p-6">
                        <div className="flex-1 overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <div className="h-full flex flex-col p-6 md:p-8">
                                {/* Question */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-3xl font-bold text-indigo-600">
                                            Q{currentQuestion + 1}.
                                        </span>
                                        <h2 className="text-2xl font-extrabold text-slate-900">
                                            {currentQ.question}
                                        </h2>
                                    </div>

                                    {currentQ.type === 'audio' && (
                                        <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                                            <audio controls className="w-full max-w-md mx-auto block">
                                                <source src={currentQ.audioUrl} type="audio/mpeg" />
                                                Your browser does not support audio.
                                            </audio>
                                            <p className="text-sm text-slate-500 mt-2 text-center">
                                                Listen carefully
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Options */}
                                <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                                    {currentQ.options.map((option, idx) => {
                                        const letter = String.fromCharCode(65 + idx);
                                        const isSelected = selected === letter;

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => handleSelect(letter)}
                                                className={`w-full flex items-center gap-5 p-5 border rounded-xl text-left transition-all ${
                                                    isSelected
                                                        ? "border-indigo-600 bg-indigo-50 shadow-sm"
                                                        : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50"
                                                }`}
                                            >
                                                <div
                                                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 ${
                                                        isSelected
                                                            ? "bg-indigo-600 text-white"
                                                            : "bg-slate-100 text-slate-700"
                                                    }`}
                                                >
                                                    {letter}
                                                </div>
                                                <span className="text-lg text-slate-800">{option}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="mt-6 flex justify-between shrink-0">
                            <button
                                onClick={handleNext}
                                disabled={currentQuestion === sampleQuestions.length - 1}
                                className="px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-md disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quiz;