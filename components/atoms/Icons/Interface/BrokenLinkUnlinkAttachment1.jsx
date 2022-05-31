import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const BrokenLinkUnlinkAttachment1 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'BrokenLinkUnlinkAttachment1',
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
        <path d="M4.858 4.858l1.415 1.415"></path>
        <path d="M10.091 3v2"></path>
        <path d="M5 10.091h-2"></path>
        <path d="M19.142 19.142l-1.415-1.415"></path>
        <path d="M13.909 21v-2"></path>
        <path d="M19 13.909h2"></path>
        <path d="M12 17l-1.5 1.5 7.5729e-08-7.57518e-08c-1.38029 1.38071-3.61853 1.38105-4.99924.000755266 -.000251743-.000251667-.000503447-.000503371-.000755114-.000755114v0l2.64497e-07 2.64417e-07c-1.38071-1.38029-1.38105-3.61853-.000755643-4.99924 .000251667-.000251743.000503371-.000503447.000755114-.000755114l1.5-1.5"></path>
        <path d="M12 7l1.5-1.5 -2.9422e-07 2.94309e-07c1.38029-1.38071 3.61853-1.38105 4.99924-.000755703 .000251743.000251667.000503447.000503371.000755114.000755114v0l-3.60187e-08-3.60078e-08c1.38071 1.38029 1.38105 3.61853.000755186 4.99924 -.000251667.000251743-.000503371.000503447-.000755114.000755114l-1.5 1.5"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24Z"></path>
    </>
  )
})

export default memo(BrokenLinkUnlinkAttachment1)
