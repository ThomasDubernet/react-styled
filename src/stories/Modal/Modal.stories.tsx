import React from 'react'
import Modal, { ModalProps } from '../../components/Modal/Modal'
import { ComponentMeta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    open: {
      name: 'open',
      controls: {
        type: 'boolean',
      },
      type: {
        name: 'boolean',
        required: true,
      },
      defaultValue: false,
    },
    onClose: {
      name: 'onClose',
      type: {
        name: 'function',
        required: true,
      },
    },
    sx: {
      name: 'sx',
    },
  },
  args: {
    open: false,
    onClose: () => console.log('onClose'),
    sx: {
      width: 300,
      height: 250,
      background: '#fff',
      borderRadius: '10px',
      padding: '10px',
    },
    children: <h1>Modal de test</h1>,
  },
  decorators: [
    Story => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Modal>

export const Default = (args: ModalProps) => {
  const { onClose, ...rest } = args
  const [_, updateArgs] = useArgs()

  const handleClose = () => {
    updateArgs({ ...args, open: false })
  }
  return <Modal {...rest} onClose={handleClose} />
}
