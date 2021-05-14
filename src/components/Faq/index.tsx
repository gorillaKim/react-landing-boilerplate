import React, { ReactElement, useState } from 'react'
import styled from "styled-components"
import { Container } from '../Styled/Layout';
import { activeStateProps } from "../../types/IntroduceType";
import IntroduceTitle from "../Introduce/IntroduceTitle";
import IntroduceBtnGroup from "../Introduce/IntroduceBtnGroup";
import IntroItem1 from "../Introduce/IntroItem1";
import IntroItem2 from "../Introduce/IntroItem2";
import IntroItem3 from "../Introduce/IntroItem3";

const FaqSection = styled.div``
const FaqContainer = styled(Container)`
  display: flex;
  padding-top: 10rem;
  padding-bottom: 10rem;
  justify-content: space-between;
`
const InnerLeft = styled.div`

`
const InnerRight = styled.div`

`
const Faq = (): ReactElement => {
  const [active,setActive] = useState<activeStateProps>({
    'first': true,
    'second': false,
    'third': false,
  })
  return (
    <FaqSection id="faq" class="layout">
      <FaqContainer class="container layout">
        <InnerLeft class="inner_left">
          <p>Digital Marketing Solution LEVER</p>
          <h1>자주하는 질문</h1>
          <p>레버에 자주 질문하시는 내용을 확인해보세요.</p>
        </InnerLeft>
        <InnerRight class="inner_right">
          <div onclick="openDetail(1)">
            <div class="list">
              <div class="title">
                <span class="number">Q1</span>
                <span>레버를 이용하려면 어떻게 해야 하나요?</span>
              </div>
              <div class="detail-btn1">
                <img src="static/image/faq/Slice%2024.svg" alt="아래 화살표 아이콘"/>
              </div>
            </div>
            <div class="detail detail1">
              <p>
                회원가입을 하시면 담당자가 관련 정보를 확인하고 안내 메일을 전달 드립니다.<br/>
              </p>
              <p>
                <a href="https://biz.lever.me/signup" class="lever-signup">회원가입 하러가기</a>
              </p>
            </div>
          </div>
          <div onclick="openDetail(2)">
            <div class="list">
              <div class="title">
                <span class="number">Q2</span>
                <span>가입 후에 바로 진행이 가능한가요?</span>
              </div>
              <div class="detail-btn2">
                <img src="static/image/faq/Slice%2024.svg" alt="아래 화살표 아이콘"/>
              </div>
            </div>
            <div class="detail detail2">
              <p>광고비 결제카드 등록 및 광고매체 계정 연동 후 진행이 가능합니다.
                소재가 준비된 경우는 즉시 진행이 가능하나, 그렇지 않다면 소재 기획&제작에 따른 추가 시간이 소요될 수 있습니다.
              </p>
            </div>
          </div>
          <div onclick="openDetail(3)">
            <div class="list">
              <div class="title">
                <span class="number">Q3</span>
                <span>업종, 업태, 플랫폼 등 이용 조건이 있나요?</span>
              </div>
              <div class="detail-btn3">
                <img src="static/image/faq/Slice%2024.svg" alt="아래 화살표 아이콘"/>
              </div>
            </div>
            <div class="detail detail3">
              <p>사행성, 선정성, 적법성 등을 고려하여 부적절한 서비스는 이용이 제한될 수 있습니다.</p>
            </div>
          </div>
          <div onclick="openDetail(4)">
            <div class="list">
              <div class="title">
                <span class="number">Q4</span>
                <span>앱 광고도 진행할 수 있나요?</span>
              </div>
              <div class="detail-btn4">
                <img src="static/image/faq/Slice%2024.svg" alt="아래 화살표 아이콘"/>
              </div>
            </div>
            <div class="detail detail4">
              <p>현재 안드로이드 앱만 가능하며, 추후 IOS 앱 광고는 지원할 예정입니다.</p>
            </div>
          </div>
          <div onclick="openDetail(5)">
            <div class="list">
              <div class="title">
                <span class="number">Q5</span>
                <span>서비스 비용이 있나요?</span>
              </div>
              <div class="detail-btn5">
                <img src="static/image/faq/Slice%2024.svg" alt="아래 화살표 아이콘"/>
              </div>
            </div>
            <div class="detail detail5">
              <p>서비스 비용은 별도로 없으며, 소진 광고비의 20%를 대행 수수료로 청구합니다.
                현재 5%p 인하된 15%의 대행수수료로 레버를 사용하실 수 있는 프로모션이 진행중입니다.
                단, 네이버는 매체 특성상 별도의 수수료가 청구되지 않습니다.</p>
            </div>
          </div>
          <div onclick="openDetail(6)">
            <div class="list">
              <div class="title">
                <span class="number">Q6</span>
                <span>전환 스크립트 설치도 해주시나요?</span>
              </div>
              <div class="detail-btn6">
                <img src="static/image/faq/Slice%2024.svg" alt="아래 화살표 아이콘"/>
              </div>
            </div>
            <div class="detail detail6">
              <p>매체별 성과 측정 도구를 무료로 설치 지원해 드립니다.
                단, 자체 구축의 경우 스크립트 제공은 가능하나 설치 지원이 일부 제한될 수 있는 점 참고 부탁 드립니다.</p>
            </div>
          </div>
          <div onclick="openDetail(7)">
            <div class="list">
              <div class="title">
                <span class="number">Q7</span>
                <span>레버가 기존 광고 대행사/솔루션과 다른 점은 무엇인가요?</span>
              </div>
              <div class="detail-btn7">
                <img src="static/image/faq/Slice%2024.svg" alt="아래 화살표 아이콘"/>
              </div>
            </div>
            <div class="detail detail7">
              <p>	레버는 휴먼어드바이저 (담당 AE)와 로보어드바이저 (AI알고리즘)가 함께 캠페인을 관리하는 데이터 기반의 마케팅 자동화 솔루션입니다.
                오차범위와 시행착오를 최소화하고 광고 목표에 맞게 빠른 최적화가 가능합니다.
                기존 광고 대행사/솔루션의 경우, AE 또는 AI 중 한 쪽으로 집중된 서비스를 제공하나,
                레버는 양방향의 서비스가 유연하게 제공됩니다.
              </p>
            </div>
          </div>
        </InnerRight>
      </FaqContainer>
    </FaqSection>
  )
}

export default Faq;