import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, checkIsAuth } from '../../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';

function Main() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const {status} = useSelector(state => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      toast(status)
    }
    if (isAuth) {
      navigate('/')
    }
  }, [status, isAuth, navigate])

  const handleSubmit = async () => {
    try {
      await dispatch(registerUser({ username, password, email }));
      setPassword('');
      setUsername('');
      setEmail('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='main-reg'>
      <h2 className='auth-title'>REGISTRATION </h2>
      <label>
        <input type='text' className='nice-input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>
        <input type='text' placeholder='Username' className='nice-input' value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label>
        <input type='password' placeholder='Password' className='nice-input' value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      <div className='btn-reg'>
        <button type='button' onClick={handleSubmit}>
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default Main;
