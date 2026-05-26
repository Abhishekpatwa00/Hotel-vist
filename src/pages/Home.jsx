import React from 'react'
import { assets } from '../assets/assets.js'
import Hero from '../components/Hero.jsx'
import Featured from '../components/Featured.jsx';

import Exclusiveoffer from '../components/Exclusiveoffer.jsx';
import Newsletter from '../components/Newsletter.jsx';

const Home = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <Exclusiveoffer />
            <Newsletter />

        </div>
    );
}
export default Home