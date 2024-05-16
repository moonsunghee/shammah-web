import React, {useState} from 'react';
import { FaCircleXmark } from "react-icons/fa6";
const AppDesignPopup = ({buttonText, popupContent, isOpen, onToggle, bgPath}) => {
  return(
    <>
      <button className='popupBtn' onClick={onToggle}></button>
      {isOpen && (
        <div className="popup" onClick={onToggle}>
          <div className="popup-inner" style={{
          backgroundColor:'#Fff', 
          backgroundImage:'url('+bgPath+')'
        }}>
            <button><FaCircleXmark /></button>
          </div>
        </div>
      )}
    </>
  )
}
export default AppDesignPopup