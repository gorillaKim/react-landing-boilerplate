import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }
  li {
    margin-right: 14px;
    :last-child {
      margin-right: 0;
    }
  }
  img {
    width: 21px;
    height: 20px;
    object-fit: contain;
  }
`
const SocialBox = (): ReactElement => {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href="https://www.facebook.com/lever.platform/" target="_blank">
            <img src="./static/image/icon/facebook_logo.png" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/lever.me/" target="_blank">
            <img src="./static/image/icon/insta_logo.png" alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://blog.naver.com/l_e_v_e_r" target="_blank">
            <img src="./static/image/icon/naver_logo.png" alt="naver" />
          </a>
        </li>
        <li>
          <a href="https://brunch.co.kr/@lever" target="_blank">
            <img src="./static/image/icon/branch_logo.png" alt="brunch" />
          </a>
        </li>
        <li>
          <a href="https://www.notion.so/fff8c23e3b434fb1abdfb36ad915d3ee" target="_blank">
            <img src="./static/image/icon/notion_logo.png" alt="notion" />
          </a>
        </li>
      </ul>
    </Wrapper>
  )
}

export default SocialBox
