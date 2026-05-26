import React from 'react'
import { testimonials, assets } from '../assets/assets'

const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
                <img
                    key={i}
                    src={i < rating ? assets.starIconFilled : assets.starIconOutlined}
                    alt=""
                    className="w-[18px] h-[18px]"
                />
            ))}
        </div>
    )
}

const Experiences = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20 px-6 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <p className="text-blue-400 text-sm tracking-widest uppercase mb-4 font-medium">What Our Guests Say</p>
                    <h1 className="font-playfair text-white text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
                        Guest Experiences
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        Hear from travelers who have experienced the luxury, comfort, and exceptional service that Hotel-Vist has to offer.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-gray-900">10K+</p>
                        <p className="text-sm text-gray-500 mt-1">Happy Guests</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-gray-900">4.9</p>
                        <p className="text-sm text-gray-500 mt-1">Average Rating</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-gray-900">50+</p>
                        <p className="text-sm text-gray-500 mt-1">Destinations</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-gray-900">98%</p>
                        <p className="text-sm text-gray-500 mt-1">Would Return</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="graybg py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="text-center mb-16">
                    <p className="text-[36px] md:text-[40px] font-playfair text-gray-900">Stories From Our Guests</p>
                    <p className="text-gray-400 text-base mt-3 max-w-lg mx-auto">
                        Every stay tells a story. Here are some of the most memorable ones shared by our valued guests.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.998 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.986z" />
                                </svg>
                            </div>

                            {/* Stars */}
                            <StarRating rating={testimonial.rating} />

                            {/* Review text */}
                            <p className="text-gray-600 text-[15px] leading-relaxed mt-5 mb-8 min-h-[80px]">
                                "{testimonial.review}"
                            </p>

                            {/* Divider */}
                            <div className="w-full h-px bg-gray-100 mb-6"></div>

                            {/* User info */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-blue-100 transition-all duration-500"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900 text-[15px]">{testimonial.name}</p>
                                    <p className="text-gray-400 text-sm">{testimonial.address}</p>
                                </div>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Experience */}
            <div className="bg-white py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl"></div>

                        <div className="flex-1 relative z-10">
                            <p className="text-blue-400 text-sm tracking-widest uppercase mb-4 font-medium">Featured Story</p>
                            <h2 className="font-playfair text-white text-3xl md:text-[38px] leading-tight mb-5">
                                "An Experience Beyond Expectations"
                            </h2>
                            <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
                                From the moment we arrived, every detail was meticulously taken care of. The oceanfront suite was breathtaking, 
                                the spa treatments were world-class, and the culinary experiences were truly unforgettable. 
                                Hotel-Vist didn't just meet our expectations — they redefined them entirely.
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonials[0].image}
                                    alt={testimonials[0].name}
                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-white/20"
                                />
                                <div>
                                    <p className="font-semibold text-white text-[15px]">{testimonials[0].name}</p>
                                    <p className="text-gray-500 text-sm">{testimonials[0].address}</p>
                                    <StarRating rating={testimonials[0].rating} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center relative z-10">
                            <div className="grid grid-cols-2 gap-4 max-w-[340px]">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all duration-300">
                                    <p className="text-3xl font-bold text-white mb-1">5★</p>
                                    <p className="text-gray-400 text-xs">Service Rating</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all duration-300">
                                    <p className="text-3xl font-bold text-white mb-1">5★</p>
                                    <p className="text-gray-400 text-xs">Cleanliness</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all duration-300">
                                    <p className="text-3xl font-bold text-white mb-1">5★</p>
                                    <p className="text-gray-400 text-xs">Location</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all duration-300">
                                    <p className="text-3xl font-bold text-white mb-1">5★</p>
                                    <p className="text-gray-400 text-xs">Value</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="graybg py-16 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-playfair text-3xl md:text-[36px] text-gray-900 mb-4">Share Your Experience</h2>
                    <p className="text-gray-400 text-base mb-8 max-w-lg mx-auto">
                        Had an amazing stay with Hotel-Vist? We'd love to hear your story. Your feedback helps us continue delivering exceptional experiences.
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 active:scale-95 transition-all duration-300">
                        Write a Review
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Experiences
