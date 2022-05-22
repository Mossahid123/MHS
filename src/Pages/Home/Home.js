import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;