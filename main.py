#módulos:
import json
import os.path
import random
from typing import Optional, Literal
from uuid import uuid4
from fastapi import FastAPI, HTTPException
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel

#criando objeto fastapi:
app = FastAPI()

#classe livro
class Book (BaseModel):
    name:  str
    price: float
    book_id: Optional[str] = uuid4().hex
    genre: Literal["fiction", "non-fiction"]



#arquivo JSON:
BOOKS_DATABASE = []
BOOKS_FILE = "books.json"

#carregando arquivos em JSON
if os.path.exists(BOOKS_FILE):
    with open (BOOKS_FILE, "r") as f:
        BOOKS_DATABASE = json.load(f)

#/ -> boas vindas
@app.get("/")
async def home():
    return "Welcome do my bookstore"

#/list-books -> listar todos os livros
@app.get("/list-books")
async def list_books():
    return {"books": BOOKS_DATABASE }

#/list-book-by-index/{index} -> listar 1 livro
@app.get("/list-book-by-index/{index}")
async def list_book_by_index(index : int):
    if index < 0 or index >= len(BOOKS_DATABASE):
        raise HTTPException(404, "Index out of range")
    else:
        return {"book": BOOKS_DATABASE[index]}

#/get-random-book -> indicar livro aleatório
@app.get("/get-random-book")
async def random_book():
    return random.choice(BOOKS_DATABASE)

#/add-book -> adicionar novo livro
@app.post("/add-book")
async def add_book(book : Book):
    book.book_id = uuid4().hex
    json_book = jsonable_encoder(book)
    BOOKS_DATABASE.append(json_book)

    with open(BOOKS_FILE, "w") as f:
        json.dump(BOOKS_DATABASE, f)
    return {"message": f'Book {book} was added'}

