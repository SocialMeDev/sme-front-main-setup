import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('./component'), {
  ssr: false
})

export default function QuillFullPage(props) {
  return <Editor {...props} />
}
