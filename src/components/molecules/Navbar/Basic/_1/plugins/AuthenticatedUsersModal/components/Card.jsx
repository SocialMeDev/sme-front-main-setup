import { memo } from 'react'
import { ScaleFade } from '@chakra-ui/react'

import { Card } from 'components/atoms/Card/Basic'

function AccountCard({ children }) {
  return (
    <ScaleFade in={true} initialScale={0.9}>
      <Card p={0} minW={['250px', '400px']} boxShadow="none">
        {children}
      </Card>
    </ScaleFade>
  )
}

export default memo(AccountCard)
