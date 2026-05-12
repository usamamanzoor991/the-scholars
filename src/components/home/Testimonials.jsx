import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaUser } from "react-icons/fa";

const testimonials = [
    {
        quote:
            "Ever since our daughter joined The Scholars, we’ve noticed a huge improvement in her confidence and communication skills. She now speaks both English and Urdu fluently and loves participating in class activities.",
        name: "Ayesha Malik",
        role: "Mother of Hania (Primary Program)",
        avatar: "/avatars/ayesha.jpg",
    },
    {
        quote:
            "The teachers genuinely care about every child’s growth. Our son has become far more disciplined, creative, and excited about learning than ever before.",
        name: "Ahmed Raza",
        role: "Father of Abdullah (Casa Program)",
        avatar: "/avatars/ahmed.jpg",
    },
    {
        quote:
            "We wanted a school that focused not only on academics but also on values and personality development. The Scholars exceeded our expectations in every way.",
        name: "Sana Sheikh",
        role: "Mother of Zayan (Elementary Program)",
        avatar: "/avatars/sana.jpg",
    },
    {
        quote:
            "The learning environment is outstanding. Our twins have become more independent and socially active since joining the school. The staff is extremely supportive.",
        name: "Bilal & Mahnoor Khan",
        role: "Parents of Areeba & Hamza (Primary Program)",
        avatar: "/avatars/mahnoor.jpg",
    },
    {
        quote:
            "As parents, we appreciate the balance between modern education and strong moral values. Our son looks forward to school every single day.",
        name: "Usman Tariq",
        role: "Father of Rayyan (Casa Program)",
        avatar: "/avatars/usman.jpg",
    },
];

const TestimonialCard = ({ quote, name, role, avatar }) => (
    <div className="shrink-0 sm:w-[420px] w-[320px] bg-white rounded-[24px] border border-black/5 shadow-sm px-8 py-8 flex flex-col gap-6">
        <span className="text-5xl leading-none font-bold text-[#8A5A00] select-none">&ldquo;</span>
        <p className="body-md text-black/65 leading-relaxed flex-1">{quote}</p>
        <div className="flex items-center gap-3 pt-2 border-t border-black/5">
            <FaUser
                className="size-9 rounded-full object-cover shrink-0"
            />
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-black">{name}</span>
                <span className="text-xs text-black/45">{role}</span>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const items = [...testimonials, ...testimonials];

    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    const { quote, name, role, avatar } = testimonials[current];

    return (
        <div id="testimonials" className="bg-background w-full min-h-screen flex items-center justify-center pt-22 pb-4 sm:px-0 px-6">
            <section className="sm:max-w-full container flex flex-col items-center gap-12 overflow-hidden">
                {/* Heading */}
                <h2 className="headline-lg text-black text-center">Parent's Perspective</h2>

                {/* Marquee Track */}
                <div className="relative w-full">
                    {/* Fade edges */}
                    <div className="sm:block hidden pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
                    <div className="sm:block hidden pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />

                    <div className="hidden sm:flex gap-5 w-max animate-marquee">
                        {items.map((t, i) => (
                            <TestimonialCard key={i} {...t} />
                        ))}
                    </div>

                    <div className="sm:hidden w-full flex flex-col items-center justify-center gap-6">

                        {/* Card */}
                        <div className="flex-1 max-w-2xl bg-white rounded-[28px] shadow-xl border border-black/5 p-10 flex flex-col gap-8">

                            {/* Quote Icon */}
                            <FaQuoteRight className="size-8 text-primary" />

                            {/* Quote Text */}
                            <p className="body-md text-black/70 leading-relaxed text-center text-base">
                                "{quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-center gap-4">
                                <img
                                    src={avatar}
                                    alt={name}
                                    className="size-10 rounded-full object-cover bg-[#F7F1E7] shrink-0"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                        e.currentTarget.nextElementSibling.style.display = "flex";
                                    }}
                                />
                                {/* Fallback avatar */}
                                <div
                                    className="size-10 rounded-full bg-primary/10 items-center justify-center hidden shrink-0"
                                    aria-hidden="true"
                                >
                                    <span className="text-sm font-semibold text-primary">
                                        {name.charAt(0)}
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="body-lg text-black font-semibold text-sm">
                                        {name}
                                    </span>
                                    <span className="body-md text-black/50 text-xs">
                                        {role}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            {/* Prev Button */}
                            <button
                                onClick={prev}
                                aria-label="Previous testimonial"
                                className="shrink-0 size-10 flex items-center justify-center rounded-full border border-black/10 bg-white shadow-sm hover:bg-primary/10 transition-colors"
                            >
                                <FaChevronLeft className="size-4 text-black/50" />
                            </button>
                            <h1 className="label-bold">{current + 1}/{testimonials.length}</h1>
                            {/* Next Button */}
                            <button
                                onClick={next}
                                aria-label="Next testimonial"
                                className="shrink-0 size-10 flex items-center justify-center rounded-full border border-black/10 bg-white shadow-sm hover:bg-primary/10 transition-colors"
                            >
                                <FaChevronRight className="size-4 text-black/50" />
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Testimonials;