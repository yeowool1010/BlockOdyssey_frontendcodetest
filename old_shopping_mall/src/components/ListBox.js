import React, { useEffect, useState } from "react";
import "../styles/ListBox.css";
import Ppagination from "./Pagination";
import useGetList from "../hook/useGetList";
import { useSelector } from "react-redux";
import { Category } from "../categoryDummy/CategoryDummy";

/**
 * @author yeowool
 * @description SearchBox에서 상품 카테고리(category)와 검색 키워드(searchInput) 를 받아서 검색 필터진행
 **/

function ListBox() {
  const [items, setItems] = useState();
  const [countItems, setCountItems] = useState(100);

  const search = useSelector((state) => state.search.value);
  const getCategorie = search.category;
  const getSearchInput = search.searchInput;

  //   console.log("카테고리받기 성공: " + getCategorie);
  //   console.log("검색키워드 받기 성공: " + getSearchInput);

  const { data: allItems, isLoading, error } = useGetList();

  useEffect(() => {
    if (allItems !== undefined) {
      const getAllItems = allItems.products;

      if (getCategorie === Category[0]) {
        const filterdItem = getAllItems
          ? getAllItems.filter(
              (item) =>
                item.description.includes(getSearchInput) ||
                item.title.includes(getSearchInput) ||
                item.brand.includes(getSearchInput)
            )
          : [];
        setItems(filterdItem);
        setCountItems(filterdItem.length);
      } else if (getCategorie === Category[1]) {
        const filterdItem = getAllItems
          ? getAllItems.filter((item) => item.title.includes(getSearchInput))
          : [];
        setItems(filterdItem);
        setCountItems(filterdItem.length);
      } else if (getCategorie === Category[2]) {
        const filterdItem = getAllItems
          ? getAllItems.filter((item) => item.brand.includes(getSearchInput))
          : [];
        setItems(filterdItem);
        setCountItems(filterdItem.length);
      } else if (getCategorie === Category[3]) {
        const filterdItem = getAllItems
          ? getAllItems.filter((item) =>
              item.description.includes(getSearchInput)
            )
          : [];
        setItems(filterdItem);
        setCountItems(filterdItem.length);
      }
      return;
    }
  }, [getSearchInput, getCategorie, allItems]);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>An error has occurred: ${error.message}</h2>;

  return (
    <section id="list-box">
      <ul>
        <h2>상품리스트</h2>
        <li>검색 된 데이터 {countItems} 건</li>
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
