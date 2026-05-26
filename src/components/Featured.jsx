import React from "react";
import { assets, roomsDummyData } from '../assets/assets'
import HotelCard from "./HotelCard.jsx";

import { useNavigate } from "react-router-dom";

const Featured = () => {
    const navigate = useNavigate();

    return (
        <div className="graybg pb-[56px] flex flex-col items-center ">
            <div className="flex flex-col justify-center items-center gap-2 pb-10 sm:pb-16 pt-10 sm:pt-16 px-4">
                <p className="text-[28px] sm:text-[36px] md:text-[40px] font-playfair text-center">Featured Hotels</p>
                <p className="text-gray-400 text-sm sm:text-[16px] text-center max-w-2xl">Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences</p>
            </div>

            <div className="flex graybg flex-wrap items-center justify-center gap-4 px-4" >
                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} index={index} room={room} />
                ))}
            </div>
            <button onClick={() => { navigate("/allrooms/"); scrollTo(0, 0) }}
                className="border text-sm hover:bg-gray-100 cursor-pointer transition-all  border-gray-300 rounded align-center mt-12 w-[163px] h-[36px] text-gray-500 bg-white">
                View All Destinations
            </button>
        </div >
    );
}

export default Featured