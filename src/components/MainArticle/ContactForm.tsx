import React, {ChangeEventHandler, FC, ReactElement, useState} from 'react'
import {FormBox} from "../Form";
import styled from "styled-components";
import {cssBreakPoint} from "../../styles/constant";
import PrivacyTermModal from "./PrivacyTermModal"

interface IinitInputs {
  contactCompany: undefined|string
  contactUrl: undefined|string
  contactName: undefined|string
  contactEmail: undefined|string
  contactMobile: undefined|string
  adPurpose: undefined|string
  contactContent: undefined|string
  contactTerm: undefined|boolean,
}
const initInputs: IinitInputs = {
  contactCompany: undefined,
  contactUrl: undefined,
  contactName: undefined,
  contactEmail: undefined,
  contactMobile: undefined,
  adPurpose: undefined,
  contactContent: undefined,
  contactTerm: undefined,
}

const FormCheck = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .term-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    color: var(--black);
    letter-spacing: -0.8px;
  }
  &>button{
    width: 100%;
    height: 89px;
    margin-bottom: 30px;
    max-width: unset;
    cursor: pointer;
    font-size: 22px;
    font-family: NotoSansKR;
    letter-spacing: -1.1px;
    color: var(--black);
    border: 0;
    background-color: var(--white);

    @media (max-width: ${cssBreakPoint.mobileMd}) {
       width: 335px;
       height: 60px;
    }
  }
  .view-term {
    margin-top: 0.3rem;
    margin-left: 0.2rem;
    cursor: pointer;
    text-decoration: underline;
    @media (max-width: ${cssBreakPoint.tablet}) {
      color: var(--black);
    }
  }
`
const CheckBox = styled.div`
  @media (max-width: ${cssBreakPoint.tablet}) {
    color: var(--black);
  }
  label {
    margin-bottom: 4.3px;
    font-family: NotoSansKR;
    span {
      text-decoration: underline;
    }
  }
`

interface ContactForm {
}

const ContactForm: FC<ContactForm> = ():ReactElement => {

  const [inputs, setInputs] = useState(initInputs)
  const [modal, setModal] = useState(false)

  const {
    contactCompany,
    contactUrl,
    contactName,
    contactEmail,
    contactMobile,
    adPurpose,
    contactTerm,
  } = inputs
  const onChangeInput:ChangeEventHandler<HTMLElement> = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {target}: any = event
    setInputs({
      ...inputs,
      [target.id]: target.value
    })
  }
  const onChangeRadio:ChangeEventHandler<HTMLElement> = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {target}: any = event
    setInputs({
      ...inputs,
      [target.name]: target.value
    })
  }
  const onChangeChecked:ChangeEventHandler<HTMLElement> = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {target}: any = event
    setInputs({
      ...inputs,
      [target.id]: target.checked
    })
  }
  const onClickModal = () => setModal(!modal)
  const onClickConfirm = () => {
    setModal(false)
    setInputs({
      ...inputs,
      contactTerm: true,
    })
  }

    console.log(inputs)
  // PrivacyTerm
  return (
    <>
      <FormBox>
        <label>회사명</label>
        <input
          id={'contactCompany'}
          type={'text'}
          value={contactCompany}
          placeholder={'예) 매드업'}
          onChange={onChangeInput}
          required={true}
        />
      </FormBox>
      <FormBox>
        <label>사이트 URL</label>
        <input
          id={'contactUrl'}
          type={'text'}
          value={contactUrl}
          placeholder={'예) http://lever.me'}
          onChange={onChangeInput}
          required={true}
        />
      </FormBox>
      <FormBox>
        <label>담당자명</label>
        <input
          id={'contactName'}
          type={'text'}
          value={contactName}
          placeholder={'예) 홍길동'}
          onChange={onChangeInput}
          required={true}
        />
      </FormBox>
      <FormBox>
        <label>답장 받을 이메일</label>
        <input
          id={'contactEmail'}
          type={'email'}
          value={contactEmail}
          placeholder={'예) ad@lever.me'}
          onChange={onChangeInput}
          required={true}
        />
      </FormBox>
      <FormBox>
        <label>전화번호</label>
        <input
          id={'contactMobile'}
          type={'text'}
          value={contactMobile}
          placeholder={'010-7777-7777'}
          onChange={onChangeInput}
          required={true}
        />
      </FormBox>
      <FormBox>
        <label>광고 목적</label>
        <select
          id={'adPurpose'}
          name="adPurpose"
          value={adPurpose}
          onChange={onChangeInput}
          required={true}
        >
          <option value="purpose1">제품 판매</option>
          <option value="purpose2">브랜드 인지도 향상</option>
          <option value="purpose3">사이트 유입 증대</option>
        </select>
      </FormBox>

      <FormBox className={"wide"}>
        <label>월 광고 금액</label>
        <div className={'radioOptions'}>
          <div className={"radio"}>
            <input
              type={"radio"}
              name={"price"}
              id={"price1"}
              value={'price1'}
              onChange={onChangeRadio}
            />
            <label >300 ~ 500만 원</label>
          </div>
          <div className={"radio"}>
            <input
              type={"radio"}
              name={"price"}
              id={"price2"}
              value={'price2'}
              onChange={onChangeRadio}
            />
            <label >500 ~ 1,000만 원</label>
          </div>
          <div className={"radio"}>
            <input
              type={"radio"}
              name={"price"}
              id={"price3"}
              value={'price3'}
              onChange={onChangeRadio}
            />
            <label >1,000 ~ 3,000만 원</label>
          </div>
          <div className={"radio"}>
            <input
              type={"radio"}
              name={"price"}
              id={"price4"}
              value={'price4'}
              onChange={onChangeRadio}
            />
            <label >3,000만 원 이상</label>
          </div>
        </div>
      </FormBox>
      <FormBox className={"wide"}>
        <label>광고 집행 희망 시기</label>
        <div className={'radioOptions'}>
          <div className={"radio"}>
            <input
              type={"radio"}
              name={"time"}
              id={"time1"}
              value={'time1'}
              onChange={onChangeRadio}
            />
            <label >1개월 이내</label>
          </div>
          <div className={"radio"}>
            <input
              type={"radio"}
              name={"time"}
              id={"time2"}
              value={'time2'}
              onChange={onChangeRadio}
            />
            <label >2개월 이내</label>
          </div>
          <div className={"radio"}>
            <input
              type={"radio"}
              name={"time"}
              id={"time3"}
              value={'time3'}
              onChange={onChangeRadio}
            />
            <label >3개월 이내</label>
          </div>
          <div className={"radio"}>
            <input
              type={"radio"}
              name={"time"}
              id={"time4"}
              value={'time4'}
              onChange={onChangeRadio}
            />
            <label >3개월 이후</label>
          </div>
        </div>
      </FormBox>

      <FormBox className={"wide"}>
        <label>문의 내용</label>
        <textarea
          name={"content"}
          placeholder={"문의내용을 최대 500자 한도 내에서 적어주세요."}
          maxLength={500}
          id="contactContent"
          onChange={onChangeInput}
        >
        </textarea>
      </FormBox>
      <FormCheck>
        <div className={'term-wrap'}>
          <CheckBox>
            <label>
              <span>개인정보 처리방침</span>
              에 동의합니다.
            </label>
            <input
              type={"checkbox"}
              name={"checkPolicy"}
              id={"contactTerm"}
              onChange={onChangeChecked}
              checked={contactTerm}
            />
          </CheckBox>
          <span className={'view-term'} onClick={onClickModal}>약관보기</span>
        </div>
        <button>문의하기</button>
      </FormCheck>
      <PrivacyTermModal
        isOpen={modal}
        onClickConfirm={onClickConfirm}
      />
    </>
  )
}

export default ContactForm