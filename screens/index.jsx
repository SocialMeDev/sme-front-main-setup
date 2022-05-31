import { useMemo } from 'react'
import { Lottie, Center, Heading, Text } from 'components'

import duckAnimation from 'public/images/lotties/duck.json'

export default function SetupPage() {
  const enviroment =
    process.env.NODE_ENV === 'development' ? 'Desenvolvimento' : 'Produção'

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: duckAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  }, [])

  const date = new Date()

  function changeTimeZone(parameterDate, timeZone) {
    var date = new Date()
    var timezone = date.getTimezoneOffset()

    var timezoneInMinutes = timezone / -60

    var difference = Math.abs(date - timezoneInMinutes)

    const newDate = date.getTime() + timezoneInMinutes

    console.log(`newDate`, new Date(newDate))

    console.log(`timezoneInMinutes`, timezoneInMinutes)

    if (typeof parameterDate === 'string') {
      return new Date(
        new Date(date).toLocaleString('en-US', {
          timeZone
        })
      )
    }

    return new Date(
      date.toLocaleString('en-US', {
        timeZone
      })
    )
  }

  changeTimeZone(date)

  return (
    <main>
      <Center minH="100vh" flexDirection="column">
        <Lottie options={defaultOptions} size={300} />
        <Heading>Setup</Heading>

        <Text mt={2}>Ambiente de {enviroment}</Text>
      </Center>
    </main>
  )
}
