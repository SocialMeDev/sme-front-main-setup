import Development from './development'
import Error from './error'
import Variables from './variables'

const Request = {
  Error,
  ...Development,
  ...Variables
}

export default Request
