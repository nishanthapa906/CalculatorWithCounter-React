import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div  className='bg-black p-5 text-white space-x-5 text-xl'>

        <NavLink  to='/'  >Home</NavLink>
        <NavLink  to='/about'  >About</NavLink>
        {/* <NavLink  to='/product'  >Product</NavLink> */}
      
    </div>
  )
}

export default Header
