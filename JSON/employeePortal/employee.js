//Function ->add new employee
// table:
// id
// name
// role
// email
// action : edit(should be able to edit by opening a form ) / delete (delete the employee)
url = "http://localhost:3000/employees";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log("Data is fetched successfully.");
    data.forEach((emp) => {
      console.log("==================");
      console.log("ID:", emp.id);
      console.log("Name:", emp.name);
      console.log("Role:", emp.role);
      console.log("Email:", emp.email);
      console.log("==================");
    });
  });
