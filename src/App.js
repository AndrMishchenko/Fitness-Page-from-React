import './App.css';
import { Link, Element} from 'react-scroll';
import { useState } from 'react';
import CountUp from 'react-countup';
import dumbell from './components/img/dumbell.svg';
import runing from './components/img/runing.svg';
import flame from './components/img/flame.svg';
import heart from './components/img/heartHealth.svg';
import basicPlanImg from './components/img/heartTower.svg';
import premiumPlanImg from './components/img/crown.svg';
import proPlanImg from './components/img/firstPosition.svg'
import { useEffect } from 'react';

function App() { 

  const [mobileMenu, setMobileMenu] = useState(false);

  const [trainingPlan, setTrainingPlan] = useState('monthly');
  const [basicPlan, setBasicPlan] = useState(0);
  const [premiumPlan, setPremiumPlan] = useState(0);
  const [proPlan, setProPlan] = useState(0);

  const mobMenu = () => {
    setMobileMenu(!mobileMenu)
    if(mobileMenu === true){
      setMobileMenu(false)
    }
  }

  const changeTrainingPlan = () => {
    setTrainingPlan('yearly')
    if(trainingPlan === 'yearly'){
      setTrainingPlan('monthly')
    }
  }

  useEffect(() => {
    if(trainingPlan === 'monthly'){
      setBasicPlan(25)
      setPremiumPlan(30)
      setProPlan(45)
    }else{
      setBasicPlan(300)
      setPremiumPlan(330)
      setProPlan(495)
    }
  })

  return (
      <div className='wrapper'>
        <div className='spot'></div>

        <Element name='section1'>
          <div className='home-block'>
            <div className='home-block-left'>
              <nav className='home-block-left-navigation'>
                <div className='home-block-left-navigation-img'></div>
                <ul className='home-block-left-navigation-nav'>
                  <li><Link to="section1" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
                  <li><Link to="section2" spy={true} smooth={true} offset={-70} duration={500}>Programs</Link></li>
                  <li><Link to="section3" spy={true} smooth={true} offset={-70} duration={500}>Why us</Link></li>
                  <li>Plans</li>
                  <li>Testimonials</li>
                </ul>
              </nav>
              <div className={`home-block-left-navigation-nav-mobile ${mobileMenu ? 'inactive' : ''}`} onClick={mobMenu}>
                <div className='home-block-left-navigation-nav-mobile-navImg'></div>
              </div>
              {mobileMenu && (
                <div className='home-block-left-navigation-nav-mobile-menu'>
                  <div className='home-block-left-navigation-nav-mobile-menu-close' onClick={mobMenu}>X</div>
                  <ul className='home-block-left-navigation-mobile'>
                    <li><Link to="section1" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
                    <li><Link to="section2" spy={true} smooth={true} offset={-70} duration={500}>Programs</Link></li>
                    <li><Link to="section3" spy={true} smooth={true} offset={-70} duration={500}>Why us</Link></li>
                    <li><Link>Plans</Link></li>
                    <li><Link>Testimonials</Link></li>
                  </ul>
                </div>
              )}
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
        </Element>

        <Element name='section2'>
          <div className='programs-block'>
            <div className='programs-block-title'>
              <p>explore our</p>
              <p>programs</p>
              <p>to shape you</p>
            </div>
            <div className='programs-block-title-blockTraining'>
              <div className='programs-block-title-blockTraining-strenght'>
                <img className='programs-block-title-blockTraining-strenght-img' src={dumbell}></img>
                <h3>Strenght Training</h3>
                <p>In this program you are trained to improve your strenght through many exercises.</p>
                <div className='programs-block-title-blockTraining-strenght-joined'>
                  <p>Join Now</p>
                  <div className='programs-block-title-blockTraining-strenght-arrow'></div>
                </div>
              </div>
              <div className='programs-block-title-blockTraining-cardio'>
                <img className='programs-block-title-blockTraining-cardio-img' src={runing}></img>
                <h3>Cardio Training</h3>
                <p>In this program you are trained to do sequential moves in rabge of 20 until 30 minutes.</p>
                <div className='programs-block-title-blockTraining-cardio-joined'>
                  <p>Join Now</p>
                  <div className='programs-block-title-blockTraining-cardio-arrow'></div>
                </div>
              </div>
              <div className='programs-block-title-blockTraining-fatBurning'>
                <img className='programs-block-title-blockTraining-fatBurning-img' src={flame}></img>
                <h3>Fat Burning</h3>
                <p>This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
                <div className='programs-block-title-blockTraining-fatBurning-joined'>
                  <p>Join Now</p>
                  <div className='programs-block-title-blockTraining-fatBurning-arrow'></div>
                </div>
              </div>
              <div className='programs-block-title-blockTraining-healthFitness'>
                <img className='programs-block-title-blockTraining-healthFitness-img' src={heart}></img>
                <h3>Health Fitness</h3>
                <p>This programs is designed for those who exercises only for their body fitness not body building.</p>
                <div className='programs-block-title-blockTraining-healthFitness-joined'>
                  <p>Join Now</p>
                  <div className='programs-block-title-blockTraining-healthFitness-arrow'></div>
                </div>
              </div>
            </div>
          </div>
        </Element>

        <Element name='section 3'>
          <div className='whyUs-block'>
            <div className='whyUs-block-leftSide'>
              <div className='whyUs-block-leftSide-firstPhoto'></div>
              <div className='whyUs-block-leftSide-secondPhoto-block'>
                <div className='whyUs-block-leftSide-secondPhoto'></div>
                <div className='whyUs-block-leftSide-third-fourthPhoto-block'>
                  <div className='whyUs-block-leftSide-thirdPhoto'></div>
                  <div className='whyUs-block-leftSide-fourthPhoto'></div>
                </div>
              </div>
            </div>

            <div className='whyUs-block-rightSide'>
              <p className='whyUs-block-rightSide-preTitle'>some reason</p>
              <h3 className='whyUs-block-rightSide-title'>WHY <span>CHOOSE US</span></h3>
              <div className='whyUs-block-rightSide-firstBenefit'>
                <div className='whyUs-block-rightSide-firstBenefit-img'></div>
                <p>over 140+ expert coachs</p>
              </div>
              <div className='whyUs-block-rightSide-secondBenefit'>
                <div className='whyUs-block-rightSide-secondBenefit-img'></div>
                <p>train smarter and faster than before</p>
              </div>
              <div className='whyUs-block-rightSide-thirdBenefit'>
                <div className='whyUs-block-rightSide-thirdBenefit-img'></div>
                <p>1 free program for new member</p>
              </div>
              <div className='whyUs-block-rightSide-fourthBenefit'>
                <div className='whyUs-block-rightSide-fourthBenefit-img'></div>
                <p>reliable partners</p>
              </div>
              <div className='whyUs-block-rightSide-secondTitle'>our partners</div>
              <div className='whyUs-block-rightSide-partners'>
                <div className='whyUs-block-rightSide-partners-firtsImg'></div>
                <div className='whyUs-block-rightSide-partners-secondImg'></div>
                <div className='whyUs-block-rightSide-partners-thirdImg'></div>
              </div>
            </div>
          </div>
        </Element>

        <Element name='section4'>
          <div className='plans-block'>
            <div className='plans-block-title'>
              <p>ready to start</p>
              <p>your journey</p>
              <p>now withus</p>
            </div>
            <div className='plans-block-selectedTimeline'>
              <p 
                className={`plans-block-selectedTimeline-monthly ${trainingPlan === 'monthly' ? 'act' : 'notActive'}`}
                onClick={changeTrainingPlan}
              >Monthly</p>
              <div className='plans-block-selectedTimeline-blockSlider'>
                <div className={`plans-block-selectedTimeline-blockSlider-dot ${trainingPlan === 'monthly' ? 'dotActive' : 'dotInactive'}`}></div>
              </div>
              <p 
                className={`plans-block-selectedTimeline-monthly ${trainingPlan === 'yearly' ? 'act' : 'notActive'}`}
                onClick={changeTrainingPlan}
              >Yearly</p>
            </div>
            <div className='plans-block-backgroundSpot'>
              <div className='plans-block-backgroundSpot-first'></div>
              <div className='plans-block-backgroundSpot-second'></div>
            </div>
            <div className='plans-block-price'>
              <div className='plans-block-price-basic'>
                <img src={basicPlanImg}></img>
                <h4>basic plan</h4>
                <h2>$ {basicPlan}</h2>
                  <div className='plans-block-price-basic-firstStroke'>
                    <div className='check'></div>
                    <div className='text'>2 hours of excercises</div>
                  </div>
                  <div className='plans-block-price-basic-secondStroke'>
                    <div className='check'></div>
                    <div className='text'>Free consulatation to coaches</div>
                  </div>
                  <div className='plans-block-price-basic-thirdStroke'>
                    <div className='check'></div>
                    <div className='text'>Access to The Community</div>
                  </div>
                  <div>
                  {trainingPlan === 'yearly' ? 
                    <div className='plans-block-price-basic-fourthStroke'>
                      <div className='check'></div>
                      <div className='text'>1 month free</div>
                    </div> : ''
                  }
                    <div>See more benefits</div>
                    <div></div>
                  </div>
                  
                  <button>Join now</button>
              </div>
              <div className='plans-block-price-premium'>
                <img src={premiumPlanImg}></img>
                <h4>premium plan</h4>
                <h2>$ {premiumPlan}</h2>
                  <div className='plans-block-price-premium-firstStroke'>
                    <div className='check'></div>
                    <div className='text'>5 hours of excercises</div>
                  </div>
                  <div className='plans-block-price-premium-secondStroke'>
                    <div className='check'></div>
                    <div className='text'>Free consulatation to coaches</div>
                  </div>
                  <div className='plans-block-price-premium-thirdStroke'>
                    <div className='check'></div>
                    <div className='text'>Access to minibar</div>
                  </div>
                  {trainingPlan === 'yearly' ? 
                    <div className='plans-block-price-premium-fourthStroke'>
                      <div className='check'></div>
                      <div className='text'>1 month free</div>
                    </div> : ''
                  }
                  <div>
                    <div>See more benefits</div>
                    <div></div>
                  </div>
                  <button>Join now</button>
              </div>
              <div className='plans-block-price-pro'>
                <img src={proPlanImg}></img>
                <h4>pro plan</h4>
                <h2>$ {proPlan}</h2>
                  <div className='plans-block-price-pro-firstStroke'>
                    <div className='check'></div>
                    <div className='text'>8 hours of excercises</div>
                  </div>
                  <div className='plans-block-price-pro-secondStroke'>
                    <div className='check'></div>
                    <div className='text'>Consulatation of private coach</div>
                  </div>
                  <div className='plans-block-price-pro-thirdStroke'>
                    <div className='check'></div>
                    <div className='text'>Free fitness merchandise</div>
                  </div>
                  {trainingPlan === 'yearly' ? 
                    <div className='plans-block-price-pro-fourthStroke'>
                      <div className='check'></div>
                      <div className='text'>1 month free</div>
                    </div> : ''
                  }
                  <div>
                    <div>See more benefits</div>
                    <div></div>
                  </div>
                  <button>Join now</button>
              </div>
            </div>
          </div>
        </Element>

        <Element name='section5'>
          <div>kjl</div>
        </Element>
        
        <Element name='section6'>
          <div>df</div>
        </Element>
      </div>
  );
}

export default App;
