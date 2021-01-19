import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Tabs } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Work = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [works, setWorks] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/get-work`, {
        headers: {
          authtoken: user ? user.token : '',
        },
      })
      .then((res) => {
        setWorks(res.data);
      });
      // eslint-disable-next-line
  }, []);
  return (
    <div className='section-about'>
      <div className='section-about-1'>
        <Fade duration={2000} right>
          <span className='about-us'>MY WORK</span>
          <p className='who-am-i'>RECENT WORK</p>
        </Fade>
        <div>
          <Tabs defaultActiveKey='1' onChange={callback}>
            <TabPane className='website' tab='Websites' key='1'>
              {works &&
                works.length > 0 &&
                works
                  .filter((fil) => {
                    return fil.type === 'Website';
                  })
                  .map((w) => (
                    <div
                    key={w._id}

                      style={{ backgroundImage: `url(${w.image})` }}
                      className='website-work'
                    >
                      <a rel="noreferrer" href={w.link && w.link} target='_blank'>
                        <div className='website-work-fill web'>
                          {w.name && <span>{w.name}</span>}
                          {w.type && <span>{w.type}</span>}
                          {/*<a href={w.link && w.link} target='_blank'><i class="fas fa-link"></i></a>*/}
                        </div>
                      </a>
                    </div>
                  ))}
            </TabPane>
            <TabPane tab='Web designs' key='2'>
              {works &&
                works.length > 0 &&
                works.filter((fil) => {
                  return fil.type === 'Webdesign';
                }).length === 0 && <p>No works yet</p>}
              {works &&
                works.length > 0 &&
                works
                  .filter((fil) => {
                    return fil.type === 'Webdesign';
                  })
                  .map((w) => (
                    <div
                    key={w._id}
                      style={{ backgroundImage: `url(${w.image})` }}
                      className='website-work'
                    >
                      <div className='website-work-fill photo'>
                        {w.name && <span>{w.name}</span>}
                        {w.type && <span>{w.type}</span>}
                        {/*       <a href={w.link && w.link} target='_blank'><i class="fas fa-link"></i></a>*/}
                      </div>
                    </div>
                  ))}
            </TabPane>
            <TabPane className='website' tab='Photographs' key='3'>
              {works &&
                works.length > 0 &&
                works
                  .filter((fil) => {
                    return fil.type === 'Photograph';
                  })
                  .map((w) => (
                    <div
                    key={w._id}

                      style={{ backgroundImage: `url(${w.image})` }}
                      className='website-work'
                    >
                      <div className='website-work-fill photo'>
                        {w.name && <span>{w.name}</span>}
                        {w.type && <span>{w.type}</span>}
                        {/*       <a href={w.link && w.link} target='_blank'><i class="fas fa-link"></i></a>*/}
                      </div>
                    </div>
                  ))}
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Work;
