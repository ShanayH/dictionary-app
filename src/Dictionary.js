import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  // 3 create useState
  let [keyword, setKeyword] = useState("");

  // 2 make the search function

  // 11 function to handleResponse, you have to use a useState again. 
  function handleResponse(response) {
    // 12 console log this response to check the api is working. 
    // documentation: dictionaryapi.dev 
    console.log(response.data[0]);
  }
  function Search(event) {
    event.preventDefault();

    //    2 you can alert("Searching"); to make sure this is working
    // 8 now you can use the keyword
    // 9 you can use an alert to check so far that it is working
    alert(`Searching for definition of ${keyword}`);
    // 10 use the search function to place your api inside. 
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  //   5 create function for the onChange
  function handleKeywordChange(event) {
    // 6 console.log(event.target.value); to find the info in the search bar
    // console.log(event.target.value);
    //    7 send event.target.value to the setKeyword to use useState
    setKeyword(event.target.value);
  }

  return (
    // 1 make the form
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input
          type="search"
          //   4 use onChange to keep track of what is typed in and give it to useState
          onChange={handleKeywordChange}
          placeholder="Search"
          autoFocus={true}
          autoComplete="off"
          className="search-bar"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}
