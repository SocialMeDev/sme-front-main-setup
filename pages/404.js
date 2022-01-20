import {
	Center,
	Heading,
	Text,
	Button,
	Flex,
	VStack,
	useColorModeValue,
	useBreakpointValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Lottie from 'react-lottie'
import animationDataLight from '../public/images/lotties/404bounceLight.json'
import animationDataDark from '../public/images/lotties/404bounceDark.json'

export default function Custom404() {
	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: useColorModeValue(animationDataLight, animationDataDark),
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}
	const lottieHeight = useBreakpointValue({ base: 150, md: 400 })
	const lottieWidth = useBreakpointValue({ base: 300, md: 600 })
	return (
		<Center p={[2, null, 10]} minH={['90vh', null, '100vh']}>
			<Flex flexDir={['column', null, 'row']}>
				<Center w={['auto', null, 600]}>
					<Lottie
						options={defaultOptions}
						height={lottieHeight}
						width={lottieWidth}
					/>
				</Center>
				<VStack
					p={6}
					flexDir={'column'}
					align={['center', null, 'flex-start']}
					justify={'center'}
					spacing={[2, null, 6]}
				>
					<Heading size="2xl" textAlign={['center', null, 'justify']}>
						Você parece perdido.
					</Heading>
					<Text fontSize={'lg'} textAlign={['center', null, 'justify']}>
						A página que você está procurando não existe. Como você chegou aqui é um
						mistério, mas você pode clicar no botão abaixo para voltar à página
						inicial.
					</Text>
					<NextLink href={'/'} passHref>
						<Button size={'lg'} colorScheme={'purple'} w={'100%'}>
							Voltar
						</Button>
					</NextLink>
				</VStack>
			</Flex>
		</Center>
	)
}
