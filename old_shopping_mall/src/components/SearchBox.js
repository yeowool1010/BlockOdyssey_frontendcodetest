import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/SearchBox.css";
import { Search } from "../redux/searchSlice";
import { Category } from "../categoryDummy/CategoryDummy";

/**
 * @author yeowool
 * @description 상품 카테고리(category)와 검색 키워드(searchInput) ListBox로 전달
 **/

function SearchBox() {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search.value);
  const getCategorie = search.category;
  const getSearchInput = search.searchInput;

  const [selectedCtegory, setSelectedCtegory] = useState(Category[0]);
  const [searchInput, setSearchInput] = useState(getSearchInput);

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
  };

  return (
    <section id="search-box">
      <h2>상품 검색</h2>
      <form onSubmit={handleSubmit} className="search-inner">
        <select id="select-box" onChange={onSelectCategory}>
          {Category.map((menu, idx) => (
            <option key={idx} value={menu} selected={getCategorie === menu}>
              {menu}
            </option>
          ))}
        </select>
        <input
          onChange={onChangeSearchInput}
          className="input-box"
          type="text"
          placeholder="입력하세요."
          value={searchInput}
        ></input>
        <button type="submit" className="search-btn">
          조회
        </button>
      </form>
    </section>
  );
}

export default SearchBox;
