import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    const values = [
        {
            icon: (
                <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
            ),
            title: "Exceptional Quality",
            description: "We partner only with the finest properties that meet our rigorous standards for luxury, comfort, and guest satisfaction."
        },
        {
            icon: (
                <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            ),
            title: "Passion for Hospitality",
            description: "Every stay is crafted with care. We believe travel should be transformative, not transactional — a journey you feel, not just take."
        },
        {
            icon: (
                <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
            ),
            title: "Global Reach",
            description: "From the serene beaches of Bali to the vibrant streets of New York, our curated collection spans over 50 destinations worldwide."
        },
        {
            icon: (
                <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
            ),
            title: "Trust & Security",
            description: "Your safety and peace of mind come first. Every booking is protected with secure payments and verified property listings."
        }
    ]

    const milestones = [
        { year: "2019", event: "Hotel-Vist was founded with a vision to redefine luxury travel" },
        { year: "2020", event: "Expanded to 15 countries with over 200 partner properties" },
        { year: "2022", event: "Reached 50,000 happy guests and launched our rewards program" },
        { year: "2024", event: "Named 'Best Luxury Booking Platform' by Travel Excellence Awards" },
        { year: "2025", event: "Serving 50+ destinations with world-class hospitality" }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20 px-6 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-16 right-20 w-80 h-80 bg-amber-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <p className="text-amber-400 text-sm tracking-widest uppercase mb-4 font-medium">Our Story</p>
                    <h1 className="font-playfair text-white text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
                        About Hotel-Vist
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        We're on a mission to make luxury travel accessible, seamless, and unforgettable for every traveler around the world.
                    </p>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="bg-white py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="flex-1">
                        <p className="text-blue-500 text-sm tracking-widest uppercase mb-3 font-medium">Who We Are</p>
                        <h2 className="font-playfair text-3xl md:text-[38px] text-gray-900 leading-tight mb-6">
                            Redefining the Art of Travel
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-5">
                            Hotel-Vist was born from a simple belief: that every traveler deserves an exceptional experience. 
                            What started as a small team of passionate travelers and hospitality enthusiasts has grown into a 
                            trusted platform connecting thousands of guests with the world's most remarkable properties.
                        </p>
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-5">
                            We handpick every hotel in our collection, ensuring it meets our exacting standards for quality, 
                            comfort, and service. From boutique retreats nestled in the mountains to iconic city-center hotels, 
                            we curate stays that go beyond accommodation — we create memories.
                        </p>
                        <p className="text-gray-500 text-[15px] leading-relaxed">
                            Our platform combines cutting-edge technology with a personal touch, making it effortless to discover, 
                            compare, and book the perfect stay. Whether you're planning a romantic getaway, a family vacation, or 
                            a business trip, Hotel-Vist is your trusted companion.
                        </p>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative">
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                                        <p className="text-4xl font-bold text-gray-900 mb-1">50+</p>
                                        <p className="text-gray-400 text-sm">Destinations</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                                        <p className="text-4xl font-bold text-gray-900 mb-1">500+</p>
                                        <p className="text-gray-400 text-sm">Properties</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                                        <p className="text-4xl font-bold text-gray-900 mb-1">10K+</p>
                                        <p className="text-gray-400 text-sm">Happy Guests</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                                        <p className="text-4xl font-bold text-gray-900 mb-1">4.9</p>
                                        <p className="text-gray-400 text-sm">Avg Rating</p>
                                    </div>
                                </div>
                            </div>
                            {/* Accent element */}
                            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl opacity-10 -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="graybg py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="text-center mb-16">
                    <p className="text-[36px] md:text-[40px] font-playfair text-gray-900">Our Core Values</p>
                    <p className="text-gray-400 text-base mt-3 max-w-lg mx-auto">
                        The principles that guide everything we do, from selecting properties to serving our guests.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-300">
                                {value.icon}
                            </div>
                            <h3 className="font-semibold text-gray-900 text-[17px] mb-3">{value.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Journey / Timeline */}
            <div className="bg-white py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="text-center mb-16">
                    <p className="text-[36px] md:text-[40px] font-playfair text-gray-900">Our Journey</p>
                    <p className="text-gray-400 text-base mt-3 max-w-lg mx-auto">
                        From a small idea to a global platform — here's how we've grown over the years.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-px"></div>

                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className={`relative flex items-start gap-6 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Content */}
                            <div className={`flex-1 ml-14 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                <span className="text-blue-500 font-bold text-lg">{milestone.year}</span>
                                <p className="text-gray-600 text-[15px] mt-1 leading-relaxed">{milestone.event}</p>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-white border-[3px] border-blue-500 rounded-full z-10 mt-1"></div>

                            {/* Empty space for alternate side */}
                            <div className="flex-1 hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team / Mission CTA */}
            <div className="graybg py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 md:p-14 text-center overflow-hidden relative">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <p className="text-amber-400 text-sm tracking-widest uppercase mb-4 font-medium">Join Us</p>
                            <h2 className="font-playfair text-white text-3xl md:text-[38px] leading-tight mb-5">
                                Ready to Start Your Journey?
                            </h2>
                            <p className="text-gray-400 text-[15px] leading-relaxed max-w-xl mx-auto mb-8">
                                Discover handpicked luxury hotels and experiences tailored just for you. 
                                Your next unforgettable adventure is just a click away.
                            </p>
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <a href="/allrooms" className="bg-white text-gray-900 px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 active:scale-95 transition-all duration-300">
                                    Explore Hotels
                                </a>
                                <a href="/" className="border border-white/20 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-white/10 active:scale-95 transition-all duration-300">
                                    Go Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Made with Love */}
            <div className="bg-white py-8 px-6 border-t border-gray-100">
                <p className="text-center text-gray-400 text-sm">
                    Made with <span className="text-red-500 inline-block animate-pulse">❤</span> by <span className="text-gray-700 font-medium">Abhishek Patwa</span>
                </p>
            </div>
        </div>
    )
}

export default About
