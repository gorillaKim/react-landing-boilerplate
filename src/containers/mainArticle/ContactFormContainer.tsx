import React, { ChangeEventHandler, FC, useState } from 'react'
import ContactForm from 'components/MainArticle/ContactForm'
import { IinitInputs } from 'types/mainArticle'
import { contactAPI } from 'api'

const initInputs: IinitInputs = {
  company: undefined,
  url: undefined,
  name: undefined,
  email: undefined,
  mobile: undefined,
  budget: undefined,
  hope_time: undefined,
  purpose: 'purpose1',
  content: undefined,
  agree_policy: undefined,
}

interface IContactFormContainer {}
const ContactFormContainer: FC<IContactFormContainer> = () => {
  const [inputs, setInputs] = useState(initInputs)
  const [modal, setModal] = useState(false)

  const { company, url, name, email, mobile, purpose, agree_policy } = inputs
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
      agree_policy: true,
    })
    setModal(false)
  }
  const onClickModal = () => setModal(!modal)

  const onClickSubmit = () => {
    console.log('==========')
    contactAPI
      .post(inputs)
      .then(response => {
        console.log(response)
      })
      .catch(e => console.log(e))
  }

  const submitDisabled = !(company && url && name && email && mobile && purpose && agree_policy)

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
      onClickSubmit={onClickSubmit}
    />
  )
}

export default ContactFormContainer
