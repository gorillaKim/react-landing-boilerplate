import React from "react";

export interface IHeaderSection {
  headerOption: {
    start: {
      backgroundColor: string;
    },
    end: {
      backgroundColor: string;
    }
  }
  slideHeaderOption: {
    start: {
      right: string,
    }
    end: {
      right: string,
    }
  }
  children: React.ReactNode
  className: string
}
export interface INavbarSection {
  navbarOption: {
    start: {
      display: string;
    },
    end: {
      display: string;
    }
  },
  children: React.ReactNode,
  className: string
}
export interface NavbarProps {
}

export interface LogoProps {
  isActive: boolean
}

export interface MenuProps {
  isActive: boolean
}

export interface hrefProps {
  name: string
}

export interface IToggleProps {
  top: string
  height: string
  rotate: string
  bottom: string
  backgroundColor: string
}
export interface IShowElementProps {
  top: string
  height: string
  display: string
  opacity: string
  visibility: string
  zIndex: string
  backgroundColor: string
}
export interface IToggleRotateOption {
  start: IToggleProps
  end: IToggleProps
}
export interface IShowElementOption {
  start: IShowElementProps
  end: IShowElementProps
}
export interface ToggleProps {
  duration: string
  rotateOption: IToggleRotateOption
  rotateReverseOption: IToggleRotateOption
  showElementOption: IShowElementOption
  children: React.ReactNode
  onClick: ()=>void
}
export interface ToggleButtonProps {
  onClickToggle: () => void
  toggle: boolean
  sticky: boolean
}