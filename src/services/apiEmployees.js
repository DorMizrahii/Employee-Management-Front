export async function getEmployees(pageNumber) {
  console.log("before fetch");
  const [res1, res2] = await  Promise.all([fetch(`http://localhost:3000/api/employees?page=${pageNumber}`), fetch(`http://localhost:3000/api/employees/getNumberOfEmployees`)])
  console.log("after fetch");

  if (!res1.ok || !res2.ok) {
    console.error("Employees could not be loaded");
    throw new Error("Employees could not be loaded");
  }
  const [
    {data},{data:count}
   ] = await Promise.all([res1.json(), res2.json()])
  console.log("Showing", data, count)
  return {data,count};
}

// export async function getTheNumberOfEmployees() {
//   const res = await fetch(`http://localhost:3000/api/employees/getNumberOfEmployees`, )
//   if (!res.ok) {
//     console.error("Employees could not be loaded");
//     throw new Error("Employees could not be loaded");
//   }
//   console.log("Response: ", res);
//   const {
//     data
//   } = await res.json()
//   console.log("Showing", data)
//   return data;
// }



export async function deleteEmployee(id) {
  try {
    if (id) {
      console.log("Delete", id);
      const res = await fetch(`http://localhost:3000/api/employees/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })

      if (!res.ok) {
        throw new Error("Data isn't valid.")
      }
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
      console.log("Creating", newEmployee);
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
      console.log("Response: ", res);
      data = await res.json();
      console.log("This is Data: ", data);
    }
  } catch (error) {
    throw new Error("Employee could not been created.")
  }
  //b) Update Employee
  try {
    if (id) {
      console.log("Editing", newEmployee);
      const res = await fetch(`http://localhost:3000/api/employees/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
      })
      if (!res.ok) {
        console.log(res.ok)
        console.log("hi im here", res)
        throw new Error("Data isn't valid.")
      }
      console.log("Response: ", res);
      console.log(res);
      data = await res.json();
    }
  } catch (error) {
    throw new Error("Employee could not been updated.")
  }
  return data;
}