import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { roomsDummyData, assets, Whislist, roomCommonData, Booked } from "../assets/assets";

const Roomdetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [roomImage, setRoomImage] = useState(null)
    const [isWhislist, setIsWhislist] = useState(false)
    const [book, setBook] = useState(false)
    const [booked, setBooked] = useState(false);

    // Form state
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState("");
    const [errors, setErrors] = useState({});
    const [shakeBtn, setShakeBtn] = useState(false);

    const checkBooked = () => {
        Booked.includes(room) ? Booked.pop(room) : Booked.push(room)
        console.log(Booked)
        setBooked(!booked)

    }

    const handleAvailable = () => {
        const newErrors = {};

        if (!checkIn) newErrors.checkIn = "Please select a check-in date";
        if (!checkOut) newErrors.checkOut = "Please select a check-out date";
        if (!guests || guests < 1) newErrors.guests = "Please enter number of guests";

        // Validate check-out is after check-in
        if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
            newErrors.checkOut = "Check-out must be after check-in";
        }

        // Validate check-in is not in the past
        if (checkIn && new Date(checkIn) < new Date(new Date().toDateString())) {
            newErrors.checkIn = "Check-in date cannot be in the past";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            // Trigger shake animation on button
            setShakeBtn(true);
            setTimeout(() => setShakeBtn(false), 500);
            return;
        }

        room.isAvailable ? setBook(true) : setBook(false)
    }


    const addWhislist = () => {
        setIsWhislist(true)
        Whislist.push(room)

    }
    const removeWhislist = () => {
        setIsWhislist(false)
        Whislist.pop(room)

    }

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setRoomImage(room.images[0])


    }, [id])

    return room && (
        <div className={`mb-14 flex flex-col gap-2 mt-24 px-4 sm:px-8 md:px-16 lg:px-32 ${room ? "block" : "hidden"}`}>
            <div className="flex flex-col" >
                <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold font-playfair">{room.name} <span className="text-gray-500 font-medium text-sm">{room.roomType}</span></h1>
                <div>
                    <img src={assets.starIconFilled} alt="" className="inline w-4 pb-1" />
                    <img src={assets.starIconFilled} alt="" className="inline w-4 pb-1" />
                    <img src={assets.starIconFilled} alt="" className="inline w-4 pb-1" />
                    <img src={assets.starIconFilled} alt="" className="inline w-4 pb-1" />
                    <img src={assets.starIconFilled} alt="" className="inline w-4 pb-1" />
                    <p className="inline pl-2 ">200+ Reviews</p>
                </div>

                <p className="text-gray-500 "><img src={assets.locationIcon} className="inline px-1 pb-1" />{room.Location}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-[70%]"  >
                    <img src={roomImage} alt="" className="w-full rounded-xl object-cover" />
                </div>
                <div className="flex flex-row md:flex-col gap-2 sm:gap-4 overflow-x-auto md:overflow-visible">
                    {roomsDummyData.map((item, index) => {
                        return (
                            <div key={index} className="flex-shrink-0">
                                <img src={room.images[index + 2]} alt="" className="w-[100px] sm:w-[120px] md:w-full md:max-w-[180px] rounded-xl object-cover cursor-pointer hover:opacity-80 transition-opacity" onClick={() => room.images[index + 2] && setRoomImage(room.images[index + 2])} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="pb-4 flex flex-col sm:flex-row justify-between w-full lg:w-[80%] gap-4">
                <div>
                    <p className="font-playfair font-bold text-[22px] sm:text-[26px] md:text-[30px]">Experience Luxury Like Never Before</p>
                    <div className="flex gap-2 flex-wrap">
                        {room.amenities.map((amen, i) => {
                            return (
                                <div className="bg-gray-200 rounded-full p-1 px-2 text-[12px] text-center" key={i}>
                                    <p>{amen}</p>
                                </div>
                            )


                        })}
                    </div>
                </div>

                <div className="flex flex-col flex-shrink-0">

                    <p className="text-[20px] sm:text-[24px] sm:self-end ">${room.pricePerNight}/Night</p>
                    <div className="flex gap-2 ">
                        <button className="cursor-pointer bg-gray-200 px-2 p-1 hover:bg-gray-100  hover:font-gray transition:all rounded-md  active:opacity-80 text-sm" onClick={!isWhislist ? addWhislist : removeWhislist}>{!isWhislist ? "Add to Whislist" : "Added to Whislist"}</button>

                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full lg:w-[80%]">
                <div className="flex flex-col sm:flex-row border-t border-gray-400 pt-4 gap-4 sm:gap-2 sm:justify-around sm:items-start">
                    <div className="flex flex-col sm:border-r sm:border-gray-400 sm:pr-6">
                        <label htmlFor="Check-In" className="text-sm font-medium text-gray-700 mb-1">Check-In <span className="text-red-500">*</span></label>
                        <input
                            type="date"
                            name="Check-In"
                            id="Check-In"
                            value={checkIn}
                            onChange={(e) => { setCheckIn(e.target.value); setErrors(prev => ({ ...prev, checkIn: "" })); setBook(false); }}
                            className={`border-2 rounded-md px-2 py-1 outline-none transition-all w-full sm:w-auto ${errors.checkIn ? "border-red-400 bg-red-50" : "border-gray-300 focus:border-blue-400"}`}
                        />
                        {errors.checkIn && <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>}
                    </div>
                    <div className="flex flex-col sm:border-r sm:border-gray-400 sm:pr-6">
                        <label htmlFor="Check-Out" className="text-sm font-medium text-gray-700 mb-1">Check-Out <span className="text-red-500">*</span></label>
                        <input
                            type="date"
                            name="Check-Out"
                            id="Check-Out"
                            value={checkOut}
                            min={checkIn || undefined}
                            onChange={(e) => { setCheckOut(e.target.value); setErrors(prev => ({ ...prev, checkOut: "" })); setBook(false); }}
                            className={`border-2 rounded-md px-2 py-1 outline-none transition-all w-full sm:w-auto ${errors.checkOut ? "border-red-400 bg-red-50" : "border-gray-300 focus:border-blue-400"}`}
                        />
                        {errors.checkOut && <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Guests" className="text-sm font-medium text-gray-700 mb-1">Guests <span className="text-red-500">*</span></label>
                        <input
                            className={`w-full sm:w-[70%] border-2 rounded-md px-2 py-1 outline-none transition-all ${errors.guests ? "border-red-400 bg-red-50" : "border-gray-300 focus:border-blue-400"}`}
                            type="number"
                            name="Guests"
                            id="Guests"
                            min="1"
                            value={guests}
                            onChange={(e) => { setGuests(e.target.value); setErrors(prev => ({ ...prev, guests: "" })); setBook(false); }}
                            placeholder="2"
                        />
                        {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests}</p>}
                    </div>
                    <button
                        type="button"
                        className={`mt-2 sm:mt-0 sm:mb-2 self-stretch sm:self-center cursor-pointer bg-black text-white px-6 sm:px-10 py-2.5 hover:bg-gray-800 transition-all rounded-lg active:scale-95 font-medium text-sm ${shakeBtn ? "animate-[shake_0.5s_ease-in-out]" : ""}`}
                        onClick={handleAvailable}
                    >
                        Check Availability
                    </button>
                </div>

                {/* Price summary when dates are selected */}
                {checkIn && checkOut && new Date(checkOut) > new Date(checkIn) && (
                    <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-500">
                        <span>{Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))} night(s)</span>
                        <span>•</span>
                        <span className="font-semibold text-gray-900">
                            Total: ${room.pricePerNight * Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))}
                        </span>
                        {guests && <><span>•</span><span>{guests} guest(s)</span></>}
                    </div>
                )}
            </div>

            {book && (
                <div className="pt-4 w-full lg:w-[80%] border-t border-gray-400">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-green-800 font-medium text-sm">Great news! Your selected dates are available.</p>
                                <p className="text-green-600 text-xs mt-0.5">{checkIn} → {checkOut} · {guests} guest(s)</p>
                            </div>
                        </div>
                        <button
                            className="cursor-pointer bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 active:scale-95 transition-all w-full sm:w-auto"
                            onClick={checkBooked}
                        >
                            {booked ? "✓ Booked" : "Book Now"}
                        </button>
                    </div>
                </div>
            )}
            <div className="pt-4 w-full lg:w-[80%] border-b border-t border-gray-400">
                {roomCommonData.map((i) => {
                    return (
                        <div className="pb-2" key={i}>
                            <div className="flex gap-2 text-[14px] sm:text-[16px]">
                                <img src={i.icon} alt="" />
                                <p>{i.title}</p>

                            </div>
                            <p className="text-[13px] sm:text-[14px] text-gray-500 pl-8 ">{i.description}</p>
                        </div>
                    )
                })}
            </div>
            <div className="w-full lg:w-[80%] text-xs sm:text-sm pt-4 text-gray-500">
                <p>NOTE: Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
            </div>

        </div>

    );
}

export default Roomdetails