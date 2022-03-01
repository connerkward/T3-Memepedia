import React from "react";
import { useState } from "react";
import UploadPanel from "./UploadPanel";

function SearchBar({ photoUpload }) {
  const [text, setText] = useState("");
  const [uploadActive, setUploadActive] = useState(false);

  // const handleTextChange = (event) => {
  //     setText(event.target.value);
  // }

  const openUploadPanel = (event) => {
    console.log("this should open the upload image panel");
    setUploadActive(!uploadActive);
  };

  // const handleSubmit = (event) => {
  //     // TO DO: handle search submit.
  // }

  return (
    <div>
      <div className="searchBar">
        {/* TODO: ADD SEARCH ICON */}
        <input
          className={uploadActive ? "searchInputUploadActive" : "searchInput"}
          onClick={openUploadPanel}
          onChange={openUploadPanel}
          type="text"
          placeholder="Search for a meme!"
          value={text}
        ></input>
        <button onClick={openUploadPanel}>upload an image</button>
      </div>
      <UploadPanel props={{ uploadActive: uploadActive }} />
    </div>
  );
}

export default SearchBar;
