import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { useCreateEmployee } from "./useCreateEmployee";
import { useEditEmployee as useEditeEmployee } from "./useEditEmployee";

function CreateEmployeeForm({EmployeeToEdit = {}, onCloseModal }) {
  const { isCreating, createEmployee } = useCreateEmployee();
  const { isEditing, editEmployee } = useEditeEmployee();
  const isWorking = isCreating || isEditing;
  const { id: editId, ...editValues } = EmployeeToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    if (isEditSession)
      editEmployee(
        { newEmployeeData: { ...data}, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createEmployee(
        { ...data},
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }
  function onError(errors) {
    console.log(errors);
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow FormRow label = "First Name"
      error = {
        errors?.firstName?.message
      } >
        <Input
          type="text"
          id = "First Name"
          disabled={isWorking}
          {
            ...register("firstName", {
              required: "First name is Required"
            })
          }
        />
      </FormRow>
      <FormRow FormRow label = "Last Name"
      error = {
        errors?.lastName?.message
      } >
        <Input
          type="text"
          id = "LastName"
          disabled={isWorking}
          {
            ...register("lastName", {
            required: "Last name is Required"
          })}
        />
      </FormRow>

      <FormRow FormRow label = "Email"
      error = {
        errors?.email?.message
      } >
        <Input
          type="email"
          id = "Email"
          disabled={isWorking}
          {
            ...register("email", {
            required: "Email is Required"
          })}
        />
      </FormRow>

      <FormRow FormRow label = "Nick Name"
      error = {
        errors?.nickname?.message
      } >
        <Input
          type="text"
          id = "nickName"
          disabled={isWorking}
          {
            ...register("nickname", {
            required: "Nick Name is Required"
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Employee" : "Add new Employee"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateEmployeeForm;
