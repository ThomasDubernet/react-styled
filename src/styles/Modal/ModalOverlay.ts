import styled, { keyframes } from 'styled-components'

export const opacityAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  animation: ${opacityAnimation} 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`
