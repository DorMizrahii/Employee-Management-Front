import {useSearchParams} from "react-router-dom";

  function usePrevPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
    console.log("before the function current page", currentPage)
    function prev() {
      const prevPage = currentPage <= 1 ? currentPage : currentPage - 1;
      searchParams.set("page", prevPage);
      console.log("prev: ", prevPage)
      setSearchParams(searchParams);

    }
    console.log("after the function")
    return {prev,currentPage};
  }

export default usePrevPage;