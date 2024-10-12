import Login from "../pages/login";

export default class Nav {
    constructor(){
        this.currentUser= JSON.parse(localStorage.getItem("currentUser"));
        
    }

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

    loginButton.onclick = this.gotologout;
    //them ten cho buttton    ->>> displayname 
    const displayname = this.currentUser.providerData[0].displayname;
    return displayname!=null ? displayname:"User";
    }

    gotologout(){
        // xoa du lieu trong local
        localStorage.removeItem("currentUser")
        //logout trên firebasse



        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            const login = new Login();
            app.renderComponent(login);
        }).catch((error) => {
            // An error happened.
            alert(error.message)
        });
    }

        
    
}