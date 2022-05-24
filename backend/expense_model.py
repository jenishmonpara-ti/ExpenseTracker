from pydantic import BaseModel
import datetime

class Expense(BaseModel) : 
        _id : str
        expenseID : int
        date : str
        category : str
        amount : int

