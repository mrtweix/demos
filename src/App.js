import React, { useEffect, useRef } from "react";
import InfiniteScroll from "./InfiniteScroll";
import PhotoSize from "./PhotoSize";
import ReactSelect from "./ReactSelect";
import { options } from "./SelectOptions";
import XYZTest from "./XYZTest";

function App() {
  const selectRef = useRef();
  const setValue = (e) =>
    e?.length ? e?.map((e) => console.log(e.value)) : console.log(null);

  useEffect(() => {
    if (window !== undefined) {
      selectRef?.current?.focus();
    }
  }, []);
  return (
    <div className="demo">
      {/* <XYZTest />
      <br />
      <InfiniteScroll />
      <PhotoSize /> */}
      <ReactSelect
        ref={(event) => (selectRef.current = event)}
        data={options}
        isMulti
        isSearchable
        handleChange={setValue}
      />
    </div>
  );
}

export default App;
