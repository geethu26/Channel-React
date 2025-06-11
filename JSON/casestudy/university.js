const fs = require("fs");

function parseJSONData() {
  const JSONfilepath = "university.json";
  fs.readFile(JSONfilepath, (err, data) => {
    if (err) {
      console.error("Error reading university.json:", err);
      return;
    }
    try {
      //   console.log("All working well");
      const jsonData = JSON.parse(data);

      //1.Faculty with python expertise
      console.log("\n1. Faculty with python expertise:");
      const pythonExpertise = jsonData.departments
        .flatMap((dept) => dept.faculty || [])
        .filter((fac) => fac.expertise?.includes("Python"));

      pythonExpertise.forEach((fac) => {
        console.log(`-${fac.firstName} ${fac.lastName}`);
      });

      //2.Departments with budget >$2M
      console.log("\n2. Deparmenst with budget greater than 2 million");
      const bigBudgDept = jsonData.departments.filter(
        (dept) => dept.budget > 2000000
      );
      bigBudgDept.forEach((dept) => {
        console.log(`-${dept.name}: ${dept.budget.toLocaleString()}`);
      });

      //3.Courses taught by Jane William
      console.log("\n3. Courses by Jane Williams:");
      const jane = jsonData.departments
        .flatMap((dept) => dept.faculty || [])
        .find((fac) => fac.firstName === "Jane" && fac.lastName === "Williams");
      if (jane?.courses) {
        jane.courses.forEach((course) => console.log(`${course.title}`));
      } else {
        console.log("No course taught or Jane is not a faculty");
      }

      //4.Programs with batches after 2004
      console.log("\n4. Programs with batches after 2004:");
      const programs = jsonData.programs
        .filter((program) =>
          program.batches.some((batch) => batch.batchYear > 2020)
        )
        .map((program) => console.log(`-${program.name}`));

      //5.All unique faculty expertise
      console.log("\n5. All unique faculty expertise");
      const uniqueExpertise = new Set(
        jsonData.departments
          .flatMap((dept) => dept.faculty || [])
          .flatMap((fac) => fac.expertise || [])
      );
      console.log([...uniqueExpertise].join(", "));

      //6.Faculty teaching more than 1 course
      console.log("\n6. Faculty teaching more than 1 course:");
      const facultyTeaching = jsonData.departments
        .flatMap((dept) => dept.faculty || [])
        .filter((fac) => fac.courses?.length > 1);

      facultyTeaching.forEach((fac) => {
        console.log(`${fac.firstName} ${fac.lastName} - Courses`);
        fac.courses.forEach((course) =>
          console.log(`${course.title || course}`)
        );
      });

      //7.Total graduates
      console.log("\n7. Total graduates");
      const totalGrads = jsonData.programs
        .flatMap((program) => program.batches)
        .reduce((sum, batch) => sum + batch.graduates, 0);

      console.log(`Total number of graduates: ${totalGrads}`);

      //8.Departments without faculty
      console.log("\n8. Departments without faculty:");

      const noFaculty = jsonData.departments
        .filter((dept) => !dept.faculty || dept.faculty.length === 0)
        .map((dept) => dept.name);

      if (noFaculty.length) {
        noFaculty.forEach((name) => console.log(name));
      } else {
        console.log("All departments have faculty.");
      }

      //9.Faculty teaching machine learning

      //10.Programs with 300+ graduates
      console.log("\n10. Prgrams with 300+ graduates in any bbatch: ");
      const highGradPrograms = jsonData.programs
        .filter((program) =>
          program.batches.some((batch) => batch.graduates >= 300)
        )
        .map((program) => program.name);
      highGradPrograms.forEach((name) => console.log(name));
    } catch (error) {
      console.error("Error Parsing JSON:", error);
    }
  });
}

parseJSONData();
