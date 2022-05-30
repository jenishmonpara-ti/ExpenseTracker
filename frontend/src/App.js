import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './MyComponents/Header'
import AllExpenses from './MyComponents/AllExpenses';
import AddExpense from './MyComponents/AddExpense';
import ExpenseSplitView from './MyComponents/ExpenseSplit';

function App() {
	return (
		<>

			<Header arg1="sample arg" SearchBar={false} />

		</>
	);
}

export default App;
