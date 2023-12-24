import React from 'react'
import Hero from '../../components/hero/Hero';
import Services from '../../components/services/Services';
import Statistics from '../../components/statistics/Statistics';
import WhyUs from '../../components/whyus/WhyUs';
import "./home.scss";

function Home() {
  return (
    <div className='home'>
        <Hero/>
        <Statistics />
        <Services />
        <WhyUs />
    </div>
  )
}

export default Home;