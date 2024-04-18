import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <div className='sd-header'>
            <header>
                <h1 className='logo'><b>SHAM</b>MAH</h1>
                <nav className='gnb'>
                    <h2>삼마디자인</h2>
                    <h2>회사소개</h2>
                    <h2>제작안내</h2>
                    <h2>디자이너</h2>
                    <h2>포트폴리오</h2>
                    <h2>고객지원</h2>                    
                </nav>
                <div className='loginbox'>LOGIN</div>
            </header>
        </div>
    )
}
export default Header