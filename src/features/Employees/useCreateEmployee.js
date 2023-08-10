import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditEmployee as createEditEmployee } from "../../services/apiEmployees";
import { toast } from "react-hot-toast";

export function useCreateEmployee() {
  const queryClient = useQueryClient();
  const { mutate: createEmployee, isLoading: isCreating } = useMutation({
    mutationFn: createEditEmployee,
    onSuccess: () => {
      toast.success("New Employee succeddfully created");
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createEmployee };
}
