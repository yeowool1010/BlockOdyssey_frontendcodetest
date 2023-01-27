import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/SearchBox.css";
import { Search } from "../redux/searchSlice";

/**
 * @author yeowool
 * @description 상품 목록검색 조건과 검색 키워드 return
 **/

const searchMenus = ["상품명", "브랜드", "상품내용"];

function SearchBox() {
  const [selectedCtegory, setSelectedCtegory] = useState("전체");
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();

  const onSelectCategory = (e) => {
    e.preventDefault();
    setSelectedCtegory(e.target.value);
  };

  const onChangeSearchInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Search({ category: selectedCtegory, searchInput: searchInput }));
    // console.log("넘기는 값:" + selectedCtegory, searchInput);
  };

  return (
    <section id="search-box">
      <h2>상품 검색</h2>
      <form onSubmit={handleSubmit} className="search-inner">
        <select id="select-box" onChange={onSelectCategory}>
          <option id="selectOption" value="전체">
            전체
          </option>
          {searchMenus.map((menu, idx) => (
            <option key={idx} value={menu}>
              {menu}
            </option>
          ))}
        </select>
        <input
          onChange={onChangeSearchInput}
          className="input-box"
          type="text"
          placeholder="입력하세요."
        ></input>
        <button type="submit" className="search-btn">
          조회
        </button>
      </form>
    </section>
  );
}

export default SearchBox;
