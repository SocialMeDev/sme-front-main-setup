import { useState } from 'react'

import { Card } from 'components/atoms/Card/Basic'
import Calendar from '.'

export default {
  component: Calendar,
  title: 'Atoms/Calendar/Basic/_1',
  args: {
    selectedDate: '15/03/2022',
    onSelectDate: () => {}
  },
  argTypes: {
    selectedDate: {
      name: 'selectedDate',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    onSelectDate: {
      name: 'onSelectDate',

      table: {
        type: {
          summary: '(selectedDate: string) => void'
        }
      }
    }
  }
}

export const Common = (args) => {
  const [selectedDate, setSelectedDate] = useState(args.selectedDate)
  return (
    <Card
      borderWidth="1px"
      borderColor="borderColor"
      boxShadow="none"
      maxW="300px"
    >
      <Calendar
        {...args}
        selectedDate={selectedDate}
        onSelectDate={(date) => setSelectedDate(date)}
      />
    </Card>
  )
}
