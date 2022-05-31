import { useSettings } from 'contexts/Settings/Provider'

export default function useSizeValue(sm, md, lg) {
  if (!sm && !md && !lg) return
  const loadedContext = useSettings()
  if (!loadedContext) {
    return md || sm || lg
  }
  const { size } = useSettings()
  if (size === 'small') return sm
  if (size === 'large') return lg

  return md
}
