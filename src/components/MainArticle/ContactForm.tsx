import React, {FC, ReactElement, useState} from 'react'
import {FormBox} from "../Form";

const initInputs = {
  contactCompany: undefined,
  contactUrl: undefined,
  contactName: undefined,
  contactEmail: undefined,
  contactMobile: undefined,
  adPurpose: undefined,
}

interface ContactForm {
}

const ContactForm: FC<ContactForm> = ():ReactElement => {

  const [inputs, setInputs] = useState(initInputs);
  const {
    contactCompany,
    contactUrl,
    contactName,
    contactEmail,
    contactMobile,
    adPurpose } = inputs;
  const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {target}: any = event
    setInputs({
      ...inputs,
      [target.id]: target.value
    })
  }
  return (
    <>
      <FormBox
        id={'contactCompany'}
        inputValue={contactCompany}
        placeholder={'예) 매드업'}
        onChange={onChangeInput}
        label={'회사명'}
        isRequired={true}
      />
      <FormBox
        id={'contactUrl'}
        inputValue={contactUrl}
        placeholder={'예) http://lever.me'}
        onChange={onChangeInput}
        label={'사이트 URL'}
        isRequired={true}
      />
      <FormBox
        id={'contactName'}
        inputValue={contactName}
        placeholder={'예) 홍길동'}
        onChange={onChangeInput}
        label={'담당자명'}
        isRequired={true}
      />
      <FormBox
        id={'contactEmail'}
        inputValue={contactEmail}
        placeholder={'예) ad@lever.me'}
        onChange={onChangeInput}
        label={'답장 받을 이메일'}
        isRequired={true}
        type={'email'}
      />
      <FormBox
        id={'contactMobile'}
        inputValue={contactMobile}
        placeholder={'010-7777-7777'}
        onChange={onChangeInput}
        label={'전화번호'}
        isRequired={true}
      />
      <FormBox
        id={'adPurpose'}
        inputValue={adPurpose}
        placeholder={'예) 매드업'}
        onChange={onChangeInput}
        label={'광고 목적'}
        isRequired={true}
      />
    </>
  )
}

export default ContactForm