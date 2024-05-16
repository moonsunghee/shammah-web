import React from 'react';
import 'styles/portfolio.scss'
import AboutShammah from 'components/portfolio/AboutShammah';
import MajorPortfolio from 'components/portfolio/MajorPortfolio';
import ShammahPortfolio from 'components/portfolio/ShammahPortfolio';
const Portfolio = () => {
  return (
    <>
      <AboutShammah />
      <MajorPortfolio />
      <ShammahPortfolio />
    </>
  )
}
export default Portfolio