import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp () {
  return (
    <div>
      <h1>Hellooo</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser = "SK"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser    // this is an evaluated expression that is we cant write js in it
)

const anotherElement = (
    <div>
      <a href='https://google.com' target='_blank'>Visit Google</a>
    </div>
  
)

createRoot(document.getElementById('root')).render(
  
    //reactElement or <reactElement />
    //MyApp()
    //anotherElement
    reactElement

  
)
