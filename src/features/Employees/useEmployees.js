import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../../services/apiEmployees";
import { useSearchParams } from "react-router-dom";


export function useEmployees() {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : searchParams.get("page");
  const {
    isLoading,
    data: {data:employees,count}={},
    error,
  } = useQuery({ queryKey: ["employee",page], queryFn: () => getEmployees(page || 1) });
  return { isLoading, error, employees,count };
}
