import './App.css';
import { Link, Element} from 'react-scroll';
import { useState } from 'react';
import CountUp from 'react-countup';

function App() { 

  const [mobileMenu, setMobileMenu] = useState(false)

  /*const mobMenu = (e) => {
    e.preventDefault();
    if(mobileMenu === false){
      setMobileMenu(true)
    }if(mobileMenu === true){
      setMobileMenu(false)
    }
  }*/

  const activeMenu = () => {
    if(mobileMenu === false){
      setMobileMenu(true)
    }
  }

  const closeMenu = () => {
    setMobileMenu(false)
  }

  return (
      <div className='wrapper'>
        <div className='spot'></div>

        <div className='home-block'>
          <div className='home-block-left'>
            <nav className='home-block-left-navigation'>
              <div className='home-block-left-navigation-img'></div>
              <ul className='home-block-left-navigation-nav'>
                <li><Link to="section1" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
                <li><Link to="section2" spy={true} smooth={true} offset={-70} duration={500}>Programs</Link></li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testimonials</li>
              </ul>
            </nav>
            <div className='home-block-left-slider-box-block'>
              <div className='home-block-left-slider-box'>
                <div className='home-block-left-slider-box-slider'></div>
                <p>the best fitness club in the town</p>
              </div>
            </div>
            <div className='home-block-left-title-block'>
              <div>
                <span className='home-block-left-title-block-first-string'>shape</span>
                <span className='home-block-left-title-block-second-string'> your</span>
              </div>
              <div>
                <p className='home-block-left-title-block-third-string'>ideal body</p>
              </div>
              <div className='home-block-left-title-block-fourth-string'>In here we will help you to shape and build your ideal body and live up your life to fullset </div>
            </div>
            <div className='home-block-left-culc-block'>
              <div>
                <p className='home-block-left-culc-block-numbers'>+ <CountUp start={100} end={138} duration={5}/></p>
                <p className='home-block-left-culc-block-text'>Expert coaches</p>
              </div>
              <div>
                <p className='home-block-left-culc-block-numbers'>+ <CountUp start={920} end={978} duration={5}/></p>
                <p className='home-block-left-culc-block-text'>members joined</p>
              </div>
              <div>
                <p className='home-block-left-culc-block-numbers'>+ <CountUp start={25} end={50} duration={5}/></p>
                <p className='home-block-left-culc-block-text'>fitness program</p>
              </div>
              <div className='home-block-left-culc-block-diagram'>
                <div className='home-block-left-culc-block-diagram-box'>
                  <div className='home-block-left-culc-block-diagram-box-img'></div>
                  <div className='home-block-left-culc-block-diagram-box-info'>
                    <p className='home-block-left-culc-block-diagram-box-info-title'>Calories burned</p>
                    <p className='home-block-left-culc-block-diagram-box-info-text'>220 kcal</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='home-block-left-btn'>
              <button className='home-block-left-btn-first'>Get Started</button>
              <button className='home-block-left-btn-right'>Learn More</button>
            </div>
          </div>

          <div className='home-block-right'>
            <button className='home-block-right-btn'>Join Now</button>
            <div className='home-block-right-culc-block-diagram-box'>
                  <div className='home-block-right-culc-block-diagram-box-img'></div>
                  <div className='home-block-right-culc-block-diagram-box-info'>
                    <p className='home-block-right-culc-block-diagram-box-info-title'>Calories burned</p>
                    <p className='home-block-right-culc-block-diagram-box-info-text'>220 kcal</p>
                  </div>
                </div>
            <div className='home-block-right-btn-scoreboard'>
              <div className='home-block-right-btn-scoreboard-heart'></div>
              <p className='home-block-right-btn-scoreboard-heart-title'>Heart Rate</p>
              <p className='home-block-right-btn-scoreboard-heart-current'>116 bpm</p>
            </div>
            <div className='home-block-right-man'></div>
            <div className='home-block-right-man-back'></div>
          </div>
        </div>

        {/*<Element name='section2'>
          <div className='programs-block'>programs</div>
  </Element>*/}

      </div>
  );
}

export default App;
