import React, { useEffect, useState } from "react";
import "../styles/ListBox.css";
import Ppagination from "./Ppagination";
import useGetList from "../hook/useGetList";

function ListBox() {
  const [searchItem, setSearchItem] = useState(20);
  const [items, setItems] = useState();

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
        <li>상품리스트</li>
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
                items.map((el, idx) => {
                  return (
                    <ul key={idx}>
                      <li>{el.id}</li>
                      <li>{el.title}</li>
                      <li>{el.brand}</li>
                      <li>{el.description.slice(0, 40) + "..."}</li>
                      <li>{"$" + el.price}</li>
                      <li>{el.rating}</li>
                      <li>{el.stock}</li>
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
