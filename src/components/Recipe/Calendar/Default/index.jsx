import { memo, useMemo } from 'react'
import { ScaleFade, Center, SimpleGrid, Text, Flex } from 'components'

import { Arrow5, Arrow8 } from 'components/Icons/ArrowsDiagrams'
import useCalendar from 'hooks/useCalendar'

function Calendar({ selectedDate, onSelectDate, ...rest }) {
  const { year, formatedMonth, nextMonth, previousMonth, daysInCalendar } =
    useCalendar()

  const daysOfTheWeek = useMemo(() => {
    return ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  }, [])

  return (
    <ScaleFade>
      <Flex ps={2} justify="space-between" align="center" {...rest}>
        <Text fontSize="md">
          {formatedMonth} de {year}
        </Text>

        <Flex gap={2} color="borderColor">
          <Center
            onClick={previousMonth}
            as="button"
            rounded="full"
            _hover={{ bg: 'primary', color: 'light' }}
            pe="2px"
          >
            <Arrow8 />
          </Center>

          <Center
            onClick={nextMonth}
            as="button"
            rounded="full"
            _hover={{ bg: 'primary', color: 'light' }}
            ps="2px"
          >
            <Arrow5 />
          </Center>
        </Flex>
      </Flex>

      <SimpleGrid minW="100%" rows={7} columns={7} gap={2}>
        {daysOfTheWeek.map((week, index) => (
          <Center boxSize="8" key={index}>
            <Text>{week}</Text>
          </Center>
        ))}

        {daysInCalendar.map(({ day, date, isThisMounth, isToday }) => {
          return (
            <Center
              as={onSelectDate && 'button'}
              boxSize="8"
              key={date}
              bg={isToday && 'primary'}
              borderWidth="1px"
              borderColor={selectedDate === date ? 'primary' : 'transparent'}
              rounded="full"
              cursor={onSelectDate && 'cursor'}
              onClick={() => onSelectDate(date)}
              _hover={
                onSelectDate && {
                  bg: 'primary',
                  color: 'light'
                }
              }
            >
              <Text color={isToday ? 'light' : !isThisMounth && 'borderColor'}>
                {day}
              </Text>
            </Center>
          )
        })}
      </SimpleGrid>
    </ScaleFade>
  )
}

export default memo(Calendar)
