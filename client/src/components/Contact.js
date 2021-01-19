import React,{useState} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import axios from 'axios'
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const Contact = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [subject,setSubject]=useState('')
  const [message,setMessage]=useState('')

  const {user}=useSelector((state)=>({...state}))

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name || !email ||!subject ||!message){
      toast.error('Fill all fields')
return;
    }
    axios
    .post(
      `${process.env.REACT_APP_API}/post-mess`,{name,email,subject,message},
      {
        headers: {
          authtoken: user ? user.token : '',
        },
      }
    ).then((res) => {
console.log(res.data); 
toast.success('Message sent!')
setName('')
setEmail('')
setSubject('')
setMessage('')
   })
    
  }
  return (
    <div className='section-about'>
      <div className='section-about-1'>
        <Fade duration={2000} right>
          <span className='about-us'>GET IN TOUCH</span>
          <p className='who-am-i'>CONTACT</p>
        </Fade>
        <Slide bottom>
        <div className='resp-grid'>
        <div className='contact-info'>
          <div className='contact'>
            <div className='contact-logo'>
              <i className='fas fa-at'></i>
            </div>
            <div className='contact-route'>
              <a rel="noreferrer" href='mailto:devsts14@gmail.com'>devsts14@gmail.com</a>
            </div>
          </div>

          <div className='contact'>
            <div className='contact-logo'>
              <i className='fas fa-phone'></i>
            </div>
            <div className='contact-route'>
              <a rel="noreferrer" href='tel:9916506682'>+91 9916506682</a>
            </div>
          </div>

          <div className='contact'>
            <div className='contact-logo'>
              <i className='fas fa-map-marked-alt'></i>{' '}
            </div>
            <div className='contact-route'>
              <a rel="noreferrer" href='https://goo.gl/maps/1zmXrHeqa51AAXsS9' target='_blank'>
                Virinchy residency ,Bangalore,India
              </a>
            </div>
          </div>
        </div>
        <div className='contact-form'>
          <form onSubmit={handleSubmit} className='form'>
            <input value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='Name' required />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='email' required />
            <input value={subject} onChange={(e)=>setSubject(e.target.value)} type='text' placeholder='subject' required />
            <textarea
              name=''
              id=''
              cols='30'
              rows='5'
              placeholder='Message'
              required
              value={message} onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
            <button type='submit' className='submit-btn'>
              Submit
            </button>
          </form>
        </div>
        </div>
        </Slide>
      </div>
      
    </div>
  );
};

export default Contact;
