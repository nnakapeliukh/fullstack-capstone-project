import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/LoginPage/RegisterPage';
import DetailsPage from './components/DetailsPage/DetailsPage';

function App() {

  return (
    <>
        <Navbar/>
        <Routes>
          {/* the final code will not pass the products to every page, but each page will call the server API */}
          <Route path="/app/login" element={<LoginPage />} />
          <Route path="/app/register" element={<RegisterPage />} /> 
          <Route path="/app/product/:productId" element={<DetailsPage/>} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/" element={<MainPage />} />

        </Routes>
        </>
  );
}

export default App;
