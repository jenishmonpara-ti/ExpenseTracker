from pydantic import BaseModel
import datetime

class Expense(BaseModel) : 
        _id : str
        expenseID : int
        date : str
        category : str
        amount : int

class ExpenseSplit(BaseModel) : 
        category : str
        amount : int
        def __init__(self, cat, am) : 
                self.category = cat
                self.amount = am

