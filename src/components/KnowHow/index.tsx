import React, { ReactElement, useState } from 'react'
import styled from "styled-components"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h3 style={{backgroundColor: 'green'}}>1</h3>
      </div>
      <div >
        <h3 style={{backgroundColor: 'orange'}}>2</h3>
      </div>
      <div >
        <h3 style={{backgroundColor: 'green'}}>3</h3>
      </div>
      <div >
        <h3 style={{backgroundColor: 'orange'}}>4</h3>
      </div>
      <div >
        <h3 style={{backgroundColor: 'green'}}>5</h3>
      </div>
      <div >
        <h3 style={{backgroundColor: 'orange'}}>6</h3>
      </div>
    </Slider>
  );
}
const KnowHowSection = styled.div`
  & .slick-prev:before, 
  & .slick-next:before {
    color: var(--cornflower)
  }
  & .slick-dots {
     z-index: 1;
  }
`
const KnowHow = () => {
  return (
    <KnowHowSection>

      <div style={{width: '80%', margin: '0 auto'}}>
        <SimpleSlider />
      </div>
    </KnowHowSection>
  )
}

export default KnowHow