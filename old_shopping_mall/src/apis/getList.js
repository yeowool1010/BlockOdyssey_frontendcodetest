/**
 * @author yeowool
 * @description 전체 상품목록 fecch를 통해 api요청 환경변수 .env설정 필수
 **/

const URL = process.env.REACT_APP_API_URL;

const getList = async () => {
  const res = await fetch(`${URL}/products?limit=100`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrer: "no-referrer",
  });
  return await res.json();
};

export default getList;
