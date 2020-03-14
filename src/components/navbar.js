import React from 'react'
import { NavLink } from 'react-router-dom'

export default function navbar() {
    return (
        <div className="navbar-wrapper">
            <NavLink to="/">Star Wars Cheat Sheet</NavLink>
            <NavLink to="/people">People</NavLink>
            <NavLink to="/planets">Planets</NavLink>
            <NavLink to="/species">Species</NavLink>
        </div>
    )
}