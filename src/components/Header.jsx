import React from 'react'
import { Link } from 'react-router-dom';


export default function Header(props) {
let styleTemp = {
  backgroundColor: "rgb(116 106 202)",
  color: "aliceblue " 
}
  return (
    <div >
        {props.searchBar? <nav className="navbar navbar-expand-lg navbar-dark text-primary" style={styleTemp}>
           <div className="container-fluid">
            <Link className="navbar-brand" to="/">To Do List</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">about</Link>
                </li>
                
              </ul>
               <form className="d-flex" role="search">
                <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>: "no search bar"}
    </div>
    )
}
// bg-body-tertiary