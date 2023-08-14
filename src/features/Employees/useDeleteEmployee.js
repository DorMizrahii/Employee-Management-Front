import {
  useMutation,
  useQueryClient
} from "@tanstack/react-query";
import {
  deleteEmployee as deleteEmployeeApi
} from "../../services/apiEmployees";
import {
  toast
} from "react-hot-toast";
import usePrevPage from "../../hooks/usePrevPage";
import { useEmployees } from "./useEmployees";

export function useDeleteEmployee() {
  const {employees:data,count} = useEmployees();
  const {prev} = usePrevPage();
  const queryClient = useQueryClient();
  const {
    isLoading: isDeleting,
    mutate: deleteEmployee
  } = useMutation({
    mutationFn: deleteEmployeeApi,
    onSuccess: () => {
      toast.success("Employee successfully deleted!");
      // debugger;
      if (data.length === 1 && count > 4) prev();
      queryClient.invalidateQueries({
        queryKey: ["employee"]
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return {
    isDeleting,
    deleteEmployee
  };
}