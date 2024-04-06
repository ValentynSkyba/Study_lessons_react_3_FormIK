import React, { useEffect, useState } from "react";
import AddForm from "./Components/AddForm/AddForm";
import BookList from "./Components/Books/BookList";
import booksData from "../../assets/books.json";
import SearchBar from "./Components/SearchBar/SearchBar";
import { toast } from "react-toastify";

const BookStore = () => {
  const [books, setBooks] = useState(() => {
    const savedBooks = JSON.parse(window.localStorage.getItem("books"));
    if (savedBooks?.length) {
      return savedBooks;
    }
    return booksData;
  });

  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    window.localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const sortData = () => {
    setBooks((prev) => prev.sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleDelete = (id) => {
    console.log(id);
    setBooks((prev) => prev.filter((item) => item.id !== id));
    sortData();
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

  const addBook = (book) => {
    const isExist = books.some(
      (item) => item.name === book.name && item.author === book.author
    );
    if (isExist) {
      return toast.error("Книга з таким назвою вже існує");
    }
    setBooks((prev) => [book, ...prev]);
    toast.success("Книга додана");
    sortData();
  };

  return (
    <div>
      <h1>BookShelf</h1>
      <AddForm addBook={addBook} />
      <SearchBar searchStr={searchStr} setSearchStr={setSearchStr} />
      <BookList
        searchStr={searchStr}
        books={filteredData}
        onDelete={handleDelete}
      />
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
