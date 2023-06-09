import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'



const Navbar = () => {

    let handleClick=()=>{
        localStorage.removeItem('token');
    }
    let location = useLocation();
    useEffect(() => {

      }, [location]);
      
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                            </li>
                            
                        </ul>
                        <div className="d-flex">
                        {!localStorage.getItem('token') ?<div>
                        <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link></div>
                        :<Link className="btn btn-primary mx-2" to="/login" role="button" onClick={handleClick}>LogOut</Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
