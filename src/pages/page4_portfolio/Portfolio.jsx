import React from   'react';
import Header from  '../../components/header/Header';
import Nav from     '../../components/nav/Nav';
import Sitemap from '../../components/sitemap/Sitemap';
import Footer from  '../../components/footer/Footer';
import AboutShammah from './AboutShammah';
import '../../styles/portfolio.scss'
import MajorPortfolio from './MajorPortfolio';
import ShammahPortfolio from './ShammahPortfolio';
const Portfolio = () => {
    return(
        <>
            <Header/>
            {/* <Nav/> */}
            <AboutShammah/>
            <MajorPortfolio/>
            <ShammahPortfolio/>
            <Sitemap/>
            <Footer/>
        </>
    )
}
export default Portfolio