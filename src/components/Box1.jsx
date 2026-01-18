import React from 'react'
import Box2 from './Box2'

function Box1({x,getData}) {
    console.log(x)
  return (
    <div>
        Box1
        <Box2  x={x} getData={getData} />
      
    </div>
  )
}

export default Box1
