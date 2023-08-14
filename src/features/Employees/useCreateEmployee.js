import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditEmployee } from "../../services/apiEmployees";
import { toast } from "react-hot-toast";
import { useEmployees } from "./useEmployees";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../config/configConstants";


export function useCreateEmployee() {
  const queryClient = useQueryClient();
  const {count} = useEmployees();
  const [searchParams,setSearchParams] = useSearchParams();
  const { mutate: createEmployee, isLoading: isCreating } = useMutation({
    mutationFn: createEditEmployee,
    onSuccess: () => {
      const lastPage = Math.ceil((count+1) / PAGE_SIZE)
      
      console.log("Search params : ", searchParams)

      searchParams.set("page",lastPage)
      setSearchParams(searchParams)
      toast.success("New Employee successfully created");
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createEmployee };
}
