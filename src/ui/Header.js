import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES_PATH } from '../config/path.config';

export default function Header() {

  const {root, home, about } = ROUTES_PATH;

  return (  
    <div className='has-background-primary'>
    <div className='container has-text-white'>
        <div className='section'>
        <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link className="signpainterhouseslant navbar-item is-size-3 is-weight-bold has-text-primary-light hover-primary" to={root.path}>
       BulmaTutorial
    </Link>

    <Link role="button" className="navbar-burger hover-primary" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </Link>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start text-right-align is-flex-grow-1 is-justify-content-flex-end mr-4">
      <NavLink to={root.path} className={({isActive})=> isActive ? 'bbc has-text-weight-semibold active navbar-item hover-primary':'bbp has-text-weight-semibold navbar-item hover-primary'}>
        {home.name}
      </NavLink>

      <NavLink to={about.path} className={({isActive})=> isActive ? 'bbc has-text-weight-semibold active navbar-item hover-primary':'bbp has-text-weight-semibold navbar-item hover-primary'}>
        {about.name}
      </NavLink>

    </div>

    <div className="navbar-end line-virtcle">
      <div className="navbar-item">
        <div className="buttons">
          <Link className="button is-primary">
            <strong>Sign up</strong>
          </Link>
          <Link className="button is-light">
            Log in
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
        </div>

    </div>
    </div>  
  )
}
