import { Lottie, Center, Heading } from 'components'

import duckAnimation from 'public/images/lotties/duck.json'

export default function SetupPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: duckAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <main>
      <Center minH="100vh" flexDirection="column">
        <Lottie options={defaultOptions} size={300} />
        <Heading>Setup</Heading>
      </Center>
    </main>
  )
}
