import React, { useState } from "react";
import AddForm from "./Components/AddForm/AddForm";
import BookList from "./Components/Books/BookList";
import booksData from "../../assets/books.json";
import SearchBar from "./Components/SearchBar/SearchBar";

const BookStore = () => {
  const [books, setBooks] = useState(booksData);
  const [searchStr, setSearchStr] = useState("");

  const handleDelete = (id) => {
    console.log(id);
    setBooks((prev) => prev.filter((item) => item.id !== id));
  };

  const getFilteredData = () => {
    return books.filter(
      (item) =>
        item.name.toLowerCase().includes(searchStr.toLowerCase()) ||
        item.author.toLowerCase().includes(searchStr.toLowerCase()) ||
        item.description.toLowerCase().includes(searchStr.toLowerCase())
    );
  };
  const filteredData = getFilteredData();

  return (
    <div>
      <h1>BookShelf</h1>
      <AddForm />
      <SearchBar searchStr={searchStr} setSearchStr={setSearchStr} />
      <BookList books={filteredData} onDelete={handleDelete} />
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
