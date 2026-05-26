import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
    const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];
    return (
        <div className='bg-[url("/src/assets/heroImage.png")] flex flex-col bg-no-repeat bg-cover bg-center min-h-screen '>
            <div className='px-4 sm:px-8 md:px-12 lg:ml-[115px] flex flex-col mt-28 sm:mt-36 md:mt-[188px] gap-4 sm:gap-[24px] pb-[32px]'>
                <div className='text-white bg-[#49B9FF80] w-auto max-w-[236px] h-[32px] text-xs sm:text-sm justify-center rounded-full flex items-center px-4'>The Ultimate Hotel Experience</div>
                <div className='font-playfair text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] max-w-[598px] leading-none '>Discover Your Perfect 
                    Getaway Destination
                </div>
                <div className="max-w-[475px] text-sm sm:text-[16px] font-medium text-white">Unparalleled luxury and comfort await at the world's most exclusive
                    hotels and resorts. Start your journey today.
                </div>
                <div className='bg-white w-full max-w-[860px] p-3 sm:p-[16px] flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch sm:items-end gap-3 sm:gap-4 mt-[8px] rounded-md'> 
                    <div className='flex justify-baseline gap-1 sm:gap-2 flex-col flex-1 min-w-[140px]'>
                        <p className='text-sm'> <img src={assets.locationFilledIcon} alt="" className='inline w-5' /> Destination</p>
                        <input list="Destinations"type="text" placeholder='Type here' className='border-2 border-gray-400 outline-none pl-1 rounded-md w-full'  />
                        <datalist id="Destinations">
                            {cities.map((city,index) => (<option value={city} key={index}/>))}
                        </datalist>
                    </div>
                    <div className='flex justify-baseline  gap-1 sm:gap-2 flex-col flex-1 min-w-[140px]'>
                        <p className='text-sm'> <img src={assets.calenderIcon} alt="" className='inline align-middle' /> Check In</p>
                        <input type="date"  className='border-2  border-gray-400 align-middle outline-none pl-1 rounded-md w-full'  />
                    </div>
                    <div className='flex justify-baseline gap-1 sm:gap-2 flex-col flex-1 min-w-[140px]'>
                        <p className='text-sm'> <img src={assets.calenderIcon} alt="" className='inline align-middle' /> Check Out</p>
                        <input type="date"  className='border-2  border-gray-400 align-middle outline-none pl-1 rounded-md w-full'  />
                    </div>
                    <div className='flex justify-baseline  gap-1 sm:gap-2 flex-col flex-1 min-w-[100px]'>
                        <p className='text-sm'> <img src={assets.guestsIcon} alt="" className='inline self-center' /> Guests</p>
                        <input type="number" min={1} placeholder='1'  className='border-2 self-center border-gray-400 outline-none pl-1 rounded-md w-full'  />
                    </div>
                    <button className='bg-black rounded-md w-full sm:w-[114px] flex items-center self-center justify-center py-2 sm:py-0 text-white h-[38px]'><img src={assets.searchIcon} alt="" /> Search</button>
                </div>
            </div>        
        </div>
    );
}

export default Hero 