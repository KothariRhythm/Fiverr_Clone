import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation();

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive)

        return ()=>{
            window.removeEventListener('scroll',isActive)
        }
    },[])

    const currentUser = {
        id:1,
        username:"Rhythm Kothari",
        isSeller:true
    }

  return (
    <div className={active || pathname!=='/' ? "navbar active" : "navbar "}>
        <div className="container">
            <div className="logo">
                <Link to='/' className='link'>
                    <span className='text'>fiverr</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Business Solutions</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                <span>Sign in</span>
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://static3.depositphotos.com/1000819/143/i/450/depositphotos_1434982-stock-photo-gothic-fire-font-letter-r.jpg" alt=""/>
                        <span>{currentUser.username}</span>
                        {open &&
                            <div className="options">
                                {currentUser.isSeller && (
                                    <>
                                        <Link className='link' to='/mygigs'>Gigs</Link>
                                        <Link className='link' to='/add'>Add new Gig</Link>
                                    </>
                                )}
                                <Link className='link' to='/orders'>Orders</Link>
                                <Link className='link' to='/messages'>Messages</Link>
                                <Link className='link' to='/'>Log Out</Link>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>

        {(active || pathname!=='/') && (
            <>
                <hr/>
                <div className="menu">
                    <Link to='/' className='link menulink'>Graphics & Design</Link>
                    <Link to='/' className='link'>Programming & Tech</Link>
                    <Link to='/' className='link'>Digital Marketing</Link>
                    <Link to='/' className='link'>Video & Animation</Link>
                    <Link to='/' className='link'>Writing & Translation</Link>
                    <Link to='/' className='link'>Music & Audio</Link>
                    <Link to='/' className='link'>Business</Link>
                    <Link to='/' className='link'>Data</Link>
                    <Link to='/' className='link'>Photography</Link>
                    <Link to='/' className='link'>AI Services</Link>
                </div>
                <hr />
            </>
        )}
    </div>
  )
}

export default Navbar
