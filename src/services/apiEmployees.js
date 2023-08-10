export async function getEmployees() {
  const res = await fetch("http://localhost:3000/api/employees")
  if (!res.ok) {
    console.error("Employees could not be loaded");
    throw new Error("Employees could not be loaded");
  }
  const data = await res.json()
  console.log("Showing",data)
  return data;
}
export async function deleteEmployee(id) {
  try {
    if (id) {
      console.log(id);
      const res = fetch(`http://localhost:3000/api/employees/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
    }
  } catch (error) {
    throw new Error("Employee could not been deleted.")

  }
}
export async function createEditEmployee(newEmployee, id) {

  let data;

  //a) create the Employee
  try {
    if (!id) {
      console.log("Creating",newEmployee);
      const res = await fetch("http://localhost:3000/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
      })
      if (!res.ok) {
        throw new Error("Data isn't valid.")
      }
      data = await res.json();
    }
  } catch (error) {
    throw new Error("Employee could not been created.")
  }
  //b) Update Employee
  try {
    if (id) {
      console.log("Editing",newEmployee);
      const res = fetch(`http://localhost:3000/api/employees/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
      })
      if (!res.ok) {
        throw new Error("Data isn't valid.")
      }
      data = await res.json();
    }
  } catch (error) {
    throw new Error("Employee could not been updated.")
  }
  return data;
}