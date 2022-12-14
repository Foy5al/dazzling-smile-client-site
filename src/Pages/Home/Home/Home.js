import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ConnectUs from '../ConnectUs/ConnectUs';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Info />
            <Services />
            <Treatment />
            <AppointmentBanner />
            <Testimonial />
            <ConnectUs />
            <Footer />
        </div>
    );
};

export default Home;