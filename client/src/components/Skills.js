import React from 'react';
import Fade from 'react-reveal/Fade';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import Slide from 'react-reveal/Slide';

const Skills = () => {
  return (
    <div className='section-about'>
      <div className='section-about-1'>
        <Fade duration={2000} right>
          <span className='about-us'>MY SPECIALITY</span>
          <p className='who-am-i'>MY SKILLS</p>
        </Fade>
        <div className='skills'>
          <Slide left>
            <div className='skill'>
              <Progress strokeColor='#dd4b25' percent={80} status='active' />
              HTML
            </div>
          </Slide>

          <Slide right>
            <div className='skill'>
              <Progress strokeColor='#254bdd' percent={70} status='active' />
              CSS
            </div>
          </Slide>
          <Slide left>
            <div className='skill'>
              <Progress strokeColor='#efd81a' percent={80} status='active' />
              JAVASCRIPT
            </div>
          </Slide>
          <Slide right>
            <div className='skill'>
              <Progress strokeColor='#61dafb' percent={70} status='active' />
              REACT
            </div>
          </Slide>
          <Slide left>
            <div className='skill'>
              <Progress strokeColor='#419543' percent={70} status='active' />
              MONGO DB
            </div>
          </Slide>
          <Slide right>
            <div className='skill'>
              <Progress strokeColor='#313131' percent={50} status='active' />
              NODE JS
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Skills;
