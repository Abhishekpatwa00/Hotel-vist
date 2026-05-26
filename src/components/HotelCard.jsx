import React from "react";
import { assets, roomsDummyData } from '../assets/assets'
import { Link } from "react-router-dom";

const HotelCard = ({ room, index }) => {
    return (


        <Link to={`/room/` + room._id} onClick={() => scrollTo(0, 0)} key={room._id} className="relative block w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] max-w-[300px]">
            <div className="border bg-white border-gray-200 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
                <img className="w-full rounded-t-xl overflow-hidden text-gray-500/90 bg-white aspect-[4/3] object-cover" src={room.images[0]} />
                {index % 2 === 0 && <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">Best Seller</p>
                }
                <div className="p-4 pt-5">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <p className="font-playfair text-lg sm:text-xl font-medium text-gray-800 truncate">
                                {room.hotel.name}
                            </p>
                            <div className="flex items-center gap-1 flex-shrink-0">
                                <img src={assets.starIconFilled} alt="" />
                                <p>4.5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <img src={assets.locationIcon} alt="" />
                            <span className="truncate">{room.hotel.address}</span>
                        </div>
                        <div className="flex  items-center justify-between mt-4">
                            <p><span className="text-sm text-gray-800">${room.pricePerNight}</span>/night</p>
                            <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border
                            border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer
                        ">Book Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </Link>


    );
}
export default HotelCard    