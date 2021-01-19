import React from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className='section2'>
      <Fade>
        <div id='section11' className='section21'>
          <p className='info'>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString("<span>Hi</span> </br> <span>I'm Shaun</span>")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString(
                    "<span>I'm a</span> </br> <span>FullStack</span> </br><span> Web Developer!</span>"
                  )
                  .pauseFor(2500)
                  .start();
              }}
            />

            {/*  <button className='download'>
              <i className='fas fa-long-arrow-alt-down'></i> Download CV{' '}
          </button>*/}
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default About;
