import React, {useState} from 'react';
import AppDesignPopup from './AppDesignPopup';

import pfThumb1 from 'assets/imgs/portfolio/shammah-pf01.jpg'
import pfThumb2 from 'assets/imgs/portfolio/shammah-pf02.jpg'
import pfThumb3 from 'assets/imgs/portfolio/shammah-pf03.jpg'
import pfThumb4 from 'assets/imgs/portfolio/shammah-pf04.jpg'
import pfThumb5 from 'assets/imgs/portfolio/shammah-pf05.jpg'
import pfThumb6 from 'assets/imgs/portfolio/shammah-pf06.jpg'

const Sp_Appdesign = () => {
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const togglePopup = (index) => {
    setOpenPopupIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const [appitem, setAppitem] = useState([
    {key:'pf1', path: pfThumb1, itemText:'첫 번째 이미지', popupContent:'1', popupBgPath: ''},
    {key:'pf2', path: pfThumb2, itemText:'두 번째 이미지', popupContent:'2', popupBgPath: ''},
    {key:'pf3', path: pfThumb3, itemText:'세 번째 이미지', popupContent:'3', popupBgPath: ''},
    {key:'pf4', path: pfThumb4, itemText:'네 번째 이미지', popupContent:'4', popupBgPath: ''},
    {key:'pf5', path: pfThumb5, itemText:'다섯 번째 이미지', popupContent:'5', popupBgPath: ''},
    {key:'pf6', path: pfThumb6, itemText:'여섯 번째 이미지', popupContent:'6', popupBgPath: ''}
  ]);

  return (
    <>
      {appitem.map((data, index)=>{
        return(
          <article className='appdesign' style={{backgroundImage:'url('+data.path+')'}}>
            {/* <p>{data.itemText}</p> */}
            {/* <img src={data.path}/> */}
            <AppDesignPopup 
              key={index}
              buttonText={data.itemText}
              popupContent={data.popupContent}
              isOpen={openPopupIndex === index}
              onToggle={() => togglePopup(index)}
              bgPath={data.popupBgPath}
            />
          </article>
        )
      })}
    </>
  )
}
export default Sp_Appdesign