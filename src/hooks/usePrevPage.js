//   import { QueryClient, useQueryClient } from "@tanstack/react-query";
import {useSearchParams} from "react-router-dom";

  function usePrevPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    // const queryClient = useQueryClient();
    const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
    console.log("before the function current page", currentPage)
        //   queryClient.invalidateQueries({
        //       queryKey: ["employee",searchParams.get("page")]
        //   });
    function prev() {
    // const currentPage = !searchParams.get("page")
    // ? 1
    // : Number(searchParams.get("page"));
      const prevPage = currentPage <= 1 ? currentPage : currentPage - 1;
      searchParams.set("page", prevPage);
      console.log("prev: ", prevPage)
      setSearchParams(searchParams);

    }
    console.log("after the function")
    return {prev,currentPage};
  }

export default usePrevPage;