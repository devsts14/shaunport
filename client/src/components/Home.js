import React, { useEffect, useState } from 'react';
import propic from '../images/propic.png';
import {Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => ({ ...state }));
  const [checked, setChecked] = useState(false);
  const [width, setWidth] = useState(0);

  const handleCheckChange = (e) => {
    setChecked(!checked);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  window.addEventListener('resize', function () {
    return setWidth(window.innerWidth);
  });

  const checkkit = () => {
    if (checked && width < 850) {
      return 'toggle toggleit';
    } else if (!checked && width < 850) {
      return 'toggle';
    }
  };

  const checkkitSec = () => {
    if (checked && width < 850) {
      return { animation: 'sidenavIncrease 0.3s linear forwards' };
    } else if (!checked && width < 850) {
      return { animation: 'sidenavDecrease 0.3s linear forwards' };
    }
  };
  const checkkitTer = () => {
    if (width < 850) {
      return { gridTemplateColumns: 'min-content 100%' };
    }
    // else if(!checked && width <850){
    //  return {animation:'sidenavDecrease 0.3s linear forwards'}

    // }
  };

  return (
    <div style={checkkitTer()} className='section'>
      <div style={checkkitSec()} className='side-nav'>
        <div>
          <div className='profile-main'>
            <img className='profilepic' src={propic} alt='' />
            <span className='profilename'>Shaun Vivian Dsouza</span>
            <span className='role'>Full stack Web Developer</span>
          </div>
          <div className='nav'>
            <span
              onClick={() => setChecked(false)}
              className={
                location.pathname === '/' ? 'active inactive' : 'inactive'
              }
            >
              <Link to='/'>HOME</Link>
            </span>
            <span
              onClick={() => setChecked(false)}
              className={
                location.pathname === '/about' ? 'active inactive' : 'inactive'
              }
            >
              <Link to='/about'>ABOUT</Link>
            </span>
            <span
              onClick={() => setChecked(false)}
              className={
                location.pathname === '/skills' ? 'active inactive' : 'inactive'
              }
            >
              <Link to='/skills'>SKILLS</Link>
            </span>
            <span
              onClick={() => setChecked(false)}
              className={
                location.pathname === '/work' ? 'active inactive' : 'inactive'
              }
            >
              <Link to='/work'>WORK</Link>
            </span>
            <span
              onClick={() => setChecked(false)}
              className={
                location.pathname === '/contact'
                  ? 'active inactive'
                  : 'inactive'
              }
            >
              <Link to='/contact'>CONTACT</Link>
            </span>
            {user && user.role === 'admin' && (
              <span
                onClick={() => setChecked(false)}
                className={
                  location.pathname === '/admin/dashboard'
                    ? 'active inactive'
                    : 'inactive'
                }
              >
                <Link to='/admin/dashboard'>ADMIN DASHBOARD</Link>
              </span>
            )}
          </div>
        </div>
        <div className='nav-footer'>
          <div className='social-media-links'>
            <a
            rel="noreferrer"
              style={{ color: '#c32aa3' }}
              href='https://www.instagram.com/shaun.v.dsz/'
              target='_blank'
            >
              <i className='fab fa-instagram'></i>
            </a>
            <a style={{ color: '#0a66c2' }} rel="noreferrer" href='https://www.linkedin.com/in/shaun-vivian-dsouza-64a5bb203/' target='_blank'>
              <i className='fab fa-linkedin-in'></i>
            </a>
            <a style={{ color: '#1da1f2' }} rel="noreferrer" href='https://twitter.com/Shaunvividsz' target='_blank'>
              <i className='fab fa-twitter'></i>
            </a>
          </div>
          <span style={{ fontSize: '0.8rem' }}>
            © Copyright ©2021 Created By{' '}
            <span style={{ color: '#2c98f0' }}> Devsts14</span>
          </span>
        </div>
      </div>
      <div className='main'>
        <div className='check'>
          <label className={checkkit()} htmlFor='tog'>
            <i>
              <input
                style={{ visibility: 'hidden' }}
                id='tog'
                name='tog'
                className='toggle'
                type='checkbox'
                onChange={handleCheckChange}
              />
            </i>
          </label>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Home;
