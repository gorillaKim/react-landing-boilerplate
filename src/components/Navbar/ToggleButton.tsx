import React, {FC} from "react"
import styled from "styled-components"
import {rotate, showElement } from "../Styled/Animation";
import {cssBreakPoint} from "../../styles/constant";

interface IToggleProps {
  top: string
  height: string
  rotate: string
  bottom: string
  backgroundColor: string
}

interface IShowElementProps {
  top: string
  height: string
  display: string
  opacity: string
  visibility: string
  zIndex: string
  backgroundColor: string
}

interface IToggleRotateOption {
  start: IToggleProps
  end: IToggleProps
}

interface IShowElementOption {
  start: IShowElementProps
  end: IShowElementProps
}

interface ToggleProps {
  duration: string,
  rotateOption: IToggleRotateOption,
  rotateReverseOption: IToggleRotateOption,
  showElementOption: IShowElementOption,
}

const Toggle = styled(({ duration, rotateOption, rotateReverseOption, showElementOption, ...restProps}: ToggleProps) => <ul {...restProps} />)`
  display: none;
  width: 35px;
  height: 26px;
  z-index: 99999;

  @media (max-width: ${cssBreakPoint.tablet}) {
    display: flex;
    position: absolute;
    right: 0;
    margin: 20px 30px 0 0;
    flex-direction: column;
    justify-content: space-between;

    li {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 50%;
      background-color: var(--greyish-brown);
      animation-duration: ${props => props.duration};
      animation-fill-mode: forwards;

      &:nth-child(1) {
        animation-name: ${props => rotate(props.rotateOption)};
      }
      &:nth-child(2) {
        animation-name: ${props => showElement(props.showElementOption)};
      }
      &:nth-child(3) {
        animation-name: ${props => rotate(props.rotateReverseOption)};
      }
    }
  }
`

const ToggleList = styled.li`
  list-style: none;
  border-radius: 25px;
  height: 4.2px;
  background-color: var(--white);
  @media (max-width: var(--break-tablet)) {
    height: 4px;
  }
`

interface ToggleButtonProps {
  onClickToggle: () => void,
  toggle: boolean
}

const ToggleButton: FC<ToggleButtonProps> = ({onClickToggle, toggle=true}) => {
  const duration = '0.7s'
  const rotateOption = {
    start: {
      top: '20px',
      bottom: 'unset',
      height: '4px',
      rotate: '0deg',
      backgroundColor: 'var(--greyish-brown)',
    },
    end: {
      top: 'unset',
      bottom: 'unset',
      height: '2.2px',
      rotate: '45deg',
      backgroundColor: 'var(--white)',
    }
  }
  const rotateReversOption = {
    start: {
      top: '20px',
      bottom: 'unset',
      height: '4px',
      rotate: '0deg',
      backgroundColor: 'var(--greyish-brown)',
    },
    end: {
      top: 'inherit',
      bottom: '0',
      height: '2.2px',
      rotate: '-45deg',
      backgroundColor: 'var(--white)',
    }
  }
  const showElementOption = {
    start: {
      top: '11px',
      height: '4px',
      display: 'block',
      opacity: 'unset',
      visibility: 'visible',
      zIndex: 'unset',
      backgroundColor: 'var(--greyish-brown)',
    },
    end: {
      top: '20px',
      height: '2.2px',
      display: 'unset',
      opacity: '0',
      visibility: 'hidden',
      zIndex: '-1',
      backgroundColor: 'var(--white)',
    },
  }
  const reverseToAnimation = (option, trigger) => {
    return trigger
      ? {
        start: option.start,
        end: option.end
      } :
      {
        start: option.end,
        end: option.start
      }
  }

  return (
    <Toggle
      duration={duration}
      rotateOption={reverseToAnimation(rotateOption, toggle)}
      rotateReverseOption={reverseToAnimation(rotateReversOption, toggle)}
      showElementOption={reverseToAnimation(showElementOption, toggle)}
      onClick={onClickToggle}
    >
      <ToggleList/>
      <ToggleList/>
      <ToggleList/>
    </Toggle>
  )
}

export default ToggleButton