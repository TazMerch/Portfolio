import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <div id="skills">
      <div id='skills__wrapper'></div>  
      <div className="skills__container">
        <div className='skills__intro'>
            <h1 className="skills__header" data-aos="fade-in">Skills</h1>
            <p data-aos="fade-in">
              My programming journey began with Python in
              early 2022. I'm enthusiastic, as well as a quick learner. Within the span of a year(while working
              a fulltime job and without any prior programming knowledge), I learned a handful of
              programming languages and frameworks. Thus far I've built two websites and a home server thats 
              used for remote NAS and domain hosting for my webistes.
            </p>
        </div>
        <div className='skills__list'>
            <ul className='skills__items'>
                <li className='skills__item' data-aos="fade-in">HTML</li>
                <li className='skills__item' data-aos="fade-in">CSS</li>
                <li className='skills__item' data-aos="fade-in">Javascript</li>
                <li className='skills__item' data-aos="fade-in">ReactJS</li>
                <li className='skills__item' data-aos="fade-in">NGINX</li>
                <li className='skills__item' data-aos="fade-in">JSON</li>
                <li className='skills__item' data-aos="fade-in">XML</li>
                <li className='skills__item' data-aos="fade-in">SQL</li>
            </ul>
            <ul className='skills__items'>
                <li className='skills__item' data-aos="fade-in">Java</li>
                <li className='skills__item' data-aos="fade-in">PHP</li>
                <li className='skills__item' data-aos="fade-in">Bootstrap</li>
                <li className='skills__item' data-aos="fade-in">Node.js</li>
                <li className='skills__item' data-aos="fade-in">Python 3.8</li>
                <li className='skills__item' data-aos="fade-in">Git/Github</li>
                <li className='skills__item' data-aos="fade-in">Cloudfare</li>
                <li className='skills__item' data-aos="fade-in">Docker</li>
            </ul>
        </div>

      </div>
    </div>
  )
}
