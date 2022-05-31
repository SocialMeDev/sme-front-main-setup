import IconsContainer from '../IconsContainer'

import Icons from '.'

export default {
  component: Icons,
  title: 'Icons/SocialMedia',
  args: {
    boxSize: '6',
    color: 'inherit'
  },
  argTypes: {
    boxSize: {
      name: 'boxSize',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    color: {
      name: 'color',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}
export const Common = (args) => {
  return <IconsContainer Icons={Icons} {...args} />
}
