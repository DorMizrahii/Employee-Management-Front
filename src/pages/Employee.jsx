import EmployeeTable from "../features/Employees/EmployeesTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import AddEmployee from "../features/Employees/AddEmployee";

function Employee() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Employees</Heading>
      </Row>
      <Row>
        <EmployeeTable />
        <AddEmployee />
      </Row>
    </>
  );
}

export default Employee;
