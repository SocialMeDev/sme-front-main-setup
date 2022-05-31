import { useState } from 'react'
import { Text, Stack } from '@chakra-ui/react'

import CusmtomCheckboxGroup from '.'

import Content from './storiesComponent/CheckboxContent'

export default {
  component: CusmtomCheckboxGroup,
  title: 'Atoms/CheckboxGroup/Basic/_1',
  args: {
    options: [
      {
        value: 'Banana',
        title: 'Fruta',
        description: 'Alguma descrição ae'
      },
      {
        value: 'Pera',
        title: 'Fruta',
        description: 'Alguma descrição ae'
      },
      {
        value: 'Maça',
        title: 'Fruta',
        description: 'Alguma descrição ae'
      }
    ]
  },
  argTypes: {
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    },
    value: {
      name: 'value',
      table: {
        type: {
          summary: 'StringOrNumber[]'
        }
      }
    },
    getCheckboxProps: {
      name: 'getCheckboxProps',
      table: {
        type: {
          summary: 'CheckBoxProps'
        }
      }
    }
  }
}

export const Common = (args) => {
  const [values, setValues] = useState([])

  return (
    <Stack maxW="200px">
      <Text>
        Seu children recebe a props isChecked, um boleano para saber se está
        ativo ou não
      </Text>
      <Text>Values: {values.join(', ')}</Text>

      <CusmtomCheckboxGroup
        defaultValues={values}
        onChange={(values) => setValues(values)}
        options={args.options}
      >
        <Content />
      </CusmtomCheckboxGroup>
    </Stack>
  )
}
