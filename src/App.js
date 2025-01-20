import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout';
import Overview from './components/Overview/Overview';
import Home from './components/Home/Home';
import Cars from './components/Cars/Cars';
import Orders from './components/Orders/Orders';
import Profile from './components/Profile/Profile';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
