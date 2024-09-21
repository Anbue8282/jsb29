import Nav from "./componan/nav.js";

 
 class App{
    constructor(component){
        this.component=component
        this.mainContainer=document.getElementById("app")

    }

    rendercomponent(){
        this.component.render(this.mainContainer);

    }


 }

const nav = new Nav


 //1 project = 1 app
 const app = new App(nav);
 // render giao dien 
 app.rendercomponent();
 export default app;