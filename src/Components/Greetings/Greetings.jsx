import React from 'react'
import "./Greetings.css"

function Greetings(props) {
    console.log(props)
  return (
    <div>        
        <h2>{props.children}</h2>
    </div>
  )
}

export default Greetings