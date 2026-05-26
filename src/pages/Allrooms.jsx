import React, { useState } from "react";
import { assets, roomsDummyData } from "../assets/assets";
import Roomcard from "../components/Roomcard.jsx";
import { useNavigate } from "react-router-dom";


const Allrooms = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-start px-4 sm:px-8 md:px-16 lg:pl-32 mt-28 mb-16 gap-2">
            <div className="flex flex-col justify-start">
                <h1 className="font-playfair text-[32px] sm:text-[40px] md:text-[48px] align-left">Hotel Rooms</h1>
                <p className="text-sm sm:text-md text-gray-400 max-w-xl">Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
            </div>
            <div className="flex flex-row w-full">
                <div className="pt-10 w-full">
                    {roomsDummyData.map((room, index, key) => (<Roomcard room={room} index={index} key={room._id} />))}
                </div>

            </div>
        </div>
    );
}

export default Allrooms;