import React from 'react'
import "./about.scss";
import WhyUs from '../../components/whyus/WhyUs';
import FeedbackWrapper from '../../components/feedback/FeedbackWrapper';
import AboutTop from '../../components/aboutTop/AboutTop';

function About() {
  return (
    <div className='about'>
      <AboutTop />
      <WhyUs backgroundColor="#ffffff" />
      <FeedbackWrapper />

    </div >
  )
}

export default About;