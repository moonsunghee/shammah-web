import React, {useState} from 'react';

import SpAppDesign from './smPortfolio/Sp_Appdesign';
import SpUxUiLesson from './smPortfolio/Sp_Lesson';


const AppWebDev = () => {
  return(
    <article className='appdev'><h3>App & Web Development</h3></article>
  )
}
const PrintDesign = () => {
  return(
    <article className='prtdesign'><h3>Print Design</h3></article>
  )
}
const ShammahPortfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const togglePopup = (index) => {
    setOpenPopupIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
  return (
    <div className='content shammahPortfolio'>
      <header>
        <h3><b>SHAMMAH</b> Portfolio</h3>
        <p>항목에서 포트폴리오 형태를 선택하여 다양한 디자인을 확인할 수 있습니다.</p>
      </header>
      <section>
        <div className='artheader'>
          <div className='art-box'></div>
          <article>
            <ul className='tabMenu'>
              <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>앱/웹 기획 및 디자인</li>
              <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>디자인 레슨 / 코딩 교육</li>
              <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>웹/앱 개발</li>
              <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>유인물 디자인</li>
            </ul>
          </article>
        </div>
        <div className='artcontents'>
          {activeTab === 0 && <SpAppDesign/>}
          {activeTab === 1 && <SpUxUiLesson />}
          {activeTab === 2 && <AppWebDev/>}
          {activeTab === 3 && <PrintDesign/>}
        </div>
      </section>
      <footer>
        <p>성벽 역사가 오십이 일 만인 엘룰월 이십오일에 끝나매 우리의 모든 대적과 주위에 있는 이방 족속들이 이를 듣고 다 두려워하여 크게 낙담하였으니 <br />그들이 우리 하나님께서 이 역사를 이루신 것을 앎이니라 - 느헤미야 6 : 15~16</p>
      </footer>
    </div>
  )
}
export default ShammahPortfolio