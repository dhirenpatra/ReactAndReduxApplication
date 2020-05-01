import React from 'react'
import {NavLink, Link} from 'react-router-dom'


const Header = () => {

    const activeStyle = {
        color : "#F15B2A"
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Google</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" 
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact activeStyle={activeStyle} >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/courses" activeStyle={activeStyle} >Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeStyle={activeStyle} exact>About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
