function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    // Your login validation logic here
    if (username == "admin" && password == "123")
     {
      alert("Login successful!");
    }
     else {
      alert("Invalid username or password.");
    }
  }