import React from "react";
import InfiniteScroll from "./InfiniteScroll";
import PhotoSize from "./PhotoSize";
import ReactSelect from "./ReactSelect";
import { options } from "./SelectOptions";
import XYZTest from "./XYZTest";

function App() {
  const setValue = (e) => console.log(e);
  return (
    <div className="demo">
      {/* <XYZTest />
      <br />
      <InfiniteScroll /> */}
      <PhotoSize />
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
