export interface IslideHeader {
  start: {
    right: string
  }
  end: {
    right: string
  }
}
export interface Irotate {
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
export interface IshowElement {
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
export interface Inavbar {
  start: {
    display: string
  }
  end: {
    display: string
  }
}
export interface Iheader {
  start: {
    backgroundColor: string
    color: string
  }
  end: {
    backgroundColor: string
    color: string
  }
}

export interface IswipeY {
  start: {
    value: number
    opacity: number
  }
  end: {
    value: number
    opacity: number
  }
}