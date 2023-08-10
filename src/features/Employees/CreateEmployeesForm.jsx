import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { createEditEmployee } from "../../services/apiEmployees";
import { styled } from "styled-components";
import { useCreateEmployee as useCreateEmployee } from "./useCreateEmployee";
import { useEditEmployee as useEditeEmployee } from "./useEditEmployee";
const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateEmployeeForm({EmployeeToEdit = {}, onCloseModal }) {
  const { isCreating, createEmployee } = useCreateEmployee();
  const { isEditing, editEmployee } = useEditeEmployee();
  const isWorking = isCreating || isEditing;
  const { id: editId, ...editValues } = EmployeeToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
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

      <FormRow>
        {/* type is an HTML attribute! */}
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
