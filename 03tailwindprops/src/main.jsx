import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'

let myObj = {
  name: 'John',
  age: 30,
  country: 'USA'
}

let newArr = ['UK', 'US']

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card country = "australia" />
    <Card country = {newArr[0]} />
  </StrictMode>,
)
