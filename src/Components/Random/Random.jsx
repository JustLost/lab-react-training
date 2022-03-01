import React, { useState } from 'react'


function Random(props) {
    const [randomNum, setRandomNum] = useState(props)
    const randomInteger = () => {
        setRandomNum(Math.floor(Math.random() * ({randomNum.max} - min + 1)) + min);
    }
  return (
    <div>
        <h2> Random value between 1 and {props.max} =>  </h2>
        
    </div>
  )
}

export default Random