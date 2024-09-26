import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/footer.scss';
const SiteFooter =()=>{
  return(
    <div class="ftr-wrap">
      <footer>
        <h1 class="symbol logo">
          <Link to={'/'} className='logo'><img src="images/symbol_w.svg" alt="" /></Link>
          <Link to={'/'} className='logo'><b>SHAM</b><i>MAH</i></Link>
        </h1>
      </footer>
    </div>
  );
}

export default SiteFooter;