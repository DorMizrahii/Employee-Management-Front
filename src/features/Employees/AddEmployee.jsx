import Button from "../../ui/Button";
import CreateEmployeeForm from "./CreateEmployeesForm";
import Modal from "../../ui/Modal";

function AddEmployee() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new employee</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateEmployeeForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddEmployee;
