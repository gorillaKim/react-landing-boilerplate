import { keyframes } from 'styled-components';

/* animation */
interface IslideHeader {
  start: {
    right: string
  }
  end: {
    right: string
  }
}
export const slideHeader = ({start, end}:IslideHeader) => keyframes`
  0% {
    right: ${start.right}; // -210%;
  }
  100% {
    right:${end.right}; // 0%
  }
`
interface Irotate {
  start: {
    top: string
    height: string
    rotate: string
    bottom: string
    backgroundColor: string
  }
  end: {
    top: string
    height: string
    rotate: string
    bottom: string
    backgroundColor: string
  }
}
export const rotate = ({start, end}:Irotate) => keyframes`
  0% {
    top: ${start.top}; // 0
    bottom: ${start.bottom}; // unset
    height: ${start.height}; // 4
    transform: rotate(${start.rotate}) // 0
    background-color: ${start.backgroundColor};
  }
  100% {
    top: ${start.top}; // unset
    bottom: ${start.bottom}; // unset
    height: ${end.height}; // 2.2
    transform: rotate(${end.rotate}); // 45
    background-color: ${start.backgroundColor};
  }
`
interface IshowElement {
  start: {
    top: string
    height: string
    display: string
    opacity: string
    visibility: string
    zIndex: string
    backgroundColor: string
  },
  end: {
    top: string
    height: string
    display: string
    opacity: string
    visibility: string
    zIndex: string
    backgroundColor: string
  }
}
export const showElement = ({start, end}:IshowElement) => keyframes`
  0% {
    top: ${start.top};
    height: ${start.height};
    opacity: ${start.opacity};
    z-index: ${start.zIndex};
    visibility: ${start.visibility};
    background-color: ${start.backgroundColor};
  }
  100% {
    top: ${end.top};
    height: ${end.height};
    opacity: ${end.opacity};
    z-index: ${end.zIndex};
    visibility: ${end.visibility};
    background-color: ${end.backgroundColor};
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
interface Inavbar {
  start: {
    display: string
  }
  end: {
    display: string
  }
}
export const navbar = ({start, end}:Inavbar) => keyframes`
  0% {
    display: ${start.display};
  }
  100% {
    display: ${end.display};
  }
`
interface Iheader {
  start: {
    backgroundColor: string
    color: string
  }
  end: {
    backgroundColor: string
    color: string
  }
}
export const header = ({start, end}:Iheader) => keyframes`
  0% {
    background-color: ${start.backgroundColor};
    color: var(--black);
  }
  100% {
    background-color: ${end.backgroundColor};
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