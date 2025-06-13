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

// cordova create myApp com.example.myapp MyApp
// cd MyApp
// replace index.html in cordova
// by your index.html in CTS_SPA
// create and add - script.js and copy the code
// create and add - style.css and copy the code

// cordova platform add browser
// cordova run browser
