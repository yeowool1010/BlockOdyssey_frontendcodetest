import React, { useEffect, useState } from "react";
import "../styles/Ppagination.css";
import { useDispatch, useSelector } from "react-redux";
import { SearchPage } from "../redux/searchPageSlice";
import { getCookie, setCookie } from "../components/Cookie";

function Pagination() {
  const [pageBtnList, setPageBtnList] = useState([]);
  const dispatch = useDispatch();

  const searchPage = useSelector((state) => state.searchPage.value);
  const getCurrentPage = searchPage.pageNum;
  const itemLength = searchPage.itemLength;
  const selectBtnNum = searchPage.selectBtn;

  const onSelectPageNum = (e) => {
    e.preventDefault();
    dispatch(SearchPage({ pageNum: e.target.value }));
    setCookie("CurrentPageNum", e.target.value, 2);
  };

  useEffect(() => {
    let pageBtn = itemLength / getCurrentPage;
    pageBtn = Math.ceil(pageBtn);
    setPageBtnList(
      Array(pageBtn)
        .fill()
        .map((arr, i) => {
          return i + 1;
        })
    );
  }, [searchPage]);

  const selectBtn = (btn) => {
    dispatch(SearchPage({ selectBtn: btn }));
    setCookie("selectBtn", btn, 2);
  };

  return (
    <section id="paging">
      <form className="paging-select-bar">
        <p>페이지당 행</p>
        <select onChange={onSelectPageNum} defaultValue={getCurrentPage}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </form>
      <div id="paging-btn">
        {pageBtnList.map((btn, index) => (
          <button
            key={index}
            onClick={() => selectBtn(btn)}
            disabled={btn === selectBtnNum}
          >
            {btn}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Pagination;
