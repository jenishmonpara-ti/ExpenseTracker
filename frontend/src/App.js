import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './MyComponents/Header'
import AllExpenses from './MyComponents/AllExpenses';
import AddExpense from './MyComponents/AddExpense';
import ExpenseSplitView from './MyComponents/ExpenseSplit';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Routes,
	Link
} from "react-router-dom";


function App() {
	return (
		<>
			<Router>

				<Header arg1="sample arg" SearchBar={false} />

				{/* add date picker here */}
				
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
	);
}

export default App;
