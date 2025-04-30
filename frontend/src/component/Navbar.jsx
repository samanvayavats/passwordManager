import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='bg-sky-950 h-15 flex justify-around text-teal-50 items-center'>
            <div className='flex gap-0.5'>
                <lord-icon
                    src="https://cdn.lordicon.com/fgxwhgfp.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#ffffff"
                >
                </lord-icon>
            </div>

            <ul className='text-amber-50 flex gap-5 justify-center'>
              <li>Home </li>
              <li>About</li>
              <li>Github</li>


                {/* <li key="home"><NavLink to="/">Home</NavLink></li>
                <li key="about"><NavLink to="/about">About</NavLink></li>
                <li key ="github"><NavLink to="/github">Github</NavLink></li> */}
            </ul>
        </div>
    )
}

export default Navbar

