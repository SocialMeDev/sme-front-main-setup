import {
  Text,
  Avatar,
  Input,
  Stack,
  SkeletonCircle,
  SkeletonText
} from 'components'

import Skeleton from '.'

export default {
  component: Skeleton,
  title: 'Feedback/Skeleton/Default',
  args: {
    fadeDuration: 0.4,
    speed: 0.8,
    endColor: 'gray.300',
    startColor: 'gray.100',
    isLoaded: false
  },
  argTypes: {
    fadeDuration: {
      name: 'fadeDuration',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    isLoaded: {
      name: 'isLoaded',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    speed: {
      name: 'speed',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    endColor: {
      name: 'endColor',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    startColor: {
      name: 'startColor',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}
export const Default = (args) => {
  return (
    <Stack>
      <SkeletonCircle boxSize="40px" {...args}>
        <Avatar boxSize="40px" />
      </SkeletonCircle>
      <SkeletonText {...args}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          aspernatur quo, sint assumenda similique at voluptatibus eaque enim
          modi eveniet accusamus, doloribus aperiam repellendus sapiente
          accusantium veniam, quod commodi aliquid facere? reiciendis minima.
        </Text>
      </SkeletonText>

      <Skeleton {...args}>
        <Input />
      </Skeleton>
    </Stack>
  )
}
