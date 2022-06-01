// URL de referência: https://chakra-ui.com/docs/components/recipes/floating-labels

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px) translateX(-10px)'
}

const form = {
  parts: [],
  baseStyle: {},
  sizes: {},
  variants: {
    floating: {
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles
          }
        },
        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
          {
            ...activeLabelStyles
          },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: 'absolute',
          backgroundColor: 'white',
          pointerEvents: 'none',
          mx: 3,
          px: 1,
          my: 2
        }
      }
    }
  },
  defaultProps: {
    //variant: 'floating'
  }
}

export default form
