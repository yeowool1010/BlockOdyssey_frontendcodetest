import axios from "axios";

/**
 * @author yeowool
 * @description 전체 상품목록 api요청
 **/

const getList = async (limitnum) => {
  return await axios
    .get(`/products?limit=${limitnum}`, {
      baseURL: "https://dummyjson.com",
      headers: {
        "Content-Type": `application/json`,
      },
    })
    .catch((err) => console.log(err));
};

export default getList;
