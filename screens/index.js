import { Center, Heading } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from '../public/images/lotties/duck.json'

export default function SetupPage() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}
	return (
		<main>
			<Center minH="100vh" flexDirection={'column'}>
				<Lottie options={defaultOptions} height={300} width={300} />
				<Heading>Setup Page</Heading>
			</Center>
		</main>
	)
}
