import React, { FC } from 'react';
import SuccessStory from "../../components/SuccessStory";

const SuccessStoryContainer = () => {
  const items = [
    {
      mainImg: {
        desktop: './static/image/succeeStory/success_slide-1.png',
        mobile: './static/image/succeeStory/success_slide-1-m.png',
      },
      titleImg: './static/image/succeeStory/success_slide_title-1.png',
      text: [
        '광고수익률(ROAS)',
        '557%',
        '1,486%',
      ]
    },
    {
      mainImg: {
        desktop: './static/image/succeeStory/success_slide-2.png',
        mobile: './static/image/succeeStory/success_slide-2-m.png',
      },
      titleImg: './static/image/succeeStory/success_slide_title-2.png',
      text: [
        '광고수익률(ROAS)',
        '29%',
        '302%',
      ]
    },
    {
      mainImg: {
        desktop: './static/image/succeeStory/success_slide-3.png',
        mobile: './static/image/succeeStory/success_slide-3-m.png',
      },
      titleImg: './static/image/succeeStory/success_slide_title-3.png',
      text: [
        '광고수익률(ROAS)',
        '120%',
        '427%',
      ]
    },
    {
      mainImg: {
        desktop: './static/image/succeeStory/success_slide-4.png',
        mobile: './static/image/succeeStory/success_slide-4-m.png',
      },
      titleImg: './static/image/succeeStory/success_slide_title-4.png',
      text: [
        '광고수익률(ROAS)',
        '376%',
        '494%',
      ]
    },
    {
      mainImg: {
        desktop: './static/image/succeeStory/success_slide-5.png',
        mobile: './static/image/succeeStory/success_slide-5-m.png',
      },
      titleImg: './static/image/succeeStory/success_slide_title-5.png',
      text: [
        '광고수익률(ROAS)',
        '0.66%',
        '26.65%',
      ]
    },
  ]

  return(
    <SuccessStory items={items}/>
  )
}

export default SuccessStoryContainer