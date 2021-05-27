import React from 'react'
import Mission from 'components/Mission'
import styled from 'styled-components'
import { cssBreakPoint } from 'styles/constant'
import useScrollFadeIn from 'hooks/useScrollFadeIn'

const LeftContent = styled.div`
  padding-left: 1.5rem;
  text-align: left;
  color: var(--white);
  height: fit-content;

  h1 {
    font-family: Roboto;
    font-size: 55px;
    font-weight: bold;
  }
  p {
    font-family: NotoSansKR;
    font-size: 16px;
    letter-spacing: -0.8px;
  }
`
const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6rem;
  width: 50%;
  height: fit-content;

  font-size: 16px;
  letter-spacing: -0.8px;
  font-family: NotoSansKR;
  line-height: 1.3;
  color: var(--white);

  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }

  @media (max-width: ${cssBreakPoint.tablet}) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
  @media (max-width: ${cssBreakPoint.mobileMd}) {
    width: 100%;
    padding-top: 0;
    margin-left: 20px;
  }
`

const Content = styled.ul`
  margin-bottom: 30px;
  font-size: 16px;
  letter-spacing: -0.8px;
  list-style: none;

  &.strong {
    font-weight: bold;
    letter-spacing: -0.9px;
    font-size: 18px;
  }
  &.color-pupple {
    color: #cdd1ff;
  }
`

const LinkButton = styled.a`
  width: 295px;
  padding: 26px 0;
  border-radius: 5px;
  font-size: 17px;
  font-family: NotoSansKR;
  text-decoration: none;
  text-align: center;
  color: var(--white);
  background-color: var(--cornflower);
`

const data = [
  {
    isMobile: false,
    isStrong: false,
    texts: [
      '모두가 디지털 마케팅이 중요하다고 얘기합니다.',
      '하지만 하루가 갈수록 복잡해지는 이 시장에서',
      '실시간으로 형태를 바꾸는 정답을 찾아내기란',
      '광고 담당자들에게도 결코 쉬운 일이 아닙니다.',
    ],
  },
  {
    isMobile: false,
    isStrong: false,
    texts: [
      'No.1 애드테크 기업인 매드업은',
      '야놀자, 직방, 마켓컬리와 같은 스타트업들을 초기부터 성장시킨',
      '전문적인 마케팅 경험과 데이터를 바탕으로 이 솔루션을 만들었습니다.',
    ],
  },
  {
    isMobile: false,
    isStrong: true,
    texts: [
      '바른 기술은 모두가 쉽고 평등하게 사용할 수 있어야 한다는 철학 아래,',
      '어떤 브랜드라도 언제나 최고의 효율을 낼 수 있도록.',
      '그리하여 적어도 막막한 디지털 마케팅 때문에',
      '이제 막 시작하는 꿈을 포기하는 일은 없도록.',
    ],
  },
  {
    isMobile: true,
    isStrong: true,
    texts: ['from. Lever'],
  },
  {
    isMobile: true,
    isStrong: false,
    texts: [
      '바른 기술은 모두가 쉽고 평등하게',
      '사용할 수 있어야 한다는 철학 아래',
      '레버는 만들어졌습니다.',
    ],
  },
  {
    isMobile: false,
    isStrong: true,
    texts: [
      '레버는 잘 알고 있습니다.',
      '이 세상 모든 브랜드들은 결코 시작부터 창대하지 않았다는 것을.',
      '기회 만큼이나 함정도 많은 이 디지털 마케팅의 풍랑 속에서',
      '당신의 소중한 브랜드를 함께 키워가겠습니다.',
    ],
  },
  {
    isMobile: true,
    isStrong: false,
    texts: [
      '큰 기업이 아니더라도,',
      '큰 비용이 아니더라도,',
      '광고에 대해 잘 알지 못하더라도',
      '언제나 최고의 효율을 낼 수 있도록.',
    ],
  },
  {
    isMobile: false,
    isStrong: false,
    texts: [
      '세상에 없던 브랜드를 시작하는 것은 당신의 일이지만,',
      '그 브랜드를 성공 시키는 것은 레버의 일입니다.',
      '시작하는 브랜드는 성장하는 브랜드로,',
      '성장하는 브랜드는 성공하는 브랜드로.',
    ],
  },
  {
    isMobile: true,
    isStrong: false,
    texts: [
      '세상에 없던 브랜드를 시작하는 것은',
      '당신의 일이지만,',
      '그 브랜드를 오늘보다 성장시키는 것은',
      '레버의 일 입니다.',
    ],
  },
]

const MissionContainer = () => {
  const latency = 0.2
  const animations = [
    useScrollFadeIn('up', 1, 0),
    useScrollFadeIn('up', 1, 0 + latency * (data.length + 1)),
  ]
  return (
    <Mission>
      <LeftContent {...animations[0]}>
        <h1>MISSION</h1>
        <p>레버가 고객들께 전하고 싶은 이야기</p>
      </LeftContent>
      <RightContent>
        {data.map((data, index) => {
          const { isMobile, isStrong, texts } = data
          const className = `content ${isMobile ? 'mobile' : 'desktop'} ${isStrong && 'strong'}`
          const animation = useScrollFadeIn('up', 1, 0 + latency * index)

          return (
            <div {...animation} key={index}>
              <Content className={className}>
                {texts.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </Content>
            </div>
          )
        })}
        <div {...animations[1]}>
          <Content className="content color-pupple">
            <li>디지털 마케팅 자동화 솔루션</li>
            <li> 레버</li>
          </Content>
        </div>

        <LinkButton className="lever-login" href="https://biz.lever.me/">
          무료로 자동화 체험하기
        </LinkButton>
      </RightContent>
    </Mission>
  )
}

export default MissionContainer
