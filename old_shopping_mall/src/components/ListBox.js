import React, { useEffect, useState } from "react";
import "../styles/ListBox.css";
import Ppagination from "./Ppagination";
import useGetList from "../hook/useGetList";
import { useSelector } from "react-redux";

function ListBox() {
  const [searchItem, setSearchItem] = useState(100);
  const [items, setItems] = useState();

  //   const search = useSelector((state) => (state ? state.search : {}));
  const search = useSelector((state) => state.search.value);
  console.log("카테고리받기 성공: " + search.category);
  console.log("검색키워드 받기 성공: " + search.searchInput);

  const {
    data: allItems,
    refetch: itemsRefetch,
    // status,
    // isSuccess,
    // isLoading,
    // error,
  } = useGetList(searchItem);
  //   console.log("url" + process.env.REACT_APP_API_URL);

  useEffect(() => {
    itemsRefetch();
  }, []);

  useEffect(() => {
    if (allItems !== undefined) {
      setItems(allItems.data.products);
      return;
    }
  }, [allItems]);

  return (
    <section id="list-box">
      <ul>
        <h2>상품리스트</h2>
        <li>검색 된 데이터 {searchItem} 건</li>
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
