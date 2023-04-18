
import React from 'react'
import CarouselFadeExample from '../components/Carousel/Carousel';
// import ImageSlider from '../components/Training/ImageSlider';
import Header from '../components/header/Header';
import Footer from '../components/Footer/footer';

const Home = () => {
  return (
    // <h1>This is a Home page</h1>
    <div>
      <Header/>
      <CarouselFadeExample/>
      <Footer/>
      {/* <ImageSlider/> */}

    </div>
  )
}

export default Home