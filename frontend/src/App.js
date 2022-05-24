import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './MyComponents/Header'
import SumOfExpenses from './MyComponents/SumOfExpenses';
import AllExpenses from './MyComponents/AllExpenses';
import AddExpense from './MyComponents/AddExpense';
import Footer from './MyComponents/Footer';

function App() {
  return (
    <>
    
      <Header arg1 = "sample arg" SearchBar = {false}/>

      <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
        <h1 className="card text-white bg-primary mb-5" styleName="max-width: 20rem;">Expense Manager</h1>
      </div>

      <div className = "App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}}>
        <AddExpense/>
        
      </div>
      
      <SumOfExpenses/>
      <Footer/>
    
      
    </>
  );
}

export default App;
