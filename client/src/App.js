import React, { useEffect } from 'react';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { me } from './redux/features/auth/authSlice'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me())
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <ToastContainer position='bottom-right'/>
    </Router>
  );
}

export default App;
