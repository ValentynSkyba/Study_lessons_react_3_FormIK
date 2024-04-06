import BookItem from "./BookItem";

const BookList = ({ books = [], onDelete, searchStr }) => {
  if (!books.length && searchStr) {
    return <h3>Search query is not valid</h3>;
  } else if (!books.length) {
    return <h3>No books found</h3>;
  }
  return (
    <ul>
      <h2>Book List</h2>
      {books.map((book) => (
        <BookItem item={book} key={book.id} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default BookList;
