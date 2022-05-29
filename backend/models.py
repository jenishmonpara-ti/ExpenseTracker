from pydantic import BaseModel
import datetime
import time

class Expense(BaseModel) : 
        _id : str
        expenseID : int
        date : str
        category : str
        amount : int

class ExpenseSplit() : 
        id : int
        category : str
        amount : int
        def __init__(self, cat : str, am : int) : 
                self.category = cat
                self.amount = am

