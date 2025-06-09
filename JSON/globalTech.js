const fs = require("fs");

function parseJSONData() {
  const JSONfilepath = "globalTech.json";
  fs.readFile(JSONfilepath, (err, data) => {
    if (err) {
      console.error("Error reading globaltech.json:", err);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      console.log("----JSON PArse example with filters----");
      console.log("Parsed JSON Data(JavaScript Object)");
      console.log(JSON.stringify(jsonData, null, 2)); //json viewer display
      //   console.log(JSON.stringify(jsonData));

      console.log("\nAccessing data");
      console.log("Company Name: ", jsonData.companyName);
      console.log("Headquarters city: ", jsonData.headquarters.city);
      console.log("1st dept name: ", jsonData.departments[0].name);

      //1.Department names and budgets
      console.log("\nDepartment Names and Budgets:");
      jsonData.departments.forEach((dept) =>
        // console.log(`-${dept.name}: ${dept.budget}`)
        console.log(`-${dept.name}: ${dept.budget.toLocaleString()}`)
      );

      //2.Skills of Alice
      console.log("\nSkills of Alice:");
      const alice = jsonData.departments[0].employees.find(
        (emp) => emp.firstName === "Alice"
      );
      if (alice) {
        console.log(alice.skills.join(", "));
      }

      //3.List all employess with skill Python
      console.log("\nEmployees with skill as python:");
      const pythonSkill = jsonData.departments
        .flatMap((dept) => dept.employees || [])
        .filter((emp) => emp.skills?.includes("Python"));
      //   console.log(pythonSkill);
      pythonSkill.forEach((emp) => {
        console.log(`-${emp.firstName} ${emp.lastName}`);
      });

      //4. Departments with budget > 1mil
      console.log("\nDeparmenst with budget greater than 1 million");
      const bigBudgDept = jsonData.departments.filter(
        (dept) => dept.budget > 1000000
      );
      bigBudgDept.forEach((dept) => {
        console.log(`-${dept.name}: ${dept.budget.toLocaleString()}`);
      });

      //5. Display project worked by Bob Jhonson
      console.log("\nProjects for Bob Wiley");
      const bob = jsonData.departments
        .flatMap((dept) => dept.employees || [])
        .find((emp) => emp.firstName === "Bob" && emp.lastName === "Wiley");
      if (bob?.projects) {
        bob.projects.forEach((project) => {
          console.log(`-${project.name} (Status: ${project.status})`);
        });
      } else {
        console.log("No projects found or bob doesnt exist");
      }

      //6.Find products released after 2022
      console.log("\nProducts with any version released after 2022");
      const recentProducts = jsonData.products.filter((product) =>
        product.versions.some(
          (v) => new Date(v.releaseDate) > new Date("2022-01-01")
        )
      );
      recentProducts.forEach((prod) => console.log(`-${prod.name}`));

      //7. List all unique skills in the company
      console.log("\nAll unique skills across departments");
      const allSkills = new Set(
        jsonData.departments
          .flatMap((dept) => dept.employees || [])
          .flatMap((emp) => emp.skills || [])
      );
      console.log([...allSkills].join(", "));
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  });
}

parseJSONData();

// Observations from globalTech.json
/*
"companyName":String
"foundedYear":Number
"isActive":Boolean
"headquarters":Object
"departments":Array of Objects
"employees":Array of objects
"skills":Array of strings
"projects":Array of objects
"products":Array of objects
"versions":Array of objects
*/
