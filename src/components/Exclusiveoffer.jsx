import React from "react"
import { exclusiveOffers, assets } from '../assets/assets';

import OfferCard from "./Offercard.jsx";


const Exclusiveoffer = () => {
    return (
        <div className="bg-white pb-10 sm:pb-[64px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-8 md:px-8 lg:px-14 gap-4">
                <div className="flex flex-col justify-center  items-start gap-2 pb-8 sm:pb-16 pt-10 sm:pt-16">
                    <p className="text-[28px] sm:text-[36px] md:text-[40px] text-left font-playfair">Exclusive Offers</p>
                    <p className="text-gray-400 text-sm sm:text-[16px] max-w-xl">Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
                </div>
                <button className="flex align-middle gap-2 border-2 rounded-md p-2 items-center justify-center h-[32px] graybg hover:grayscale-25 trasition-all  border-gray-100 flex-shrink-0">View All <img src={assets.arrowIcon} className="w-[16px]" alt="" /></button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch px-4 sm:px-0">
                {
                    exclusiveOffers.map((room, index) => (
                        <OfferCard room={room} index={index} key={room._id} />


                    ))

                }

            </div>

        </div>


    );
}

export default Exclusiveoffer;