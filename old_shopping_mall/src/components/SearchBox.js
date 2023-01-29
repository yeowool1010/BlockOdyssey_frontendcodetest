import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/SearchBox.css";
import { Search } from "../redux/searchSlice";
import { Category } from "../categoryDummy/CategoryDummy";

/**
 * @author yeowool
 * @description 상품 카테고리(category)와 검색 키워드(searchKeyword) 전역으로 관리하여 다른 컴포넌트에서 사용 가능하도록 함
 **/

function SearchBox() {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search.value);
  const getCategorys = search.category;
  const getSearchInput = search.searchKeyword;

  const [selectedCtegory, setSelectedCtegory] = useState(Category[0]);
  const [searchKeyword, setSearchInput] = useState(getSearchInput);

  const onSelectCategory = (e) => {
    setSelectedCtegory(e.target.value);
  };

  const onChangeSearchKeyword = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      Search({ category: selectedCtegory, searchKeyword: searchKeyword })
    );
  };

  const moveFocus = (e) => {
    if (e.keyCode === 13) {
      document.getElementById("search-input").focus();
    }
  };

  return (
    <section id="search-box">
      <h2>상품 검색</h2>
      <form onSubmit={handleSubmit} className="search-inner">
        <select
          id="select-box"
          onChange={onSelectCategory}
          onKeyDown={moveFocus}
        >
          {Category.map((menu, idx) => (
            <option key={idx} value={menu} selected={getCategorys === menu}>
              {menu}
            </option>
          ))}
        </select>
        <input
          id="search-input"
          onChange={onChangeSearchKeyword}
          className="input-box"
          type="text"
          placeholder="입력하세요."
          value={searchKeyword}
        ></input>
        <button type="submit" className="search-btn">
          조회
        </button>
      </form>
    </section>
  );
}

export default SearchBox;
