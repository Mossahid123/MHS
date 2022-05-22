import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import PartsCard from './PartsCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PartsCard></PartsCard>
            <Footer></Footer>
        </div>
    );
};

export default Home;