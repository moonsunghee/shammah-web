import React, { useState } from 'react';

import edImg1 from 'assets/imgs/portfolio/shammah-edu1.jpg';
import edImg2 from 'assets/imgs/portfolio/shammah-edu2.jpg';
import edImg3 from 'assets/imgs/portfolio/shammah-edu3.jpg';

const Sp_Lesson = () => {
  const [lessonList, setLessonList] = useState([
    {key:'', title:'', listTitle:''}
  ])
  return (
    <>
      <article className='uxuilesson' style={{backgroundImage:'url('+edImg1+')'}}>
        <h3>UXUI Lesson</h3>
        <ul>
          <li>
            <h4>웹/앱 기획</h4>
            <p>
              PPT문서제작 도구와 Figma를 활용하여 제작될 웹사이트 또는 모바일 어플리케이션의 기획과 화면설계를 하는 과정을 교육합니다.
            </p>
          </li>
          <li>
            <h4>Figma 기초</h4>
            <p>
              스타일과 레이아웃, 컴포넌트의 활용, 베리언트의 활용, 프로토타입의 활용등 Figma의 기본적인 기능의 사용방법을 학습합니다.
            </p>
          </li>
          <li>
            <h4>디자인 시스템 제작</h4>
            <p>
              Figma를 활용하여 디자인시스템을 구축해봅니다. 테이블링 앱서비스의 컴포넌트를 제작하는 프로젝트를 진행해 보며 디자인 시스템의 구조를 이해할 수 있습니다.
            </p>
          </li>
        </ul>
      </article>
      <article className='uxuilesson' style={{backgroundImage:'url('+edImg2+')'}}>
        <h3>HTML / CSS / Script Lesson</h3>
        <ul>
          <li>
            <h4>HTML/CSS/SCSS</h4>
            <p>
              html을 활용하여 DOM(문서구조, 문서객체모델)구조를 명확히 하는 방법과 CSS,SCSS를 적용하여 문서구조에 효과적인 스타일링을 하는 방법을 학습니다.
              <br/>명확한 문서구조는 후임개발자 또는 후속개발시 쉽고 빠르게 코드의 내용을 전달할수 있습니다. 
            </p>
          </li>
          <li>
            <h4>javaScript+jQuery</h4>
            <p>
              jQuery는 JavaScrpit를 학습하기 위한 좋은 라이브러리가 됩니다. jQuery와 JavaScript를 함께 학습하며 동적인 웹사이트 운영방법에 대해 학습니다.
            </p>
          </li>
          <li>
            <h4>javaScript+React</h4>
            <p>
              프론트엔드개발의 대표언어중 하나인 React는 웹사이트를 보다 효과적으로 구축할수 있게 합니다.
            </p>
          </li>
        </ul>
      </article>
      <article className='uxuilesson' style={{backgroundImage:'url('+edImg3+')'}}>
        <h3>파이썬 Lesson</h3>
        <ul>
          <li>
            <h4>파이썬 교육이나 훈련은 준비중입니다.</h4>
          </li>
        </ul>
      </article>
    </>
  )
}
export default Sp_Lesson