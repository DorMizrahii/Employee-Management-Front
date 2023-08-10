import Button from "../../ui/Button";
import CreateEmployeeForm from "./CreateEmployeesForm";
import Modal from "../../ui/Modal";
//import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new employee</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateEmployeeForm />
        </Modal.Window>

        {/*  <Modal.Open opens="table">
        <Button>Show a tabel</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}
      </Modal>
    </div>
  );
}

/* function AddCabin() {
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModel((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModel && (
        <Modal onClose={() => setIsOpenModel(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModel(false)} />
        </Modal>
      )}
    </div>
  );
} */

export default AddCabin;
