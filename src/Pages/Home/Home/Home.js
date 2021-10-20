import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;