import React from 'react'
import PropTypes from 'prop-types'  // for type defining

export default function Header(props) {
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#" align = 'center'>Expense Tracker</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {/* <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Task Manager</h1> */}
      {props.SearchBar ? <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> : ""}
    </div>
  </div>
</nav>


</>

  )
}


Header.defaultProps = {
  title : "Default String for arg",
}

// typedefining the props
Header.protoTyps = {
  arg1 : PropTypes.string,
  SearchBar : PropTypes.bool.isRequired   // isRequired makes it compulsion to assign value to attribute in code
}

