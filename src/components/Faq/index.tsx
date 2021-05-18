import React, { ReactElement  } from 'react'
import styled from "styled-components"
import { Container } from '../Styled/Layout';
import { cssBreakPoint } from '../../styles/constant'
import FaqList from "./FaqList";
import { FaqProps } from "../../types/faq";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

const FaqContainer = styled(Container)`
  display: flex;
  padding-top: 10rem;
  padding-bottom: 10rem;
  justify-content: space-between;
  @media (max-width: ${cssBreakPoint.tablet}) {
    display: block;
  }
  @media (max-width: ${cssBreakPoint.mobileXs}) {
    padding-top: 5rem;
    padding-bottom: 6rem;
  }
`
const InnerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 9rem;
  margin-left: 10px;
  @media (max-width: ${cssBreakPoint.tablet}) {
    padding-left: 1.5rem;
    margin: 0;
  }
  & p:nth-child(1) {
    font-family: Roboto;
    font-size: 18px;
    font-weight: bold;
    color: var(--cornflower);
  }
  & h1 {
    font-family: NotoSansKR;
    font-size: 55px;
    font-weight: bold;
    letter-spacing: -2.75px;
    color: var(--black);
  }
  & p:last-child {
    font-family: NotoSansKR;
  }
`
const InnerRight = styled.div`
  padding-top: 10rem;
  width: 65%;
  @media (max-width: ${cssBreakPoint.tablet}) {
    width: 100%;
    padding-top: 5rem;
  }
`
const Faq = ({ contents }: FaqProps): ReactElement => {
  const animation = [
    useScrollFadeIn('up', 1, 0),
    useScrollFadeIn('up', 1, 0)
  ]
  return (
    <div id="faq">
      <FaqContainer>
        <InnerLeft {...animation[0]}>
          <p>Digital Marketing Solution LEVER</p>
          <h1>자주하는 질문</h1>
          <p>레버에 자주 질문하시는 내용을 확인해보세요.</p>
        </InnerLeft>
        <InnerRight {...animation[1]}>
          <FaqList contents={contents} />
        </InnerRight>
      </FaqContainer>
    </div>
  )
}

export default Faq;