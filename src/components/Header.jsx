import React from "react";
const Header = ({h3, h6, p})=>{
  return(
    <header>
      {h3 && <h3><b>SHAMMAH</b>&nbsp;<i>{h3}</i></h3>}
      {h6 && <h6>{h6}</h6>}
      {p && <p>{p}</p>}
    </header>
  );
}

export default Header;