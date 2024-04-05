const SearchBar = ({ searchStr, setSearchStr }) => {
  return (
    <div>
      <input
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
        type="text"
        className="input"
        placeholder="Enter book name or author..."
      />
      {searchStr && (
        <button className="btn border" onClick={() => setSearchStr("")}>
          Reset
        </button>
      )}
    </div>
  );
};

export default SearchBar;
