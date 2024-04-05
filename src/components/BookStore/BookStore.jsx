import React, { useState } from "react";
import AddForm from "./Components/AddForm/AddForm";
import BookList from "./Components/Books/BookList";
import SerchBar from "./Components/SerchBar/SerchBar";
import booksData from "../../assets/books.json";

const BookStore = () => {
  const [books, setBooks] = useState(booksData);
  console.log(books);
  return (
    <div>
      <h1>BookShelf</h1>
      <AddForm />
      <SerchBar />
      <BookList books={books} />
    </div>
  );
};

export default BookStore;

// 1
// Щаблон для структури
// Книга
// Список Книг
// Додавання книги
// Пошук по автороу або назві
// 2
// Отримання та відмольовку даних
