import React, { CSSProperties, FC, ReactNode } from 'react'
import { ElevationType } from '../../styles/elevations'
import { ModalContent } from '../../styles/Modal/ModalContent'
import { ModalOverlay } from '../../styles/Modal/ModalOverlay'
import { ModalWrapper } from '../../styles/Modal/ModalWrapper'

export interface ModalProps {
  open: boolean
  children: ReactNode
  sx?: CSSProperties
  onClose: () => void
  elevation?: ElevationType
}

const Modal: FC<ModalProps> = ({
  open = false,
  children,
  sx,
  onClose,
  elevation = 'elevation2',
}) => {
  return (
    <ModalWrapper role="presentation">
      {open && (
        <>
          <ModalOverlay onClick={onClose} />
          <ModalContent elevation={elevation} style={sx}>
            {children}
          </ModalContent>
        </>
      )}
    </ModalWrapper>
  )
}

export default Modal
