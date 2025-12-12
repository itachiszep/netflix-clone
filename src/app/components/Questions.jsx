"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function Questions() {
    const [openId, setOpenId] = useState(null);

    const fags = [
        {
            id: 1,
            question: "Czym jest Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        },
        {
            id: 2,
            question: "Ile kosztuje korzystanie z serwisu Netflix?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 33zl to 65zl /month"
        },
        {
            id: 3,
            question: "Gdzie mogę oglądać",
            answer: 'Watch anywhere, anytime, Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles, You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you re on the go and without an internet connection. Take Netflix with you anywhere'
        },
        {
            id: 4,
            question: 'Jak zrezygnować z członkostwa?',
            answer: 'What can I watch on Netflix Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
        },
        {
            id: 5,
            question: 'Czy Netflix jest odpowiedni dla dzieci?',
            answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don want kids to see'
        },
    ];

    return (
        <div className="w-full bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
            <div className="max-w-5xl mx-auto w-full">
                {/* Title */}
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 sm:mb-10 lg:mb-12 xl:mb-16 text-left leading-tight">
                    Często zadawane pytania
                </h1>

                {/* FAQ List */}
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {fags.map((faq) => (
                        <div 
                            key={faq.id} 
                            className="bg-gray-800/40 hover:bg-gray-800/60 rounded-lg overflow-hidden transition-all duration-300 border border-gray-700/30 hover:border-gray-600/50 group"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 hover:bg-gray-700/30 transition-all duration-300 group/button"
                            >
                                <span className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-left leading-tight group-hover/button:text-gray-100 transition-colors duration-300">
                                    {faq.question}
                                </span>
                                
                                {/* Icon Container */}
                                <div className="flex-shrink-0 ml-3 sm:ml-4 flex items-center justify-center">
                                    <div className="p-1.5 sm:p-2 rounded-md bg-gray-700/40 group-hover/button:bg-gray-600/60 transition-all duration-300 group-hover:scale-110">
                                        {openId === faq.id ? (
                                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover/button:rotate-90" />
                                        ) : (
                                            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover/button:rotate-90" />
                                        )}
                                    </div>
                                </div>
                            </button>

                            {/* Answer Container */}
                            {openId === faq.id && (
                                <div className="border-t border-gray-700/40 bg-gradient-to-b from-gray-700/20 to-gray-800/10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                                        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-relaxed lg:leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

               
            </div>
        </div>
    );
}