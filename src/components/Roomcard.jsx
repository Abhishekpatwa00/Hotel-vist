import React from "react";
import { Link } from "react-router-dom";
import { assets, facilityIcons } from "../assets/assets";


const Roomcard = ({ room, index }) => {
    return (
        <Link to={`/room/` + room._id} onClick={() => scrollTo(0, 0)} key={room._id} className="pb-8 flex ">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 border-b-2 pb-8 border-gray-100">
                <img src={room.images[0]} className="rounded-md w-full sm:w-[280px] md:w-[320px] object-cover aspect-[16/10] sm:aspect-auto" />

                <div className="flex flex-col gap-3">
                    <p className="flex text-gray-500 text-sm justify-start align-center gap-2"><img src={assets.locationIcon} className="w-4 self-center" /> {room.Location}</p>
                    <p className="font-playfair text-2xl sm:text-3xl">{room.name}</p>
                    <div className="flex gap-2 sm:gap-4 flex-wrap">
                        {room.amenities.map((amenity, index) => (
                            <button key={index} className="bg-gray-200 rounded-md flex align-center gap-1 p-2 h-6">
                                <img src={facilityIcons[amenity]} className="w-4 self-center" />
                                <p className="text-xs self-center justify-start whitespace-nowrap">{amenity}</p>
                            </button>
                        )
                        )}
                    </div>

                    <p className="text-gray-700">Per Night $ {room.pricePerNight}</p>
                </div>
            </div>
        </Link>
    );
}

export default Roomcard;