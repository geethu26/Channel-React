fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  //   .then((data) => console.log(data));
  .then((data) =>
    data.forEach((user) =>
      console.log(
        `Username: ${user.username}, Email:${user.email}, City: ${user.address.city}`
      )
    )
  );
