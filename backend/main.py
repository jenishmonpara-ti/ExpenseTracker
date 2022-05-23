# main.py
from fastapi import FastAPI

app = FastAPI()

# run "uvicorn main:app --reload"
# used --reload => updating application code, the server will reload automatically.
# type "http://127.0.0.1:8000/getmethat" to fetch resource that root() has to offer
# http://127.0.0.1:8000/docs provides automatic interactive API documentation
@app.get("/getmethat")
async def root():
    return {"message": "Hello World"}

# "http://127.0.0.1:8000/getmethis?x=20" sample
@app.get("/getmethis")
async def root(x : int):
    return x