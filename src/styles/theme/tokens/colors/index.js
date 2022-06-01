const getColors = () => {
  return {
    //primary
    primary: {
      default: 'primary.500',
      _dark: 'primary.300'
    },
    lightPrimary: {
      default: 'primary.100',
      _dark: 'primary.600'
    },
    darkPrimary: {
      default: 'primary.600',
      _dark: 'primary.800'
    },
    //texts
    light: {
      default: 'white',
      _dark: '#303030'
    },
    dark: {
      default: '#303030',
      _dark: 'white'
    },
    //borders
    borderColor: {
      default: 'gray.100',
      _dark: 'gray.600'
    },
    borderColorPrimary: {
      default: 'primary.500',
      _dark: 'primary.600'
    },
    //backgrounds
    bgContent: {
      default: 'whiteAlpha.900',
      _dark: 'gray.800'
    },
    bgContentHover: {
      default: 'blackAlpha.50',
      _dark: 'gray.900'
    },
    bgContentPrimary: {
      default: 'primary.500',
      _dark: 'primary.400'
    },
    bgContainer: {
      default: 'gray.50',
      _dark: 'gray.700'
    },
    //feedbacks
    success: {
      default: 'green.500',
      _dark: 'green.400'
    },
    successHover: {
      default: 'green.400',
      _dark: 'green.500'
    },
    danger: {
      default: 'red.500',
      _dark: 'red.400'
    },
    dangerHover: {
      default: 'red.400',
      _dark: 'red.500'
    },
    info: {
      default: 'blue.500',
      _dark: 'blue.400'
    },
    infoHover: {
      default: 'blue.400',
      _dark: 'blue.500'
    },
    warning: {
      default: 'yellow.500',
      _dark: 'yellow.400'
    },
    warningHover: {
      default: 'yellow.400',
      _dark: 'yellow.500'
    }
  }
}

export default getColors()
