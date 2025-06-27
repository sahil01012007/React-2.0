import React from 'react'

function Button(props) {

  return (
    <>
    <button 
          onClick={() => props.setColour(props.colour)}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor: props.colour}}
          >{props.colour}</button>
        
    </>
          
  )
}

export default Button
