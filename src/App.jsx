import { React, useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import {fetch} from './services/getValue.js';

function App() {
  const [value, setValue] = useState("");
  const [apiStore, setAPIStore] = useState(null);

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  const handleClick = async () => {
    // Movie name store in a value field
    const response = await fetch(value);
    setAPIStore(response);

    // console.log('apiStore: ',apiStore);
    // console.log(`Response`, response);
  };

  useEffect(()=> {
    console.log('apiStore useEffect: ',apiStore);
  }, [apiStore])

  return (
    <div className="container">
      {/* Search section */}
      <div className="search-container">
        <input
          type="text"
          className="movieName"
          placeholder="Enter a movie's name"
          onChange={handleValueChange}
          value={value}
        />
        <button className="searchBtn" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="result">
        {apiStore && <Card data={apiStore} />}
      </div>
      {/* End of search section */}
    </div>
  );
}

export default App;
