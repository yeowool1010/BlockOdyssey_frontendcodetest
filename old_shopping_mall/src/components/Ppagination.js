import React from "react";
import "../styles/Ppagination.css";

function Ppagination() {
  return (
    <section id="paging">
      <div class="paging-select-bar">
        <p>페이지당 행</p>
        <select>
          <option>10</option>
          <option>20</option>
        </select>
      </div>
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

export default Ppagination;
