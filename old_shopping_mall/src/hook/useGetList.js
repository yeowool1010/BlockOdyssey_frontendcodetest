import { useQuery } from "react-query";
import getList from "../apis/getList";

/**
 * @author yeowool
 * @description useQuery를 통해 쿼리 키와 함께 getList에서 받은 데이터를 return
 **/

const useGetList = () => {
  return useQuery(["get/List"], () => getList());
};

export default useGetList;
