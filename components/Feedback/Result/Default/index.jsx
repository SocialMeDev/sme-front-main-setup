import { memo, useMemo } from 'react'
import { Flex, Heading, Text } from 'components'

import success from './files/success.json'
import info from './files/info.json'
import danger from './files/danger.json'
import warning from './files/warning.json'

import { Lottie } from 'components'

import { useSizeValue } from 'hooks'

function Result({ srcSize, type, title, description, children, ...rest }) {
  const size = useSizeValue(100, 150, 200)

  const result = useMemo(() => {
    const possibleResults = {
      success: {
        src: success,
        color: 'success',
        size
      },
      info: {
        src: info,
        color: 'info',
        size
      },
      danger: {
        src: danger,
        color: 'danger',
        size
      },
      warning: {
        src: warning,
        color: 'warning',
        size
      }
    }

    return possibleResults[type || 'success']
  }, [size, type])

  return (
    <Flex mt={4} gap={2} direction="column" {...rest}>
      <Lottie src={result.src} size={srcSize || result.size} />

      <Flex direction="column" justify="center" align="center" gap={2}>
        <Heading color={result.color}>{title}</Heading>
        <Text textAlign="center">{description}</Text>
        {children}
      </Flex>
    </Flex>
  )
}

export default memo(Result)
