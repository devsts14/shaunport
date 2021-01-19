import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Resizer from 'react-image-file-resizer';
import axios from 'axios';
import { Avatar, Badge } from 'antd';
import { toast } from 'react-toastify';
import loader from '../images/loader.gif';

const AdminDashboard = () => {
  // redux state
  const { user } = useSelector((state) => ({ ...state }));
  const [type, setType] = useState('Website');
  const [name, setName] = useState('');
  const [values, setValues] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState('');
  let dispatch = useDispatch();
  let history = useHistory();
  // logout
  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    history.push('/adminlogin');
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleImageRemove = (public_id) => {
    axios
      .post(
        `${process.env.REACT_APP_API}/removeimage`,
        { public_id },
        {
          headers: {
            authtoken: user ? user.token : '',
          },
        }
      )
      .then((res) => {
        setImage('');
        const { images } = values;
        let filteredImages = images.filter((item) => {
          return item.public_id !== public_id;
        });
        setValues({ ...values, images: filteredImages });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fileUploadAndResize = (e) => {
    let files = e.target.files;
    setLoading(true);
    let allUploadedFiles = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          'JPEG',
          100,
          0,
          (uri) => {
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimages`,
                { image: uri },
                {
                  headers: {
                    authtoken: user ? user.token : '',
                  },
                }
              )
              .then((res) => {
                console.log(res);
                allUploadedFiles.push(res.data);
                setValues({ ...values, images: allUploadedFiles });
                setImage(res.data.url);
                setLoading(false);
              })
              .catch((err) => {
                console.log(err);
                setLoading(false);
              });
          },
          'base64',
          720,
          720
        );
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, type, image);
    if (!name || !type || !image) {
      toast.error('Fill all fields');
      return;
    }
    axios
      .post(
        `${process.env.REACT_APP_API}/create-work`,
        { name, type, image, link },
        {
          headers: {
            authtoken: user ? user.token : '',
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setImage('');
        setName('');
        setType('');
        setLink('');
        setValues([]);
      });
  };

  return (
    <div className='section-about'>
      <div className='section-about-1'>
        <Fade duration={2000} right>
          <span className='about-us logout'>
            ADMIN DASHBOARD{' '}
            <span className='logout-btn' onClick={logout}>
              Logout
            </span>
          </span>
        </Fade>
        {values.images &&
          values.images.map((im) => (
            <span
              style={{
                marginRight: '2rem',
                marginTop: '3rem',
                display: 'block',
                textAlign: 'center',
              }}
              key={im.public_id}
            >
              <Badge
                style={{ cursor: 'pointer' }}
                count='x'
                onClick={() => handleImageRemove(im.public_id)}
              >
                <Avatar shape='square' src={im.url} size={150} />
              </Badge>
            </span>
          ))}
        {loading && (
          <span
            style={{
              marginRight: '2rem',
              marginTop: '3rem',
              display: 'block',
              textAlign: 'center',
            }}
          >
            {' '}
            <img
              style={{ height: '150px', width: '150px' }}
              src={loader}
              alt=''
            />
          </span>
        )}

        <div>
          <form className='work-form' onSubmit={handleSubmit}>
            <label style={{ marginBottom: '2rem' }} className='choose-file'>
              Choose file
              <input
                hidden
                type='file'
                accept='images/*'
                onChange={fileUploadAndResize}
              />
            </label>
            <select value={type} onChange={handleTypeChange}>
              <option value='Website'>Website</option>
              <option value='Webdesign'>Webdesign</option>
              <option value='Photograph'>Photograph</option>
            </select>
            <input
              type='text'
              placeholder='Work Name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={link}
              type='text'
              placeholder='Website link if available'
              onChange={(e) => setLink(e.target.value)}
            />

            <input className='submit-btn' type='submit' value='submit' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
