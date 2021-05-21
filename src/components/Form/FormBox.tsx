import React from 'react'
import styled from "styled-components"


const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 265px;
  width: 100%;
  font-family: NotoSansKR;
  margin: 0 15px 45px 15px;
  &.wide {
    max-width: unset;
    .radioOptions {
      display: inline-flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      .radio {
        margin: 7px 5px;
        input {
          transform: scale(1.3);
          margin-top: 0;
        }
      }
    }
  }
  label {
    margin-bottom: 18px;
    letter-spacing: -0.8px;
    color: var(--greyish-brown);
  }
  input {
    border: 0;
    border-bottom: 1px solid #8e8e8e;
    font-size: 18px;
    outline: none;
  }
  select {
    height: 39px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: var(--black);
    background-color: white;
    border: 0.5px solid var(--warm-grey);
    font-size: 18px;
    letter-spacing: -0.9px;
    outline: none;
  }
  textarea {
    height: 54px;
    padding-left: 0.7rem;
    padding-top: 0.5rem;
    border: 1px solid var(--warm-grey);
    color: var(--warm-grey);
    font-size: 18px;
    letter-spacing: -0.9px;
  }
`

export default FormBox