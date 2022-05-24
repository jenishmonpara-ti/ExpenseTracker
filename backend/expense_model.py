from pydantic import BaseModel
import datetime

class Expense(BaseModel) : 
        expenseID : int
        date : datetime.date
        category : str
        amount : int

