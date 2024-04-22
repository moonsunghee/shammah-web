import React, {useState} from 'react';
const ShammahPortfolio = () => {
  const [pfImgList, setPfImgList] = useState([
    {key:'pf1', path:'/imgs/portfolio/shammah-pf01.jpg', text:'첫 번째 이미지'},
    {key:'pf2', path:'/imgs/portfolio/shammah-pf02.jpg', text:'두 번째 이미지'},
    {key:'pf3', path:'/imgs/portfolio/shammah-pf03.jpg', text:'세 번째 이미지'},
    {key:'pf4', path:'/imgs/portfolio/shammah-pf04.jpg', text:'네 번째 이미지'},
    {key:'pf5', path:'/imgs/portfolio/shammah-pf05.jpg', text:'다섯 번째 이미지'},
    {key:'pf6', path:'/imgs/portfolio/shammah-pf06.jpg', text:'여섯 번째 이미지'}
  ]);
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
            <ul>
              <li>웹디자인</li>
              <li className='active'>앱디자인</li>
              <li>웹/앱 개발</li>
              <li>유인물 디자인</li>
            </ul>
          </article>
        </div>
        <div className='artgroup'>
          {pfImgList.map((data)=>{
            return(
              <article style={{backgroundImage:'url('+data.path+')'}}></article>
            )
          })}
          
        </div>
      </section>
      <footer>
        <p>성벽 역사가 오십이 일 만인 엘룰월 이십오일에 끝나매 우리의 모든 대적과 주위에 있는 이방 족속들이 이를 듣고 다 두려워하여 크게 낙담하였으니 <br />그들이 우리 하나님께서 이 역사를 이루신 것을 앎이니라 - 느헤미야 6 : 15~16</p>
      </footer>
    </div>
  )
}
export default ShammahPortfolio