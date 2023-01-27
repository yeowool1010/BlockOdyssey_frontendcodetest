import {
  useQuery,
  // useQueryClient,
  // useQueryErrorResetBoundary,
} from "react-query";
import getList from "../apis/getList";

/**
 * @author yeowool
 * @description 페이지 수에 따라 상품목록 return
 **/

const useGetList = (limitnum) => {
  return useQuery(["get/List"], () => getList(limitnum), {
    enabled: false,
  });
};

export default useGetList;
