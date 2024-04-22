import React, { useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const MajorPortfolio = () => {
  const [pfImgList, setPfImgList] = useState([
    {
      key: 'pf1',
      path: '/imgs/portfolio/major-pf01.jpg',
      text: '첫 번째 이미지',
    },
    {
      key: 'pf2',
      path: '/imgs/portfolio/major-pf02.jpg',
      text: '두 번째 이미지',
    },
    {
      key: 'pf3',
      path: '/imgs/portfolio/major-pf03.jpg',
      text: '세 번째 이미지',
    },
    {
      key: 'pf4',
      path: '/imgs/portfolio/major-pf04.jpg',
      text: '네 번째 이미지',
    },
  ])
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: <SlArrowLeft />,
    nextArrow: <SlArrowRight />,
  }
  return (
    <div className='content majorPortfolio'>
      <section className='slider-container'>
        <Slider className='images' {...settings}>
          {pfImgList.map((data) => {
            return (
              //<img src={data.path} alt={data.text}/>
              <div className='imgwrap' key={data.key}>
                <div className='imgitem' style={{ backgroundImage:'url('+data.path+')' }}><span>{data.text}</span></div>
              </div>
            )
          })}
        </Slider>
      </section>
      <header>
        <h3>Major <b>PORTFOLIO</b></h3>
      </header>
      <footer>
        <p>성벽 역사가 오십이 일 만인 엘룰월 이십오일에 끝나매 우리의 모든 대적과 주위에 있는 이방 족속들이 이를 듣고 다 두려워하여 크게 낙담하였으니 <br />그들이 우리 하나님께서 이 역사를 이루신 것을 앎이니라 - 느헤미야 6 : 15~16</p>
      </footer>
    </div>
  )
}
export default MajorPortfolio