import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link path='/' className="navbar-brand">Expance Management</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link  path ='/' className="nav-link active" aria-current="page" >Home</Link>
        </li> */}
        <li className="nav-item">
          <Link path='/user'  className="nav-link" >USER</Link>
        </li>


      </ul>

    </div>
  </div>
</nav>
    </>
  )
}

export default Header
