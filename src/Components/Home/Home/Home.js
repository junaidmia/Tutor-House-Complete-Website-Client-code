import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MessageUs from '../MessageUs/MessageUs';
import Navbar from '../Navbar/Navbar';
import OurFacility from '../OurFacility/OurFacility';
import Review from '../Review/Review';
import ServiceCard from '../ServiceCard/ServiceCard';
import TeachersCarousel from '../TeachersCarousel/TeachersCarousel';

const Home = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <Header></Header>
            <ServiceCard></ServiceCard>
            <TeachersCarousel></TeachersCarousel>
            <MessageUs></MessageUs>
            <Review></Review>
            <OurFacility></OurFacility>
            <Footer></Footer>
        </div>
    );
};

export default Home;