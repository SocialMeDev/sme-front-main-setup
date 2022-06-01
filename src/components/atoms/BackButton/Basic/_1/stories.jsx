import BackButton from '.'

export default {
  component: BackButton,
  title: 'Atoms/BackButton/Basic/_1',
  argTypes: {
    href: {
      name: 'href',
      defaultValue: '#',
      control: {
        type: 'text'
      },
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  }
}

export const Basic = (args) => <BackButton {...args} />
