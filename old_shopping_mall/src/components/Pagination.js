import React, { useEffect, useState } from "react";
import "../styles/Ppagination.css";
import { useDispatch, useSelector } from "react-redux";
import { SearchPage } from "../redux/searchPageSlice";
import { setCookie } from "../components/Cookie";

/**
 * @author yeowool
 * @description 페이지네이션에 필요한 PagingLimit(페이지 개수 렌더 제한값), SelectBtn(페이지 위치 버튼)을 dispatch를 통해 상태를 전역으로 관리하고 만들어둔 setCookie를 통해 쿠키에 저장
 **/

function Pagination() {
  const [pageBtnList, setPageBtnList] = useState([]);
  const dispatch = useDispatch();

  const searchPage = useSelector((state) => state.searchPage.value);
  const currentPagingLimitNum = searchPage.pagingLimitNum;
  const filterdItemLength = searchPage.itemLength;
  const selectBtnNum = searchPage.selectBtn;

  const onChangePagingLimit = (e) => {
    dispatch(SearchPage({ pagingLimitNum: e.target.value }));
    setCookie("CurrentPaginglimit", e.target.value, 2);
  };

  useEffect(() => {
    let pageBtn = filterdItemLength / currentPagingLimitNum;
    pageBtn = Math.ceil(pageBtn);
    setPageBtnList(
      Array(pageBtn)
        .fill()
        .map((arr, i) => {
          return i + 1;
        })
    );
  }, [searchPage]);

  const onSelectBtn = (btn) => {
    dispatch(SearchPage({ selectBtn: btn }));
    setCookie("selectBtn", btn, 2);
  };

  return (
    <section id="paging">
      <form className="paging-select-bar">
        <p>페이지당 행</p>
        <select
          onChange={onChangePagingLimit}
          defaultValue={currentPagingLimitNum}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </form>
      <div id="paging-btn">
        {pageBtnList.map((btn, index) => (
          <button
            key={index}
            onClick={() => onSelectBtn(btn)}
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
