import React, { useEffect, useState } from "react";
import "../styles/Ppagination.css";
import { useDispatch, useSelector } from "react-redux";
import { SearchPage } from "../redux/searchPageSlice";

function Pagination() {
  const [searchInput, setSearchInput] = useState(10);

  const dispatch = useDispatch();

  const filteredItems = useSelector((state) => state.filteredItems.value);
  const getFilteredItems = filteredItems.items;
  // console.log(getFilteredItems.length);

  const onSelectPageNum = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    dispatch(SearchPage({ pageNum: searchInput }));
  };

  return (
    <section id="paging">
      <form className="paging-select-bar">
        <p>페이지당 행</p>
        <select onChange={onSelectPageNum}>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </form>
      <div id="paging-btn">
        <button>◀◀</button>
        <button>◀</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>▶</button>
        <button>▶▶</button>
      </div>
    </section>
  );
}

export default Pagination;
