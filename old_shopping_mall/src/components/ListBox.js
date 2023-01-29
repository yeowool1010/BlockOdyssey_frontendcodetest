import React, { useEffect, useState } from "react";
import "../styles/ListBox.css";
import Ppagination from "./Pagination";
import useGetList from "../hook/useGetList";
import { useSelector, useDispatch } from "react-redux";
import { Category } from "../categoryDummy/CategoryDummy";
import { setCookie } from "./Cookie";
import { SearchPage } from "../redux/searchPageSlice";

/**
 * @author yeowool
 * @description SearchBox에서 선택 되어 전역상태인 상품 카테고리(category)와 검색 키워드(searchKeyword)를 사용해서 검색 필터진행
 * @description Pagination에서 선택되어 전역상태인pagingLimitNum, itemLength,selectBtn를 활용하여 한 페이지당 보여줄 데이터 제한
 **/

function ListBox() {
  const dispatch = useDispatch();

  const [items, setItems] = useState();

  const search = useSelector((state) => state.search.value);
  const getCategory = search.category;
  const getSearchInput = search.searchKeyword;

  const searchPage = useSelector((state) => state.searchPage.value);
  const currentPagingLimitNum = searchPage.pagingLimitNum;
  const filterdItemLength = searchPage.itemLength;
  const selectBtnNum = searchPage.selectBtn;

  const { data: allItems, isLoading, error } = useGetList();

  useEffect(() => {
    if (allItems !== undefined) {
      let filterdItem = allItems.products;

      if (getCategory === Category[0] || getCategory === undefined) {
        filterdItem = filterdItem.filter(
          (item) =>
            item.description.includes(getSearchInput) ||
            item.title.includes(getSearchInput) ||
            item.brand.includes(getSearchInput)
        );
      } else if (getCategory === Category[1]) {
        filterdItem = filterdItem.filter((item) =>
          item.title.includes(getSearchInput)
        );
      } else if (getCategory === Category[2]) {
        filterdItem = filterdItem.filter((item) =>
          item.brand.includes(getSearchInput)
        );
      } else if (getCategory === Category[3]) {
        filterdItem = filterdItem.filter((item) =>
          item.description.includes(getSearchInput)
        );
      }

      dispatch(SearchPage({ itemLength: filterdItem.length }));
      filterdItem = filterdItem.slice(
        (selectBtnNum - 1) * currentPagingLimitNum,
        currentPagingLimitNum * selectBtnNum
      );

      setCookie("CurrentCategory", getCategory, 2);
      setCookie("CurrentSearchKeyword", getSearchInput, 2);

      setItems(filterdItem);
    }
  }, [
    getSearchInput,
    getCategory,
    allItems,
    selectBtnNum,
    currentPagingLimitNum,
  ]);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>An error has occurred: ${error.message}</h2>;

  return (
    <section id="list-box">
      <ul>
        <h2>상품리스트</h2>
        <li>검색 된 데이터 {filterdItemLength} 건</li>
        <li>
          <ul id="list-table">
            <li>
              <ul>
                <li>상품번호</li>
                <li>상품명</li>
                <li>브랜드</li>
                <li>상품내용</li>
                <li>가격</li>
                <li>평점</li>
                <li>재고</li>
              </ul>
            </li>
            <li>
              {items &&
                items.map((item, idx) => {
                  return (
                    <ul key={idx}>
                      <li>{item.id}</li>
                      <li>{item.title}</li>
                      <li>{item.brand}</li>
                      <li>{item.description.slice(0, 40) + "..."}</li>
                      <li>{"$" + item.price}</li>
                      <li>{item.rating}</li>
                      <li>{item.stock}</li>
                    </ul>
                  );
                })}
            </li>
          </ul>
        </li>
      </ul>
      <Ppagination />
    </section>
  );
}

export default ListBox;
