import React, { useState, useEffect } from "react";
import { Whislist, Booked, userBookingsDummyData, assets } from "../assets/assets";

const Mybookings = () => {
    const [booked, setBooked] = useState(false);
    const [whislist, setWhislist] = useState(false);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (Whislist.length > 0) {
            setWhislist(true);
        }
        if (Booked.length > 0) {
            setBooked(true);
        }
        setBookings(userBookingsDummyData);
    }, [Whislist, Booked]);

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "confirmed": return "bg-green-100 text-green-700";
            case "pending": return "bg-amber-100 text-amber-700";
            case "cancelled": return "bg-red-100 text-red-700";
            default: return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div className="min-h-screen pt-28 pb-16 px-6 md:px-16 lg:px-24 xl:px-32 graybg">
            {/* Header */}
            <div className="max-w-5xl mx-auto mb-10">
                <h1 className="font-playfair text-3xl md:text-[40px] text-gray-900 mb-3">My Bookings</h1>
                <p className="text-gray-400 text-[15px] max-w-xl">
                    Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks.
                </p>
            </div>

            {bookings.length > 0 ? (
                <div className="max-w-5xl mx-auto">
                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-[2fr_1.2fr_0.8fr_0.8fr_1fr] gap-4 px-6 py-3 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        <p>Hotel</p>
                        <p>Date & Timings</p>
                        <p>Guests</p>
                        <p>Payment</p>
                        <p className="text-right">Status</p>
                    </div>

                    {/* Booking Cards */}
                    <div className="flex flex-col gap-4">
                        {bookings.map((booking) => (
                            <div
                                key={booking._id}
                                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-400 overflow-hidden group"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-[2fr_1.2fr_0.8fr_0.8fr_1fr] gap-4 md:gap-4 p-5 md:px-6 md:py-5 items-center">
                                    {/* Hotel Info */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={booking.room.images[0]}
                                            alt={booking.room.name}
                                            className="w-24 h-18 md:w-28 md:h-20 rounded-lg object-cover flex-shrink-0"
                                        />
                                        <div className="min-w-0">
                                            <p className="font-semibold text-gray-900 text-[15px] truncate">{booking.room.name}</p>
                                            <p className="text-gray-400 text-sm flex items-center gap-1 mt-0.5">
                                                <img src={assets.locationIcon} alt="" className="w-3.5 h-3.5" />
                                                {booking.room.Location}
                                            </p>
                                            <p className="text-gray-500 text-xs mt-1">{booking.room.roomType}</p>
                                        </div>
                                    </div>

                                    {/* Dates */}
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-400 md:hidden font-medium mb-1">Date & Timings</p>
                                        <div className="flex flex-col gap-0.5">
                                            <p className="text-sm text-gray-700">
                                                <span className="text-gray-400 text-xs">In: </span>
                                                {formatDate(booking.checkInDate)}
                                            </p>
                                            <p className="text-sm text-gray-700">
                                                <span className="text-gray-400 text-xs">Out: </span>
                                                {formatDate(booking.checkOutDate)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Guests */}
                                    <div>
                                        <p className="text-sm text-gray-400 md:hidden font-medium mb-1">Guests</p>
                                        <p className="text-sm text-gray-700">{booking.guests} {booking.guests > 1 ? "Guests" : "Guest"}</p>
                                    </div>

                                    {/* Payment */}
                                    <div>
                                        <p className="text-sm text-gray-400 md:hidden font-medium mb-1">Payment</p>
                                        <p className="text-sm text-gray-700">{booking.paymentMethod}</p>
                                        <p className={`text-xs mt-0.5 ${booking.isPaid ? "text-green-600" : "text-amber-600"}`}>
                                            {booking.isPaid ? "Paid" : "Unpaid"}
                                        </p>
                                    </div>

                                    {/* Status & Price */}
                                    <div className="flex flex-col items-start md:items-end gap-2">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(booking.status)}`}>
                                            {booking.status}
                                        </span>
                                        <p className="text-lg font-semibold text-gray-900">${booking.totalPrice}</p>
                                    </div>
                                </div>

                                {/* Bottom accent line on hover */}
                                <div className="h-[3px] bg-gradient-to-r from-blue-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="mt-8 bg-white rounded-xl border border-gray-100 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <p className="text-gray-500 text-sm">Total Bookings</p>
                            <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
                        </div>
                        <div className="h-px md:h-10 w-full md:w-px bg-gray-100"></div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Spent</p>
                            <p className="text-2xl font-bold text-gray-900">
                                ${bookings.reduce((sum, b) => sum + b.totalPrice, 0)}
                            </p>
                        </div>
                        <div className="h-px md:h-10 w-full md:w-px bg-gray-100"></div>
                        <div>
                            <p className="text-gray-500 text-sm">Pending Payments</p>
                            <p className="text-2xl font-bold text-amber-600">
                                ${bookings.filter(b => !b.isPaid).reduce((sum, b) => sum + b.totalPrice, 0)}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                /* Empty State */
                <div className="max-w-md mx-auto text-center py-20">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                    </div>
                    <h2 className="font-playfair text-2xl text-gray-900 mb-3">No Bookings Yet</h2>
                    <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
                        You haven't made any bookings yet. Explore our curated collection of luxury hotels and find your perfect getaway.
                    </p>
                    <a href="/allrooms" className="inline-block bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 active:scale-95 transition-all duration-300">
                        Explore Hotels
                    </a>
                </div>
            )}
        </div>
    );
};

export default Mybookings;