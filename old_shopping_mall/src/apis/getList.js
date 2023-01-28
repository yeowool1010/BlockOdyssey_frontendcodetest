/**
 * @author yeowool
 * @description 전체 상품목록 api요청
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
  // console.log(await res.json());
  return await res.json();
};

export default getList;
