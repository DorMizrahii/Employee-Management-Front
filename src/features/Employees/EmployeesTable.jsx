import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import EmployeeRow from "./EmployeeRow";
import { useEmployees } from "./useEmployees";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";


function EmployeeTable() {
  const { isLoading, employees } = useEmployees();
  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 1fr 0.1fr">
        <Table.Header role="row">
          <div>ID</div>
          <div>First Name</div>
          <div>Last Name</div>
          <div>Email</div>
          <div></div>

          <div></div>
        </Table.Header>
        <Table.Body
          data={employees}
          render={(employee) => <EmployeeRow employee={employee} key={employee.id} />}
        />
      </Table>
    </Menus>
  );
}
export default EmployeeTable;
