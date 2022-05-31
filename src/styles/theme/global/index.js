import quill from './quill'
import root from './root'
import acessibility from './acessibility'

const global = {
  global: () => {
    return {
      ':root': { ...root },
      ...acessibility,
      ...quill
    }
  }
}

export default global
