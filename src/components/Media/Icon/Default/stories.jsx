import Icon from '.'
import { GridLayout17 } from 'components/Icons/Interface'

export default {
  component: Icon,
  title: 'Media/Icon/Default',
  args: {
    boxSize: '5',
    as: GridLayout17,
    color: 'borderColor'
  }
}

export const Default = (args) => <Icon {...args} />
