import React from 'react';

import Main from '../components/index/Main';
import Portfolio from '../components/index/Portfolio';
import Invoice from '../components/index/Invoice';
import Lesson from '../components/index/Lesson';

const Index =()=>{
  return(
    <>
      <Main/>
      <Portfolio/>
      <Invoice/>
      <Lesson/>
    </>
  );
}

export default Index;