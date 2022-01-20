import { useState } from 'react'
import { Flex, Button, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function NavTest() {
	const { colorMode, toggleColorMode } = useColorMode()
	const [visible, setVisible] = useState(true)
	return (
		<Flex
			display={visible ? 'flex' : 'none'}
			justifyContent={'space-between'}
			pos={'absolute'}
			w={'100%'}
			zIndex={999}
		>
			<Flex>
				<NextLink href={'/404'} passHref>
					<Button size="xs" variant="ghost">
						Page404
					</Button>
				</NextLink>
				<NextLink href={'/500'} passHref>
					<Button size="xs" variant="ghost">
						Page500
					</Button>
				</NextLink>
			</Flex>
			<Flex>
				<Button size="xs" variant="ghost" onClick={() => setVisible(false)}>
					CloseNav
				</Button>
			</Flex>
			<Flex>
				<Button size="xs" variant="ghost" onClick={toggleColorMode}>
					{colorMode === 'light' ? 'ThemeDark' : 'ThemeLight'}
				</Button>
			</Flex>
		</Flex>
	)
}
