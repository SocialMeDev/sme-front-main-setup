import FormsManagerProvider from './contexts/FormsManager/Provider'
import Component from './component'

export default function Index({ routes, pathnameKey }) {
  return (
    <FormsManagerProvider routes={routes} pathnameKey={pathnameKey}>
      <Component />
    </FormsManagerProvider>
  )
}
