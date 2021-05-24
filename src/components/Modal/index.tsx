import React from 'react'
import ReactModal from 'react-modal'

interface Props {
  isOpen: boolean
  ariaLabel?: string
  customStyle?: {
    overlay: any
    content: any
  }
}

const Modal: React.FC<Props> = ({
  children,
  ariaLabel = 'Alert Modal',
  isOpen=false,
  customStyle
}) => {
  const customStyles = {
    overlay: {
      zIndex: 999,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',

      ...customStyle?.overlay
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      border: 'unset',
      padding: 0,
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',

      ...customStyle?.content
    }
  }

  if (typeof(window) !== 'undefined') {
    ReactModal.setAppElement('#__next')
  }

  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      contentLabel={ariaLabel}
      testId="modal-content"
    >
      {children}
    </ReactModal>
  )
}

export default Modal


