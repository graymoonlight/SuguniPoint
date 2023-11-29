import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, loginUser } from '../../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';

function Main() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isAuth = useSelector(checkIsAuth)
  const {status} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(status){
      toast(status)
    }
    if(isAuth) {
      navigate('/')
    }
  }, [status, isAuth, navigate])

  const handleSubmit = async () => {
    try {
      await dispatch(loginUser({ username, password }));
    } catch (err) {
      console.error(err);
    }
  };

    return (
      <form className='main-log' onSubmit={e => e.preventDefault()}>
        <h2 className='auth-title'>AUTHORIZATION</h2>
        <label>
          Username:
          <input type='text' className='nice-input' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </label>

        <label>
          Password:
          <input type='text' className='nice-input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <div className='btn-log'>
          <button onClick={handleSubmit}>LOG IN</button>
        </div>
      </form>
    );
}
  
export default Main;