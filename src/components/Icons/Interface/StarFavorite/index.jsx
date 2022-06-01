import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'

import { Icon } from 'components'

const StarFavorite = createIcon({
  displayName: 'StarFavorite',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fill="currentColor"
          d="M7.733 20.829l7.5527e-08-3.94238e-08c-.734397.383343-1.64051.0987573-2.02385-.63564 -.153348-.293779-.205092-.630071-.147152-.95636l.809-4.637 -3.406-3.264 -6.34744e-08-6.05322e-08c-.599516-.571727-.622043-1.52121-.0503161-2.12072 .233335-.244676.542489-.403347.877316-.450276l4.729-.676 2.135-4.259 -2.06773e-08 4.17221e-08c.367866-.742271 1.26781-1.04579 2.01008-.677919 .294048.145729.53219.383871.677919.677919l2.135 4.259 4.729.676 1.38777e-07 1.94509e-08c.820408.114988 1.39226.873276 1.27728 1.69368 -.0469292.334828-.2056.643981-.450277.877316l-3.406 3.264 .809 4.638 3.90399e-08 2.19854e-07c.14484.815667-.398973 1.59431-1.21464 1.73915 -.326289.0579399-.662581.0061958-.95636-.147152l-4.267-2.205Z"
        ></path>
      </g>
    </>
  )
})

function CustomIcon({ ...rest }) {
  return <Icon as={StarFavorite} {...rest} />
}

export default memo(CustomIcon)
