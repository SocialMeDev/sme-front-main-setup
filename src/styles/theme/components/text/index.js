const text = {
  parts: [],
  baseStyle: {
    fontSize: 'sm'
  },
  sizes: {},
  variants: {
    weak: ({ colorMode }) => ({
      color: colorMode === 'light' ? 'gray.300' : 'whiteAlpha.600'
    })
  },
  defaultProps: {}
}

export default text
