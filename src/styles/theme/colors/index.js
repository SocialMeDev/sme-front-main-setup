import customColors from 'constants/colors'

const colors = {
  gray: {
    50: '#EEEEF2',
    100: '#D1D2DC',
    200: '#B3B5C6',
    300: '#9699B0',
    400: '#797D9A',
    500: '#6164B0',
    600: '#4B4D63',
    700: '#353646',
    800: '#1F2029',
    900: '#181B23'
  },
  yellow: {
    50: '#fffadd',
    100: '#fcf1b3',
    200: '#f8e885',
    300: '#f6de56',
    400: '#f3d529',
    500: '#d9bc11',
    600: '#a99209',
    700: '#796804',
    800: '#483f00',
    900: '#1a1500'
  }
}

function onPreparation() {
  for (const key in customColors) {
    colors[key] = customColors[key]
  }
}

onPreparation()

export default colors
