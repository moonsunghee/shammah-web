import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/siteHeader.scss';
const SiteHeader =()=>{
  return(
    <div className="hdr-wrap">
      <header>
        <h1 className='logo'><Link to={'/'} className='logo'><b>SHAM</b><i>MAH</i></Link></h1>
        
        {/* <ul className="nav">
          <li><Link to={'/Sub1'}>Sub1</Link></li>
          <li><Link to={'/Sub2'}>Sub2</Link></li>
          <li><Link to={'/Sub3'}>Sub3</Link></li>
          <li><Link to={'/Sub4'}>Sub4</Link></li>
        </ul> */}

        <div className="btn">
          <button />
        </div>
      </header>
    </div>
  );
}

export default SiteHeader;