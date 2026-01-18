import { useContext } from "react"
import { ValueContext } from "../context/ValueProvider"

function Box3({x,getData}) {
    let fullName="ram"
getData(fullName)

const data=useContext(ValueContext)
console.log("data-",data)


  return (
    <div>
      
      Box3={x}
      <h1>{fullName}</h1>
    </div>
  )
}

export default Box3
