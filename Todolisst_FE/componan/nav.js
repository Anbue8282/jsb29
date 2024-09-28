export default class Nav {
    constructor(){}

    render(mainContainer){
        const nav = document.createElement("nav");
        nav.classList.add("navbar","bg-bode-tertiary");
        const divContainer  = document.createElement("div");
        divContainer.classList.add("container-fluid");
        const logoLink  = document.createElement("a");
        logoLink.classList.add("navbar-brand");
        logoLink.innerText="Todolist";
        //bat su kien cho link 
        logoLink.href="./index.html";
        //add in div container
        divContainer.appendChild(logoLink);


        const divButton  = document.createElement("div");
        divButton.classList.add("d-flex");

        const loginButton  = document.createElement("button");
        loginButton.classList.add("btn",'btn-outline-success');
           // bat su kien co login

        loginButton.innerText = this.checkLogin(loginButton);


        // add button vao div 
        divButton.appendChild(loginButton);
        //add div button 
        divContainer.appendChild(divButton);
        //nav 
        nav.appendChild(divContainer);

        mainContainer.appendChild(nav);
    }
    checkLogin(loginButton){
        //check current user in local strorage 
        const currentUser=JSON.parse(localStorage.getItem("currentUser"));
        if(currentUser){
            loginButton.onclick = this.gotologout;
            return "logout";
        
        } else {
            loginButton.onclick = this.gotologin;
            return "login";
        }
    }
    gotologin(){
        window.location.href="./pages/login.html";
    }
    gotologout(){
        // xoa du lieu trong local
        localStorage.removeItem("currentUser")
        window.location.href="./pages/logout.html";
    }

        
    
}