import React, { useState } from "react"
// import { LinkData } from "../assets/data/dummydata"
import { NavLink } from "react-router-dom"
import {  BiUser } from "react-icons/bi"
import { HiOutlineMenuAlt1} from "react-icons/hi"

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className='bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full'>
        <div className='container flex justify-between items-center'>
          <div className='logo flex items-center gap-6'>
            {/* <img src={LogoImg} alt='logo' className='h-5' /> */}
            <h1 className="text-3xl font-extrabold">Logo</h1>

          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className='flex items-center gap-5'>
              <li>
              <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => (isActive ? "text-green-600 font-semibold text-sm" : "text-[15px]")} to='/'>
              Home
            </NavLink>
              </li>
              <li>
              <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => (isActive ? "text-green-600 font-semibold text-sm" : "text-[15px]")} to='/Course'>
              Course
            </NavLink>
              </li>
              <li>
              <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => (isActive ? "text-green-600 font-semibold text-sm" : "text-[15px]")} to='/Assessment'>
              Assignment
            </NavLink>
              </li>
              <li>
              <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => (isActive ? "text-green-600 font-semibold text-sm" : "text-[15px]")} to='/Schedule'>
              DashBoard
            </NavLink>
              </li>
            </ul>
          </nav>
          <div className='account flex items-center gap-5'>
            <button>
              <NavLink className={({ isActive }) => (isActive ? "text-primary text-sm" : "text-[15px]")} to='/Profile'>
              <BiUser size={25} />
            </NavLink>
            </button>
            <button>
            <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => (isActive ? "text-primary text-sm" : "text-[15px]")} to='/Login'>Login</NavLink>
            </button>{" "}
            <button className='open-menu' onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}


            //  {LinkData.map((link) => (
            //     <li key={link.id} onClick={() => setOpen(null)}>
            //       <NavLink className={({ isActive }) => (isActive ? "text-primary text-sm" : "text-[15px]")} to={link.url}>
            //         {link.title}
            //       </NavLink>
            //     </li>
            //   ))}