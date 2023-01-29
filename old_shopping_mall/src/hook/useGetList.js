import { useQuery } from "react-query";
import getList from "../apis/getList";

/**
 * @author yeowool
 * @description useQuery 를 통해 api det data 반
 **/

const useGetList = () => {
  return useQuery(["get/List"], () => getList());
};

export default useGetList;
