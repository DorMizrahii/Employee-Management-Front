import Spinner from "../../ui/Spinner";
import EmployeeRow from "./EmployeeRow";
import { useEmployees } from "./useEmployees";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";


function EmployeeTable() {
  const { isLoading, employees,count } = useEmployees();
  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 1fr 1.5fr 0.1fr">
        <Table.Header role="row">
          <div>ID</div>
          <div>First Name</div>
          <div>Last Name</div>
          <div >Nick Name</div>
          <div>Email</div>

        </Table.Header>
        <Table.Body
        count = {count}        
          data={employees}
          render={(employee) => <EmployeeRow employee={employee} key={employee.id} />}
        />
        <Table.Footer><Pagination count={count}></Pagination></Table.Footer>
      </Table>
    </Menus>
  );
}
export default EmployeeTable;
