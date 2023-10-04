import React from 'react'
import Header from '../Header/Header'
import caloreis from '../img/calories.png'
import heart from '../img/heart.png'
import frontImg from '../img/hero_image.png'
import backImg from '../img/hero_image_back.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-side'>
        <Header/>
        <div className='best-club-block'>
          <div className='slider'></div>
          <span className='best-club-title'>The best fintess club in the town</span>
        </div>
        <div className='hero-title'>
          <div><span className='stroke-text'>Shape</span> Your</div>
          <div>Ideal Body</div>
          <div>In here we will help you to shape and build your ideal body and live up your life to fullest</div>
        </div>
        <div className='hero-statistic'>
          <div>
            <p className='hero-statistic-numbers'>+140</p>
            <p className='hero-statistic-text'>expert coaches</p>
          </div>
          <div>
            <p className='hero-statistic-numbers'>+978</p>
            <p className='hero-statistic-text'>members joined</p>
          </div>
          <div>
            <p className='hero-statistic-numbers'>+50</p>
            <p className='hero-statistic-text'>fitness programs</p>
          </div>
        </div>
        <div className='hero-block'>
          <button className='hero-block-first'>Get Started</button>
          <button className='hero-block-second'>Learn More</button>
        </div>
      </div>
      <div className='right-side'>
        <button className='right-side-btn'>Join Now</button>
        <div className='heart-rate'>
          <img src={heart}></img>
          <p className='first-stroke'>Heart rate</p>
          <p className='second-stroke'>116 bpm</p>
        </div>

        <img src={frontImg} className='front-img'></img>
        <img src={backImg} className='back-img'></img>
      </div>
    </div>
  )
}

export default Hero
