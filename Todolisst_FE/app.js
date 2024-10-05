import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Register from "./pages/register.js";

class App {
  constructor() {
    this.mainContainer = document.getElementById("app");
  }

  renderComponent(component) {
    // xoa du lieu cu -> add component moi 
    this.mainContainer.innerHTML = "";
    component.render(this.mainContainer);
  }
}

const home = new Home();
const login = new Login();
const register = new Register();

// 1 project = 1 app
const app = new App();
// render giao dien
app.renderComponent(login);

export default app;