/* eslint-disable */
import { Link, useMatch, useResolvedPath  } from "react-router-dom"
import React from "react"

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">Studicus</Link>
        <ul>
            <CustomLink to="/Create">Create</CustomLink>
            <CustomLink to="/Join">Join</CustomLink>
            <CustomLink to="/Messages">Messages</CustomLink>
            <CustomLink to="/User">User</CustomLink>
            <CustomLink to="/Theme">Theme</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props}){
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({path: resolvedPath.pathname, end : true})
    return(
        <li className={isActive? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    )
}