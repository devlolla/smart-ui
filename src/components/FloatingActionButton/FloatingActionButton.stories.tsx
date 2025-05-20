import {StoryFn, Meta} from '@storybook/react'
import FloatingActionButton from './FloatingActionButton'

export default {
  title: 'ReactComponentLibrary/FloatingActionButton',
  component: FloatingActionButton,
} as Meta

const Template: StoryFn = (args) => <FloatingActionButton {...args} />;

export const FloatingActionTest = Template.bind({})


