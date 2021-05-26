import React from 'react'
import KnowHow from 'components/KnowHow'

const demo: {
  id: string
  url: string
  href: string
  content: string
}[] = [
  {
    id: '1',
    url: './static/image/knowHow/11-1.jpg',
    href: 'https://brunch.co.kr/@lever/3',
    content: '소규모 예산으로 퍼포먼스 마케팅,\n 어떻게 시작해야 할까',
  },
  {
    id: '2',
    url: './static/image/knowHow/12-1.jpg',
    href: 'https://brunch.co.kr/@lever/4',
    content: '내 제품의 검색광고 성과분석 \n 참고해야할 3가지 기준',
  },
  {
    id: '3',
    url: './static/image/knowHow/9-1.jpg',
    href: 'https://brunch.co.kr/@lever/5',
    content: '중소기업 마케터가 알아야 할 \n 디지털 마케팅 통계 49가지',
  },
]

const KnowHowContainer = () => {
  return <KnowHow demo={demo} />
}

export default KnowHowContainer
