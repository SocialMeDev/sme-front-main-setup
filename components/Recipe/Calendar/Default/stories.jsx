import { useState } from 'react'

import { Card } from 'components'
import Calendar from '.'

export default {
  component: Calendar,
  title: 'Recipe/Calendar/Default',
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

export const Default = (args) => {
  const [selectedDate, setSelectedDate] = useState(args.selectedDate)
  return (
    <Card maxW="300px">
      <Calendar
        {...args}
        selectedDate={selectedDate}
        onSelectDate={(date) => setSelectedDate(date)}
      />
    </Card>
  )
}
