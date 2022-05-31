import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const CertificateCheckmark = createIcon({
  displayName: 'CertificateCheckmark',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M9.482 19.741c.295-.039.593.041.828.222l1.083.831c.358.275.856.275 1.213 0l1.124-.863c.21-.161.475-.232.737-.197l1.406.185c.447.059.878-.19 1.051-.607l.541-1.308c.101-.245.295-.439.54-.54l1.308-.541c.417-.172.666-.604.607-1.051l-.178-1.355c-.039-.295.041-.593.222-.828l.831-1.083c.275-.358.275-.856 0-1.213l-.863-1.124c-.161-.21-.232-.475-.197-.737l.185-1.406c.059-.447-.19-.878-.607-1.051l-1.308-.541c-.245-.101-.439-.295-.54-.54l-.541-1.308c-.172-.417-.604-.666-1.051-.607l-1.406.185c-.262.036-.527-.035-.736-.195l-1.124-.863c-.358-.275-.856-.275-1.213 0l-1.124.863c-.21.16-.475.231-.737.197l-1.406-.185c-.447-.059-.878.19-1.051.607l-.54 1.308c-.102.244-.296.438-.54.54l-1.308.54c-.417.173-.666.604-.607 1.051l.185 1.406c.034.262-.037.527-.197.736l-.863 1.124c-.275.358-.275.856 0 1.213l.863 1.124c.161.21.232.475.197.737l-.185 1.406c-.059.447.19.878.607 1.051l1.308.541c.245.101.439.295.54.54l.541 1.308c.172.417.604.666 1.051.607l1.354-.179"></path>
        <path d="M14.799 10.601l-3.501 3.501 -2.099-2.1"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24v-24Z"></path>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={CertificateCheckmark} {...rest} />
}

export default memo(CustomIcon)
