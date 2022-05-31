const getAcessibility = () => {
  return {
    button: {
      transition: 'all 0.4s',
      rounded: 'md'
    },
    'a, button': {
      outline: '2px solid transparent',
      transition: 'all 0.4s',
      _focus: {
        boxShadow: `0 0 0 3px #90CDF4 !important`
      }
    },
    '.input, input, textarea, select': {
      borderRadius: 'var(--chakra-radii-md) !important',
      _focus: {
        boxShadow: `0 0 0 2px #90CDF4 !important`,
        borderColor: `#90CDF4 !important`
      }
    }
  }
}

export default getAcessibility()
