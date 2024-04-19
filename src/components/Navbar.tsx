import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="sidebar">
      <div className="buttons-user">
        <NavLink to='/home' end className='btn-full'>Perfil</NavLink>
        <NavLink to='/content' end className='btn-full'>Contenido</NavLink>
        <NavLink to='/projects' end className='btn-full'>Proyectos</NavLink>
        <NavLink to='/contact' end className='btn-full'>Contacto</NavLink>
      </div>
    </nav>
  )
}
