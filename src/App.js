import logo from './logo.svg';
import React, { Suspense, useEffect, lazy } from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import './styles/common.scss'
//import './App.css';
import Main from './pages/page0_main/Main';
import Portfolio from './pages/page4_portfolio/Portfolio';


const PageMain = lazy(() => import('./pages/page0_main/Main'));
function App() {
  return (
    // <Router basename='/shammah'>
    //   <Routes>
    //     <Route path='/main' element={<PageMain />} />
    //   </Routes>
    // </Router>
    <Portfolio/>
  );
}

export default App;
