import BookItem from "./BookItem";

const BookList = ({ books = [], onDelete }) => {
  if (!books.length) {
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
