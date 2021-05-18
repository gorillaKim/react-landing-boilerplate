import {IswipeY} from "./animation";
import React from "react";

export interface activeStateProps {
  first: boolean,
  second: boolean,
  third: boolean,
}
export interface IntroduceBtnGroupProps {
  onClickActive: (e: React.MouseEvent) => void
  active: any,
  first: string,
  second: string,
  third: string,
}
export interface DescBoxProps {
  imgUrl: {
    google: string,
    facebook: string,
    naver: string,
  }
}
export interface WrapperProps {
  active: any,
}
export interface IswpeYComponent {
  swipeYProps: IswipeY
  children: React.ReactNode
  className?: string
}