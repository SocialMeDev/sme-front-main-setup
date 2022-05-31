const createElement = (tag, attributes = {}, styles) => {
  const element = document.createElement(tag)

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'class') {
      element.classList.add(value)
    }

    element.setAttribute(key, value)
  })

  element.setAttribute('style', styles)

  return element
}

export default createElement
