import styled from "styled-components";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateEmployeeForm from "./CreateEmployeesForm";
import { useDeleteEmployee } from "./useDeleteEmployee";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";



const DetailStyle = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;


function EmployeeRow({ employee }) {
  const { isDeleting, deleteEmployee } = useDeleteEmployee();
  const {
    firstName,
    lastName,
    email,
    id: EmployeeId,
  } = employee;
  
  return (
    <Table.Row>
      <DetailStyle>{EmployeeId}</DetailStyle>
      <DetailStyle>{firstName}</DetailStyle>
      <DetailStyle>{lastName}</DetailStyle>
      <DetailStyle>{email}</DetailStyle>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={EmployeeId} />
            <Menus.List id={EmployeeId}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateEmployeeForm EmployeeToEdit={employee} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="employee"
                disabled={isDeleting}
                onConfirm={() => deleteEmployee(EmployeeId)                  
                }
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default EmployeeRow;
