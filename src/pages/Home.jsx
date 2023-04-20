
import React from 'react'
import CarouselFadeExample from '../components/Carousel/Carousel';
// import ImageSlider from '../components/Training/ImageSlider';
import GymPricing from '../components/Pricing/Pricing';
import Header from '../components/header/Header';

// import Footer from '../components/Footer/Footer';
import Blogs from './Blogs';
import AboutUs from './AboutUs';
import Classes from './Classes';


import TrainingProgram from '../components/TrainingProgram/TrainingProgram';
import TrainingSection from '../components/trainingSection/TrainingSection';

const Home = () => {
  return (
    // <h1>This is a Home page</h1>
    <div>
      <Header/>
      <CarouselFadeExample/>

      <AboutUs/>
      <Classes/>
      <GymPricing/>
      <TrainingSection/>
      <Blogs/>
      <TrainingProgram/>
    
     

      {/* <ImageSlider/> */}

    </div>
  )
}

export default Home