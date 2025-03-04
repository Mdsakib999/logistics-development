import React, { useEffect } from 'react';
import Banner from './HomeComponent/Banner';
import PartnerAbout from './HomeComponent/PartnerAbout';
import CustomerReview from '../../Components/CustomerReview';

const Home = () => {
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    return (
        <div>
            <Banner></Banner>
            <PartnerAbout></PartnerAbout>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;