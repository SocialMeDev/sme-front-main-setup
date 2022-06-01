import EmptyBox from './files/empty-box.json'

import Lottie from '.'

export default {
  component: Lottie,
  title: 'Media/Lottie/Default',
  args: {
    options: {
      loop: false,
      autoplay: true,
      animationData: EmptyBox,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    },
    height: 350,
    width: 300,
    src: EmptyBox
  },
  argTypes: {
    options: {
      name: 'options',
      table: {
        type: {
          summary:
            '{ loop: boolean, autoPlay: boolean, animationData: lottieFile, rendererSettings: Object }'
        }
      }
    },
    height: {
      name: 'height',
      table: {
        type: {
          summary: 'Number'
        }
      }
    },
    width: {
      name: 'width',
      table: {
        type: {
          summary: 'Number'
        }
      }
    },
    src: {
      name: 'src',
      table: {
        type: {
          summary: 'LottieFile'
        }
      }
    }
  }
}
export const Default = (args) => {
  return <Lottie {...args} />
}
