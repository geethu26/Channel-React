//Fetch todos
//slice - how many dataset to be displayed in the output

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todo) => console.log(todo.slice(0, 4)));
