import {
  useQuery,
  // useQueryClient,
  // useQueryErrorResetBoundary,
} from "react-query";
import getList from "../apis/getList";

/**
 * @author yeowool
 * @description useQuery 훅 컴포넌트화
 **/

const useGetList = () => {
  return useQuery(["get/List"], () => getList(), {
    // enabled: false,
  });
};

export default useGetList;
