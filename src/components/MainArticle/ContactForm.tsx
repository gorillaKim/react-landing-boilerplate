import React, { FC, ReactElement } from 'react'
import { FormBox } from 'components/Form'
import styled from 'styled-components'
import { cssBreakPoint } from 'styles/constant'
import { IinitInputs } from 'types/mainArticle'
import PrivacyTermModal from './PrivacyTermModal'

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
  & > button {
    width: 100%;
    height: 89px;
    margin-bottom: 30px;
    max-width: unset;
    cursor: pointer;
    font-size: 22px;
    font-family: NotoSansKR;
    letter-spacing: -1.1px;
    border: 0;
    color: var(--black);
    background-color: var(--white);
    cursor: unset;

    &.active {
      color: var(--white);
      background-color: var(--cornflower);
      cursor: pointer;
    }

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
  inputs: IinitInputs
  modal: boolean
  onClickModal: () => void
  onChangeInput: (event: React.ChangeEvent) => void
  onChangeRadio: (event: React.ChangeEvent) => void
  onChangeChecked: (event: React.ChangeEvent) => void
  onClickTermConfirm: () => void
  onClickSubmit: () => void
  submitDisabled: boolean
}

const ContactForm: FC<ContactForm> = ({
  inputs,
  modal,
  onChangeInput,
  onChangeRadio,
  onChangeChecked,
  onClickTermConfirm,
  onClickModal,
  onClickSubmit,
  submitDisabled,
}): ReactElement => {
  return (
    <>
      <FormBox>
        <label>회사명</label>
        <input
          id={'company'}
          type={'text'}
          value={inputs?.company}
          placeholder={'예) 매드업'}
          onChange={onChangeInput}
          required={true}
        />
      </FormBox>
      <FormBox>
        <label>사이트 URL</label>
        <input
          id={'url'}
          type={'text'}
          value={inputs?.url}
          placeholder={'예) http://lever.me'}
          onChange={onChangeInput}
          required={true}
        />
      </FormBox>
      <FormBox>
        <label>담당자명</label>
        <input
          id={'name'}
          type={'text'}
          value={inputs?.name}
          placeholder={'예) 홍길동'}
          onChange={onChangeInput}
          required={true}
        />
      </FormBox>
      <FormBox>
        <label>답장 받을 이메일</label>
        <input
          id={'email'}
          type={'email'}
          value={inputs?.email}
          placeholder={'예) ad@lever.me'}
          onChange={onChangeInput}
          required={true}
        />
      </FormBox>
      <FormBox>
        <label>전화번호</label>
        <input
          id={'mobile'}
          type={'text'}
          value={inputs?.mobile}
          placeholder={'010-7777-7777'}
          onChange={onChangeInput}
          required={true}
        />
      </FormBox>
      <FormBox>
        <label>광고 목적</label>
        <select
          id={'purpose'}
          name="purpose"
          value={inputs?.purpose}
          onChange={onChangeInput}
          required={true}
        >
          <option value="purpose1">제품 판매</option>
          <option value="purpose2">브랜드 인지도 향상</option>
          <option value="purpose3">사이트 유입 증대</option>
        </select>
      </FormBox>

      <FormBox className={'wide'}>
        <label>월 광고 금액</label>
        <div className={'radioOptions'}>
          <div className={'radio'}>
            <input
              type={'radio'}
              name={'budget'}
              id={'price1'}
              value={'price1'}
              onChange={onChangeRadio}
            />
            <label>300 ~ 500만 원</label>
          </div>
          <div className={'radio'}>
            <input
              type={'radio'}
              name={'budget'}
              id={'price2'}
              value={'price2'}
              onChange={onChangeRadio}
            />
            <label>500 ~ 1,000만 원</label>
          </div>
          <div className={'radio'}>
            <input
              type={'radio'}
              name={'budget'}
              id={'price3'}
              value={'price3'}
              onChange={onChangeRadio}
            />
            <label>1,000 ~ 3,000만 원</label>
          </div>
          <div className={'radio'}>
            <input
              type={'radio'}
              name={'budget'}
              id={'price4'}
              value={'price4'}
              onChange={onChangeRadio}
            />
            <label>3,000만 원 이상</label>
          </div>
        </div>
      </FormBox>
      <FormBox className={'wide'}>
        <label>광고 집행 희망 시기</label>
        <div className={'radioOptions'}>
          <div className={'radio'}>
            <input
              type={'radio'}
              name={'hope_time'}
              id={'time1'}
              value={'time1'}
              onChange={onChangeRadio}
            />
            <label>1개월 이내</label>
          </div>
          <div className={'radio'}>
            <input
              type={'radio'}
              name={'hope_time'}
              id={'time2'}
              value={'time2'}
              onChange={onChangeRadio}
            />
            <label>2개월 이내</label>
          </div>
          <div className={'radio'}>
            <input
              type={'radio'}
              name={'hope_time'}
              id={'time3'}
              value={'time3'}
              onChange={onChangeRadio}
            />
            <label>3개월 이내</label>
          </div>
          <div className={'radio'}>
            <input
              type={'radio'}
              name={'hope_time'}
              id={'time4'}
              value={'time4'}
              onChange={onChangeRadio}
            />
            <label>3개월 이후</label>
          </div>
        </div>
      </FormBox>

      <FormBox className={'wide'}>
        <label>문의 내용</label>
        <textarea
          name={'content'}
          placeholder={'문의내용을 최대 500자 한도 내에서 적어주세요.'}
          maxLength={500}
          id="content"
          onChange={onChangeInput}
        ></textarea>
      </FormBox>
      <FormCheck>
        <div className={'term-wrap'}>
          <CheckBox>
            <label>
              <span>개인정보 처리방침</span>에 동의합니다.
            </label>
            <input
              type={'checkbox'}
              name={'agree_policy'}
              id={'agree_policy'}
              onChange={onChangeChecked}
              checked={inputs['agree_policy']}
            />
          </CheckBox>
          <span className={'view-term'} onClick={onClickModal}>
            약관보기
          </span>
        </div>
        <button
          disabled={submitDisabled}
          className={submitDisabled ? 'undefined' : 'active'}
          onClick={onClickSubmit}
        >
          문의하기
        </button>
      </FormCheck>
      <PrivacyTermModal isOpen={modal} onClickConfirm={onClickTermConfirm} />
    </>
  )
}

export default ContactForm
