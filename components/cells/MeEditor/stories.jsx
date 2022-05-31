import { useRef } from 'react'
import MeEditor from '.'

export default {
  component: MeEditor,
  title: 'Cell/MeEditor/Basic/_1',
  args: {},
  argTypes: {}
}

export const Common = () => {
  const editorRef = useRef()

  return <MeEditor ref={editorRef} />
}
