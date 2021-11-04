import React from 'react';
import Product from '../components/main/Product';
import MainSlide from '../components/main/MainSlide';
import MainBanner from '../components/main/MainBanner';

function Home() {
    return (
        <div>
            <MainSlide />
            <Product />
            <MainBanner />
        </div>
    )
}

export default Home;
