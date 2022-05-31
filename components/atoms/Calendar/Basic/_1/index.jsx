import { memo, useMemo } from 'react'
import { ScaleFade, Center, SimpleGrid, Text, Flex } from '@chakra-ui/react'

import { Arrow5, Arrow8 } from 'components/atoms/Icons/ArrowsDiagrams'
import useCalender from 'hooks/useCalendar'

function Calendar({ selectedDate, onSelectDate, ...rest }) {
  const { year, formatedMonth, nextMonth, previousMonth, daysInCalendar } =
    useCalender()

  const daysOfTheWeek = useMemo(() => {
    return ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  }, [])

  return (
    <ScaleFade in={true}>
      <Flex ps={2} w="100%" justify="space-between" align="center" {...rest}>
        <Text fontSize="md">
          {formatedMonth} de {year}
        </Text>

        <Flex gap={2} color="weakText">
          <Center
            onClick={previousMonth}
            as="button"
            rounded="full"
            _hover={{ bg: 'hoverBg', color: 'hoverColor' }}
            boxSize="8"
            pe="2px"
          >
            <Arrow8 boxSize="8" />
          </Center>

          <Center
            onClick={nextMonth}
            as="button"
            rounded="full"
            _hover={{ bg: 'hoverBg', color: 'hoverColor' }}
            boxSize="8"
            ps="2px"
          >
            <Arrow5 boxSize="8" />
          </Center>
        </Flex>
      </Flex>

      <SimpleGrid minW="100%" columns={7} gap={2}>
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
              bg={isToday && 'activeBg'}
              borderWidth="1px"
              borderColor={selectedDate === date ? 'activeBg' : 'transparent'}
              rounded="full"
              cursor={onSelectDate && 'cursor'}
              onClick={() => onSelectDate(date)}
              _hover={
                onSelectDate && {
                  bg: 'activeBg',
                  color: 'lightColor'
                }
              }
            >
              <Text
                color={isToday ? 'lightColor' : !isThisMounth && 'weakText'}
              >
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
