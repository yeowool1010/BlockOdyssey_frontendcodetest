# BlockOdyssey Front-End Recruitment Assignment\_박여울

안녕하세요 박여울입니다.
<br/>
블록오디세이 프론트엔드 개발자 채용 코딩테스트용 과제입니다.
</br>
</br>

### 👀 실행방법

---

**old_shopping_mall위치에서 설치, 실행**

```
yarn install
```

```
yarn start
```

**env환경변수 설정**

- old_shopping_mall위치에 .env파일 생성하여 하단 내용 추가

```
REACT_APP_API_URL="https://dummyjson.com"
```

### 📅 Project period

---

2023.01.27 ~ 2023.01.29
</br>
</br>

### 👀 데모영상

---
✅ **List**
![image](https://user-images.githubusercontent.com/99955022/215304352-e3d67213-72d0-4633-9ddd-d6b1b128486b.png)


✅ **Search**
![10,20, 50](https://user-images.githubusercontent.com/99955022/215304371-d6fe1169-8cf5-4551-8733-9a560d962786.gif)

![검색, 새로고침시 유지](https://user-images.githubusercontent.com/99955022/215304430-5919fb52-fe04-4a4f-b13c-1d2b329c543b.gif)


✅ **Pagination**
![페이지네이션 새로고침완료](https://user-images.githubusercontent.com/99955022/215304449-a3bbb6c4-aaf2-465a-bfa4-09537df95649.gif)

</br>
</br>

### 📄 과제 내용

---

**API address : https://dummyjson.com/products?limit=100 [JSON]**

<br/>
✅ **List**
<br/>

- 검색 결과 목록이어야 합니다.
- 페이지 새로 고침 후에도 검색 결과가 유지되어야 합니다.
- 열은 [상품번호, 상품명, 브랜드, 상품내용, 가격, 상품, 재고] 순 입니다.
- 목록 상단에 전체 데이터 양을 표시합니다.
- [상품내용] 의 최대 길이 는 40자입니다. 최대 길이를 초과하는 경우 줄임표를 사용하여 나머지 콘텐츠를 표시해야 합니다 ....

<br/>

✅ **Search**
<br/>

- 검색 조건은 [전체, 상품명, 브랜드, 상품내용] 입니다.
- 새로 고침 후에도 검색 조건과 키워드 가 모두 유지되어야 합니다.

<br/>

✅ **Pagination**
<br/>

- 선택 상자를 사용하여 페이지당 행 을 구현 합니다. 선택 상자 에 [10, 20, 50] 옵션이 표시되어야 합니다.
- 페이지당 행과 페이지 번호 는 모두 새로 고침 후에도 유지되어야 합니다.

<br/>

⚠️ **유의사항**
<br/>

- JavaScript 혹은 TypeScript 사용 가능
- HTML, CSS(SASS) 만 허용
- 기타 css프레임워크 사용 불가능
- redux-persist, localStorage 사용 x
- 상태관리가 필요할 경우 redux-toolkit 사용

<br/>

🆗 **사용 가능 라이브러**
<br/>

- React v17 / v18 (Use React hooks, no class - component)
- react-query v4
- redux-toolkit

<br/>
<br/>

### 🛠 Tech Stacks

---

- React<br/>
- react-query<br/>
- redux-toolkit<br/>
- CSS<br/>
- JavaScript<br/>
  <br/>
  <br/>

### ✏️Commit Convention

---

🎉 [init] 프로젝트 개시 </br>
✨ [feat] 기능 및 코드 추가 </br>
🐛 [fix] 버그 수정 </br>
🎨 [structure] 코드 구조/형태 개선 </br>
📝 [docs] 문서 추가/수정 </br>
♻️ [refactor] 코드 리팩토링 </br>
💄 [ui] UI/스타일 파일 추가/수정 </br>
🔥 [remove] 기능 및 코드 제거 </br>
