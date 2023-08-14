import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditEmployee} from "../../services/apiEmployees";
import { toast } from "react-hot-toast";
export function useEditEmployee() {
  const queryClient = useQueryClient();
  const { mutate: editEmployee, isLoading: isEditing } = useMutation({
    mutationFn: ({newEmployeeData, id }) => createEditEmployee(newEmployeeData, id),
    onSuccess: () => {
      toast.success("Employee successfully edited");
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editEmployee };
}
