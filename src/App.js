import React, { useState, useRef, useCallback } from "react";
import ReactSelect from "./ReactSelect";
import { options, processPhoto } from "./SelectOptions";
import useBookSearch from "./useBookSearch";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  const setValue = (e) => console.log(e);

  return (
    <div className="demo">
      <input type="text" value={query} onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        } else {
          return <div key={book}>{book}</div>;
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>

      <input
        type="file"
        name="photo"
        id="photo"
        accept=".jpg, .jpeg, .png, .bmp, .tiff, .gif"
      />
      <button type="button" onClick={processPhoto}>
        Upload Photo
      </button>
      <div>
        <img alt="" id="input" />
      </div>
      <div>
        <img alt="" id="output" />
      </div>

      <ReactSelect
        data={options}
        isMulti
        isSearchable
        handleChange={setValue}
      />
    </div>
  );
}

export default App;
