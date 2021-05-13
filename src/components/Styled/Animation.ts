import { keyframes } from 'styled-components';

/* animation */
export const slideHeader = keyframes`
  0% {
    right: -210%;
  }

  100% {
    right: 0%;
  }
`
export const rotate = keyframes`
  0% {
    top: 0;
    height: 4px;
    transform: rotate(0deg);
  }
  100% {
    height: 2.2px;
    border: unset;
    transform: rotate(45deg);
  }
`
export const rotateReverse = keyframes`
  0% {
    bottom: 0;
    height: 4px;
    transform: rotate(0deg);
  }
  100% {
    height: 2.2px;
    border: unset;
    transform: rotate(-45deg);
  } 
`
export const showElement = keyframes`
  0% {
    top: 0px;
    height: 2.2px;
    opacity: 0;
    z-index: -1;
  visibility: hidden;
  }
  100% {
    top: 11px;
    display: block;
    visibility: visible;
  }
`
export const swipeDown = keyframes`
  0% {
    transform: translateY(-50px);
  opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
export const swipeUp = keyframes`
  0% {
    transform: translateY(50px);
  opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
export const swipeRight = keyframes`
  0% {
    transform: translateX(-30%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`
export const swipeLeft = keyframes`
  0% {
    transform: translateX(30%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`
export const importText = keyframes`
  0% {
    transform: translateY(-30%);
    opacity: 0;
    font-weight: normal;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    font-weight: bold;
  }
`
export const navbar = keyframes`
  0% {
    display: flex;
  }
  100% {
    display: inline;
    height: auto;
  }
`
export const header = keyframes`
  0% {
    background-color: transparent;
  }
  100% {
    background-color: #ffffff;
    color: var(--black);
  }
`

export const modalOpen = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  100% {
    display: flex;
    opacity: 1;
  }
`
export const modalWrapOpen = keyframes`
  0% {
    transform: translateY(-30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`
export const scrollBtn = keyframes`
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
`