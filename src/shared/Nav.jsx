import React, { useContext } from 'react'
import { motion } from "motion/react"
import { Link, NavLink } from 'react-router-dom'
import AuthContex from '../context/AuthContext'
import logo from '../assets/logo.png'

export default function Nav() {

    const { user,logOut } = useContext(AuthContex);

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            console.log("logout successfully")
        })
        .then(error=>{
            console.log("error happend for logout: ",error)
        })
    }

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addjob'}>Add Job</NavLink></li>       
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex gap-2 items-center'>
                    <img className='w-12' src={logo} alt="logo" />
                    <Link to={'/'}><button className="text-2xl font-bold">
                        <motion.span
                        animate={{color:["#5e32a8","#8932a8","#fc05f4"]}}
                        transition={{duration:5,repeat:Infinity}}
                        >
                        JOb Portal
                        </motion.span></button></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                {
                    user ?
                        <>
                            <button onClick={handleLogOut} className='btn'>Log Out</button>
                        </>
                        :
                        <>
                            <Link to={'/register'}>Register</Link>
                            <Link to={'/login'}><button className="btn">Login</button></Link>
                        </>
                }

            </div>
        </div>
    )
}
