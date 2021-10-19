import React from 'react';
import Banner from '../Banner/Banner';
import Motivation from '../Motivation/Motivation';
import Services from '../Services/Services';
import Subscription from '../Subscription/Subscription';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Motivation></Motivation>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;