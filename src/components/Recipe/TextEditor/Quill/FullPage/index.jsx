import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('./component'), {
  ssr: false
})

export default function QuillFullPage({ initialHtml, setHtml }) {
  return <Editor initialHtml={initialHtml} setHtml={setHtml} />
}
