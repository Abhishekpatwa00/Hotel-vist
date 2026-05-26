import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk, useUser, UserButton } from '@clerk/react'

const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
)

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotel', path: '/allrooms' },
        { name: 'Experiences', path: '/Experiences' },
        { name: 'About', path: '/About' },
    ];

    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (location.pathname !== '/') {
            setIsScrolled(true);
            return;
        } else {
            setIsScrolled(false);
        }
        setIsScrolled(prev => location.pathname !== "/" ? true : prev);
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    }, [location.pathname]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);



    return (
        <>
            <div className={` ${isScrolled ? "bg-white shadow-sm" : 'bg-transparent'}  all-transition duration-500 fixed z-50 top-0 right-0 left-0  flex items-center px-4 sm:px-8 md:px-16 lg:px-24 justify-between p-4 text-black `} >
                <Link to="/" className="flex items-center gap-2 ">
                    <img className={`w-[24px] h-[24px] ${isScrolled ? 'invert' : ""}`} src={assets.Vector} alt="" />
                    <p className={`font-bold weight-600 text-[20px] sm:text-[22px]  ${isScrolled ? 'text-black' : "text-white"} `}>Hotel-Vist</p>
                </Link>
                <div className='flex items-center gap-4 hidden md:flex' >
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className={`text-[14px] font-weight-500 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0  after:transition-all after:duration-300 hover:after:w-full ${isScrolled ? 'text-black after:bg-black' : 'text-white after:bg-white'}`}>{link.name}</Link>
                    ))}
                </div>
                <div className='flex gap-6 items-center hidden md:flex' >
                    <img className={`w-[24px] h-[24px]  self-center  ${isScrolled ? 'invert' : ''}`} src={assets.searchIcon} alt="" />
                    {

                        user ? (<UserButton  >
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Bookings" labelIcon={<BookIcon />}
                                    onClick={() => navigate('/my-bookings')
                                    } />
                            </UserButton.MenuItems>

                        </UserButton>) : (
                            <div className='flex items-center gap-8' >

                                <button onClick={openSignIn} className="w-[108px] h-[32px]  bg-black text-white rounded-full">Get Started</button>
                            </div>
                        )

                    }
                </div>
                {/* mobile navbar toggle */}
                <div className='flex md:hidden items-center gap-3' >
                    {user && <UserButton />}
                    <button
                        className={`p-1 ${isScrolled ? 'invert' : ""}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <img src={assets.menuIcon} alt="" className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile menu drawer */}
            <div className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center p-5 border-b border-gray-100">
                    <p className="font-bold text-[20px] text-gray-900">Menu</p>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col p-5 gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${location.pathname === link.path ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="px-5 pt-4 border-t border-gray-100 mt-2">
                    {user ? (
                        <Link
                            to="/my-bookings"
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <BookIcon />
                            My Bookings
                        </Link>
                    ) : (
                        <button onClick={() => { openSignIn(); setIsMobileMenuOpen(false); }} className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 active:scale-95 transition-all">
                            Get Started
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar