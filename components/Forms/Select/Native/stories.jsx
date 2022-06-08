import { useForm } from 'react-hook-form'
import { Box, FormLabel } from 'components'

import NativeSelect from '.'

export default {
  component: NativeSelect,
  title: 'Forms/Select/Native',
  args: {
    id: 'select',
    size: 'sm',
    options: [
      {
        name: 'Banana',
        code: '1'
      },
      {
        name: 'Maça',
        code: '2'
      },
      {
        name: 'Pera',
        code: '3'
      },
      {
        name: 'Maracuja',
        code: '4'
      },
      {
        name: 'Acerola',
        code: '5'
      },
      {
        name: 'Goiaba',
        code: '6'
      },
      {
        name: 'Tanjerina',
        code: '7'
      },
      {
        name: 'Limão',
        code: '8'
      }
    ]
  },
  argTypes: {
    size: {
      values: ['sm', 'md', 'lg'],
      name: 'size',
      control: { type: 'radio' },
      table: {
        type: {
          summary: '["sm", "md", "lg"]'
        }
      }
    },
    options: {
      table: {
        type: {
          summary: '[{ [string]: any, [string]: string }]'
        }
      }
    },
    id: {
      name: 'id',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    onChange: {
      name: 'onChange',
      table: {
        type: {
          summary: '(optionValue) => void'
        }
      }
    }
  }
}

export const Native = (args) => {
  const { register } = useForm()

  return (
    <Box>
      <FormLabel htmlFor={args.id}>Select</FormLabel>

      <NativeSelect {...args} {...register('select')}>
        {args.options.map(({ name, code }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </NativeSelect>
    </Box>
  )
}
