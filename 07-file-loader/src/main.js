import createHeading from './heading.js'
import icon from './icon.png'
import './main.css'

console.log(icon);

const heading = createHeading()

document.body.append(heading)

const img = new Image()
img.src = icon

document.body.append(img)
