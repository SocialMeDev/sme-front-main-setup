import Date from './Date'
import Options from './Options'
import Paragraph from './Paragraph'
import ShortAnswer from './ShortAnswer'
import Time from './Time'

export default function ContentQuestion({ question }) {
  switch (question.kind) {
    case 'SHORT_TEXT':
      return <ShortAnswer />
    case 'LONG_TEXT':
      return <Paragraph />
    case 'SINGLE_SELECTION_BOX':
    case 'MULTIPLE_SELECTION_BOX':
    case 'SINGLE_SELECTION_LIST':
      return <Options question={question} kind={question.kind} />
    case 'SINGLE_FILE_UPLOAD':
      return 'Upload de arquivo'
    case 'DATE':
      return <Date />
    case 'TIME':
      return <Time />
    default:
      return 'Desconhecido'
  }
}
