import { useState, useEffect } from 'react'

export default function useDraggable(className = 'draggable') {
  const [render, setRender] = useState(true)

  useEffect(() => {
    const components = document.getElementsByClassName(className)

    function handleMouseMove({ movementX, movementY, target }) {
      const getStyle = window.getComputedStyle(target)

      const left = parseInt(getStyle.left)
      const top = parseInt(getStyle.top)

      target.offsetHeight

      target.style.left = `${left + movementX}px`
      target.style.top = `${top + movementY}px`
    }

    function handleMouseUp(event) {
      event.target.style.cursor = 'grab'

      event.target.removeEventListener('mousemove', handleMouseMove)
      event.target.removeEventListener('mousedown', handleMouseUp)
    }

    if (components.length > 0) {
      for (let index = 0; index < components.length; index++) {
        const component = components[index]

        component.style.cursor = 'grab'
        component.style.position = 'absolute'

        component.addEventListener('mousedown', (event) => {
          event.target.style.cursor = 'grabbing'

          component.addEventListener('mousemove', handleMouseMove)
        })

        component.addEventListener('mouseup', handleMouseUp)
        component.addEventListener('mouseleave', handleMouseUp)
      }
    }
  }, [render])

  return { setRender }
}
