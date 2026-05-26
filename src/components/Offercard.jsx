import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";


const OfferCard = ({ room, index }) => {
    return (
        <Link to={`/room/` + room._id} onClick={() => scrollTo(0, 0)} key={room._id} className="relative block w-full sm:w-auto">
            <div className="relative overflow-hidden rounded-lg">
                <img src={room.image} alt="" className="w-full sm:w-[373px] h-[200px] sm:h-[225px] rounded-lg object-cover" />
                <p className="absolute top-3 left-3 bg-white/80 rounded-2xl text-center text-black w-[80px] pl-2 pr-2 text-sm">{room.priceOff}% OFF</p>
                <p className="absolute top-12 sm:top-15 text-white text-xl sm:text-2xl left-3 font-playfair pr-3">{room.title}</p>
                <p className="absolute left-3 top-20 sm:top-25 text-white text-xs sm:text-sm pr-3">{room.description}</p>
                <button className="flex align-middle gap-2 text-white absolute left-3 bottom-3 sm:top-45 text-sm">View Offer <img src={assets.arrowIcon} className="w-[12px] inline invert " /></button>
            </div>
        </Link >
    )

}

export default OfferCard;