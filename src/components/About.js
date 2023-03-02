import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about">
        <div id='about__link'></div>
        <h1 className="about__header" data-aos="fade-in">About</h1>
        <div className="about__wrapper"></div>
        <div className='about__container'>
            <ul>
                <li className="about__item" data-aos="fade-in">I’m a motivated, self taught web developer. </li>
                <li className="about__item" data-aos="fade-in">Born in Dekalb county Georgia and moved to Florida in 2009.</li>
                <li className="about__item" data-aos="fade-in">Graduated from Allen D. Nease High School in 2012.</li>
                <li className="about__item" data-aos="fade-in">Self taught music producer/sound engineer. Check out my <a className="yt--link" href="https://youtu.be/G8lC1Kc7CAg"><i class="fa-brands fa-youtube"></i> YouTube</a> channel.</li>
                <li className="about__item" data-aos="fade-in">Working on an architectural visualization, reconstructing a two story 5000 sq ft residential house using Blender and Unreal Engine 5.</li>
                <li className="about__item" data-aos="fade-in">Photography and videography.</li>                
            </ul>
        </div>
    </div>
  )
}

export default About
