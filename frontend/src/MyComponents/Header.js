import React from 'react'
import PropTypes from 'prop-types'  // for type defining
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Routes,
	Link
} from "react-router-dom";
import AddExpense from './AddExpense';
import AllExpenses from './AllExpenses';
import ExpenseSplitView from './ExpenseSplit';


export default function Header(props) {
	return (
		<>
			<Router>
				<nav className="navbar navbar-expand-lg bg-light">
					<div className="container-fluid">
						{/* <a className="navbar-brand" href="#" align = 'center'>Expense Tracker</a> */}
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">

								<li class="nav-item">
									<Link class="nav-link" to="/addexpense">Add Expense</Link>
								</li>

								<li class="nav-item">
									<Link class="nav-link" to="/allexpenses" >All Expenses</Link>
								</li>

								<li class="nav-item">
									<Link class="nav-link" to="/expensesplit" >Expense Split</Link>
								</li>


							</ul>
							{/* <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Task Manager</h1> */}
							{props.SearchBar ? <form className="d-flex" role="search">
								<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success" type="submit">Search</button>
							</form> : ""}
						</div>
					</div>
				</nav>

				<Routes>
					<Route path="/addexpense" element={
						<>
							<div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{ "width": "400px", "backgroundColor": "white", "marginTop": "15px" }}>
								<br />
								<h1 className="card text-white bg-primary mb-5" styleName="max-width: 20rem;">Expense Manager</h1>

								<br />
								<br />
								<AddExpense />
							</div>
						</>


					} />
					<Route path="/allexpenses" element={
						<>
							<div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{ "width": "400px", "backgroundColor": "white", "marginTop": "15px" }}>
								<br />
								<h1 className="card text-white bg-primary mb-5" styleName="max-width: 20rem;">Expense Manager</h1>

								<br />
								<br />
								<AllExpenses />
							</div>
						</>
					} />
					<Route path="/expensesplit" element={
						<>
							<div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{ "width": "400px", "backgroundColor": "white", "marginTop": "15px" }}>
								<br />
								<h1 className="card text-white bg-primary mb-5" styleName="max-width: 20rem;">Expense Manager</h1>

								<br />
								<br />
								<ExpenseSplitView />
							</div>
						</>
					} />

				</Routes>

			</Router>
		</>

	)
}



Header.defaultProps = {
	title: "Default String for arg",
}

// typedefining the props
Header.protoTyps = {
	arg1: PropTypes.string,
	SearchBar: PropTypes.bool.isRequired   // isRequired makes it compulsion to assign value to attribute in code
}

