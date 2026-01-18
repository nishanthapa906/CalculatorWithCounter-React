import React from 'react'
import Box3 from './Box3'
import Product from '../pages/Product'

function Box2({x,getData}) {
  return (
    <div>

        Box2
      
      <Box3  x={x} getData={getData}  />
    </div>
  )
}

export default Box2

