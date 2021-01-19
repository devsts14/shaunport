import React from 'react';
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
import Bounce from 'react-reveal/Bounce';

const AboutMe = () => {
  return (
    <div className='section-about'>
      <div className='section-about-1'>
        <Fade duration={2000} right>
          <span className='about-us'>ABOUT US</span>
          <p className='who-am-i'>WHO AM I?</p>
          <p className='about-me-info'>
            <strong>Hi I'm Shaun Dsouza.</strong> I am a Full stack web
            developer based in Bangalore India. I use MERN
            (MongoDb,ExpressJs,ReactJs,NodeJs) as my tech stack.I have over 1
            year of experience building websites.I have a bachelors degree in
            Electrical and electronics engineering.I am very passionate about
            Web Development, and strive to better myself as a developer, and the
            development community as a whole.
          </p>
        </Fade>
        <Bounce left delay={1000} duration={2000}>
          <div className='parallax-counter'>
            <div className='parallax-cc'>
              <CountUp
                className='count'
                delay={3}
                style={{ color: 'white' }}
                start={0}
                duration={5}
                end={100}
              />
              <span>CUPS OF COFFEE</span>
            </div>
            <div className='parallax-cc'>
              <CountUp
                className='count'
                delay={3}
                style={{ color: 'white' }}
                start={0}
                duration={5}
                end={3}
              />
              <span>PROJECTS</span>
            </div>
            <div className='parallax-cc'>
              <CountUp
                className='count'
                delay={3}
                style={{ color: 'white' }}
                start={0}
                duration={5}
                end={0}
              />
              <span>CLIENTS</span>
            </div>
          </div>
        </Bounce>
        <div className='pro'>
          <Fade duration={1500} right>
            <div className='pro-1 proit'>
              <div className='hexagon'>
                <i className='fas fa-tachometer-alt'></i>
              </div>
              <span>Fast</span>
            </div>
          </Fade>
          <Fade duration={1500} left>
            <div className='pro-2 proit'>
              <div className='hexagon'>
                <i className='far fa-lightbulb'></i>
              </div>
              <span>Intuitive</span>
            </div>
          </Fade>
          <Fade duration={1500} top>
            <div className='pro-3 proit'>
              <div className='hexagon'>
                <i className='fas fa-laptop'></i>
              </div>
              <span>Responsive</span>
            </div>
          </Fade>
          <Fade duration={1500} bottom>
            <div className='pro-4 proit'>
              <div className='hexagon'>
                <i className='fas fa-rocket'></i>
              </div>
              <span>Dynamic</span>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
