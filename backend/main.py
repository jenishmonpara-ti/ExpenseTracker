# main.py
from fastapi import FastAPI

app = FastAPI()

# run "uvicorn main:app --reload"
# used --reload => updating application code, the server will reload automatically.
# type "http://127.0.0.1:8000/getmethat" to fetch resource that root() has to offer
# http://127.0.0.1:8000/docs or /redoc provides automatic interactive API documentation
@app.get("/getmethat")
async def root():
    return {"message": "Hello World"}

# "http://127.0.0.1:8000/getmethis?x=20" sample
@app.get("/getmethis")
async def root(x : int):
    return x

# "http://127.0.0.1:8000/getme/{which}" sample
@app.get("/getme/{which}/{two}")
async def root(which : int, two : bool):
    return which


from pydantic import BaseModel
from typing import Optional

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None


@app.post("/items/")
async def create_item(item: Item):
    return item