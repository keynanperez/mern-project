import './App.css';
import { Container,Box } from '@mui/material';
import { Routes, Route, Link ,useNavigate} from 'react-router-dom';
import Homepage from './pages/Homepage';

import Movies from './pages/Movies';
import Subscriptions from './pages/Subscriptions';
import ManageUsers from './pages/ManageUsers';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState, useEffect } from 'react';


function App() {
  return (
    <Container>
    <Homepage/>
    </Container>
  );
}

export default App;
