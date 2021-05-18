import React from 'react'
import styled from "styled-components"
import guidGenerator from "../../utils/guidGenerator";


const FormBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 265px;
  width: 100%;
  font-family: NotoSansKR;
  margin: 0 15px 45px 15px;
  
  label {
    margin-bottom: 18px;
    letter-spacing: -0.8px;
    color: var(--greyish-brown);
  }
  input {
    border: 0;
    border-bottom: 1px solid #8e8e8e;
    outline: none;
    font-size: 18px;
  }
  
`

interface IFormBox {
  id: string
  inputValue: string|undefined
  placeholder?: string
  isRequired?: boolean
  type?: string
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void
  label: string
}

const FormBox = (
  {
     id=guidGenerator(),
     type='text',
     inputValue='',
     placeholder='',
     onChange,
     label='입력 폼',
     isRequired=false
  }:IFormBox) => {
  return (
    <FormBoxContainer>
      <label>{label}</label>
      <input
        id={id}
        value={inputValue}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        required={isRequired}
      />
    </FormBoxContainer>
  )
}

export default FormBox