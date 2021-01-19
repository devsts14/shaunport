import React, {  useState,useEffect } from 'react';
import { auth } from '../../firebase';
import { toast} from 'react-toastify';
import {useSelector} from 'react-redux'

const ForgotPassword = ({history}) => {
  // states
  const [email, setEmail] = useState('');

  // redux
  const {user} =useSelector((state)=>({...state}))

  // mounts
  useEffect(() =>{
    if(user && user.token){
      history.push('/')
    }
    // eslint-disable-next-line
  },[user])

  // change in form
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // submit form
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const config = {
        url: process.env.REACT_APP_REGISTER_FORGOT_PASSWORD_REDIRECT_URL,
        handleCodeInApp: true,
      };
     const result= await auth.sendPasswordResetEmail(email,config)
      setEmail('')
      console.log(result)
      toast.success('Check your email for password reset link')
    } catch (error) {
      
      toast.error(error.message)
    }
  }


  return <div className='register-form'>
      <h1>Forgot password</h1>

      <form onSubmit={handleSubmit}>
        <div className='email-input'>
          <i className='far fa-envelope'></i>
          <input
            type='email'
            placeholder='email'
            autoFocus
            required
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type='submit' className='submit-btn' disabled={!email}>
          Send
        </button>
      </form>
    </div>
 
}

export default ForgotPassword
