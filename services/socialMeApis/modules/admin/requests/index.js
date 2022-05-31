import Development from './development'
import Error from './error'
import Variables from './variables'

const Request = {
  ...Development,
  Error,
  ...Variables
}

export default Request
