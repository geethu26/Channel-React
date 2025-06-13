const views = {
  home: `<h1>Home</h1>
 <p>Welcome to the Home Page</p>`,
  about: `
 <h1>About</h1>
 <p>This is my about page. Learn more abput us here </p> 
 `,
};

function navigate(view) {
  const container = document.getElementById("view-container");
  container.innerHTML = views[view];
}

window.onload = () => navigate("home");
