import Nav from "./componan/nav.js";
import Footer from "./componan/footer.js";
import Home from "./pages/home.js";
import login from "./pages/login.js";

 
 class App{
    constructor(component){
        this.component=component
        this.mainContainer=document.getElementById("app")

    }

    rendercomponent(){
        this.component.render(this.mainContainer);

    }


 }

const home = new Home()
const login = new login()



 //1 project = 1 app
 const app = new App(Home);
 // render giao dien 
 app.rendercomponent();
 export default app;