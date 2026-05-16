function clickLogin() {

   
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    
    let output = document.getElementById("output");

   
    let correctUsername = "student";
    let correctPassword = "12345";

    
    if(username == correctUsername && password == correctPassword){

        output.innerHTML = "Login Successful!";
        output.style.color = "green";

        
        document.getElementById("loginPage").classList.add("d-none");

        
        document.getElementById("notebookPage").classList.remove("d-none");

    }

    else{

        output.innerHTML = "Wrong username or password.";
        output.style.color = "red";

    }

}
