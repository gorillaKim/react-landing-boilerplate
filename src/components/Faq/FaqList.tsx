import React, { FC, ReactElement, useState } from 'react'
import styled from 'styled-components'
import { IFaqListProps, IStateProps } from 'types/faq'

const List = styled.div`
  font-family: NotoSansKR;
  padding: 1.5rem;
  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);
  display: flex;
  justify-content: space-between;
  .rotate {
    transform: rotate(180deg);
  }
  .title {
    display: flex;
  }
  .number {
    font-family: Roboto;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.54px;
    color: var(--cornflower);
    margin-right: 1rem;
  }
`
const Detail = styled.div`
  padding: 2rem 4rem;
  background-color: var(--pale-lilac);
  line-height: 1.5;
  letter-spacing: -0.8px;
  font-size: 16px;
  font-family: NotoSansKR;
  color: var(--greyish-brown);
  display: none;
  -webkit-transition: all 0.5s linear;
  ul {
    list-style: unset;
    li {
      margin-bottom: 0.2rem;
    }
  }
  &.show {
    display: block;
  }
  p:nth-child(2) {
    color: var(--cornflower);
    margin-top: 1.5rem;
  }
`
const Div = styled.div`
  &:not(:first-child) .register {
    display: none;
  }
`
const FaqList: FC<IFaqListProps> = ({ contents }): ReactElement => {
  const [showDescription, setShowDescription] = useState<IStateProps>({})
  const handleClick = (e: React.MouseEvent): void => {
    const clicked = e.currentTarget as HTMLElement
    showDescription[clicked.id] &&
      setShowDescription({
        ...showDescription,
        [clicked.id]: undefined,
      })
    showDescription[clicked.id] ||
      setShowDescription({
        ...showDescription,
        [clicked.id]: true,
      })
  }
  return (
    <>
      {contents.map((item, index) => (
        <Div key={item.id} id={item.id}>
          <List className={'list'} onClick={handleClick} id={item.id}>
            <div className={'title'}>
              <span className={'number'}>Q{index + 1}</span>
              <span>{item.title}</span>
            </div>
            <div className={showDescription[item.id] ? 'rotate' : undefined}>
              <img src="./static/image/faq/Slice%2024.svg" alt="아래 화살표 아이콘" />
            </div>
          </List>
          <Detail className={showDescription[item.id] ? 'show' : undefined}>
            <ul>
              {item.description.map((contents: string, index) => (
                <li key={index}>{contents}</li>
              ))}
            </ul>
            <p className={'register'}>
              <a href="https://biz.lever.me/signup" className={'lever-signup'}>
                회원가입 하러가기
              </a>
            </p>
          </Detail>
        </Div>
      ))}
    </>
  )
}

export default FaqList
