import React from "react";
import ListBox from "./components/ListBox";
import SearchBox from "./components/SearchBox";

function Main() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>박여울 과제 제출</h1>
      </header>
      <SearchBox />
      <ListBox />
    </main>
  );
}

export default Main;
