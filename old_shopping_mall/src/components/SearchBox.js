import React from "react";
import "../styles/SearchBox.css";

function SearchBox() {
  return (
    <section id="search-box">
      <h2 class="">검색</h2>
      <div class="search-inner">
        <select id="select-box">
          <option id="selectOption">전체</option>
          <option id="selectOption">상품명</option>
          <option id="selectOption">브렌드</option>
          <option id="selectOption">상품내용</option>
        </select>
        <input class="input-box" type="text" placeholder="입력하세요."></input>
        <button class="search-btn">조회</button>
      </div>
    </section>
  );
}

export default SearchBox;
