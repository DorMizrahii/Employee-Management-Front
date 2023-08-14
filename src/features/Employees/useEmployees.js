import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../../services/apiEmployees";
import { useSearchParams } from "react-router-dom";


export function useEmployees() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("hi im in use employees function");
  const {
    isLoading,
    data: {data:employees,count}={},
    error,
  } = useQuery({ queryKey: ["employee",searchParams.get("page")], queryFn: () => getEmployees(searchParams.get("page") || 1) });
  return { isLoading, error, employees,count };
}
