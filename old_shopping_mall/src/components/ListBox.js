import React, { useState } from "react";
import "../styles/ListBox.css";

function ListBox() {
  const [searchItem, setSearchItem] = useState(0);

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
              <ul>
                <li>1</li>
                <li>아이폰</li>
                <li>애플</li>
                <li>내용네요ㅕㅇ이.이다아아아</li>
                <li>1000</li>
                <li>4.4</li>
                <li>94</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>1</li>
                <li>아이폰</li>
                <li>애플</li>
                <li>내용네요ㅕㅇ이.이다아아아</li>
                <li>1000</li>
                <li>4.4</li>
                <li>94</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>1</li>
                <li>아이폰</li>
                <li>애플</li>
                <li>내용네요ㅕㅇ이.이다아아아</li>
                <li>1000</li>
                <li>4.4</li>
                <li>94</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default ListBox;
