import EmployeeTable from "../features/Employees/EmployeesTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import AddCabin from "../features/Employees/AddEmployee";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Employees</Heading>
      </Row>
      <Row>
        <EmployeeTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
