import React, { ChangeEventHandler, FC, useState } from 'react'
import ContactForm from '../../components/MainArticle/ContactForm'
import { IinitInputs } from '../../types/mainArticle'

const initInputs: IinitInputs = {
  contactCompany: undefined,
  contactUrl: undefined,
  contactName: undefined,
  contactEmail: undefined,
  contactMobile: undefined,
  adPurpose: 'purpose1',
  contactContent: undefined,
  contactTerm: undefined,
}

interface IContactFormContainer {}
const ContactFormContainer: FC<IContactFormContainer> = () => {
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
  const onChangeInput: ChangeEventHandler = (event: React.ChangeEvent) => {
    const { target }: any = event
    setInputs({
      ...inputs,
      [target.id]: target.value,
    })
  }
  const onChangeRadio: ChangeEventHandler = (event: React.ChangeEvent) => {
    const { target }: any = event
    setInputs({
      ...inputs,
      [target.name]: target.value,
    })
  }
  const onChangeChecked: ChangeEventHandler = (event: React.ChangeEvent) => {
    const { target }: any = event
    setInputs({
      ...inputs,
      [target.id]: target.checked,
    })
  }
  const onClickTermConfirm = () => {
    setInputs({
      ...inputs,
      contactTerm: true,
    })
    setModal(false)
  }
  const onClickModal = () => setModal(!modal)

  const onClickSubmit = () => {}

  const submitDisabled = !(
    contactCompany &&
    contactUrl &&
    contactName &&
    contactEmail &&
    contactMobile &&
    adPurpose &&
    contactTerm
  )
  return (
    <ContactForm
      inputs={inputs}
      modal={modal}
      onClickModal={onClickModal}
      onClickTermConfirm={onClickTermConfirm}
      onChangeInput={onChangeInput}
      onChangeRadio={onChangeRadio}
      onChangeChecked={onChangeChecked}
      submitDisabled={submitDisabled}
    />
  )
}

export default ContactFormContainer
