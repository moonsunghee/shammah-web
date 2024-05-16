import logo from './logo.svg';
import React, { Suspense, useEffect, lazy } from 'react'
import {Routes, Route } from 'react-router-dom';
import './styles/common.scss'
//import './App.css';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Sitemap from 'components/Sitemap';
import Footer from 'components/Footer';

import Main from 'pages/Main';
import Portfolio from 'pages/Portfolio';


const App = () => {
  return (
    <>
      <Header/>
      {/* <Nav/> */}
      <Routes>
        <Route path='/' element={<Portfolio/>} />
      </Routes>
      <Sitemap/>
      <Footer/>
    </>
  );
}

export default App;
