import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <Treatment />
            <AppointmentBanner />
            <Testimonial />
        </div>
    );
};

export default Home;