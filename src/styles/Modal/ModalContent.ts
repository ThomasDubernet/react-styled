import styled from 'styled-components'
import { elevations, ElevationType } from '../elevations'

type ModalContentProps = {
  elevation?: ElevationType
}

export const ModalContent = styled.div.attrs((props: ModalContentProps) => ({
  elevation: props.elevation ?? 'elevation0',
}))`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${props => elevations[props.elevation]}
`
