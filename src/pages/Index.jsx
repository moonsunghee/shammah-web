import React from 'react';
import SiteHeader from '../components/SiteHeader';
import Main from '../components/index/Main';
import Portfolio from '../components/index/Portfolio';
import Invoice from '../components/index/Invoice';
import Lesson from '../components/index/Lesson';
import SiteMap from '../components/SiteMap';
import SiteFooter from '../components/SiteFooter';
const Index =()=>{
  return(
    <>
      <SiteHeader/>
      <Main/>
      <Portfolio/>
      <Invoice/>
      <Lesson/>
      <SiteMap/>
      <SiteFooter/>
    </>
  );
}

export default Index;