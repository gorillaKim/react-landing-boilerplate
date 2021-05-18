import React from 'react'
import styled from "styled-components"
import guidGenerator from "../../utils/guidGenerator";


const FormBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
  width: 265px;
  font-family: NotoSansKR;
  
  &:nth-child(2n + 1) {
    margin-right: 30px;
  }
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
  inputValue: string
  placeholder?: string
  isRequired?: boolean
  onChange: ()=> void
  label: string
}

const FormBox = ({inputValue='0', placeholder='', onChange, label='입력 폼', isRequired=false}:IFormBox) => {

  return (
    <FormBoxContainer>
      <label>{label}</label>
      <input
        value={inputValue}
        placeholder={placeholder}
        onChange={onChange}
        required={isRequired}
      />
    </FormBoxContainer>
  )
}

export default FormBox