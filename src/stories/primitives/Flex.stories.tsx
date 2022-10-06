import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from '../../components'

const stories = storiesOf('App Test', module)

stories.add('Test', () => {
  return <Flex />
})
