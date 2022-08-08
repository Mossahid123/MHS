import React from 'react';
import Footer from '../../Shared/Footer';
import Loading from '../../Shared/Loading';
import AddReviews from '../Dashboard/AddReviews';
import Login from '../Login/Login';
import Banner from './Banner';
import NewFeatures from './NewFeatures';
import OurNewProduct from './OurNewProduct';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <AddReviews></AddReviews>
            <Reviews></Reviews>
            <NewFeatures></NewFeatures>
            <OurNewProduct></OurNewProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;