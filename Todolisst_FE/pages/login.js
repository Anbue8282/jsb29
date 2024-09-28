export default class login{
    constructor(){
    // Tạo thẻ form
    const form = document.createElement("form");
    form.className = "col-md-6 p-4 border rounded";

    // Tạo thẻ h2 tiêu đề
    const title = document.createElement("h2");
    title.className = "text-center mb-4";
    title.innerText = "Login";
    // Tạo group cho email
    const emailGroup = document.createElement("div");
    emailGroup.className = "mb-3";
    const emailLabel = document.createElement("label");
    emailLabel.className = "form-label";
    emailLabel.setAttribute("for", "email");
    emailLabel.innerText = "Email address";
    const emailInput = document.createElement("input");
    emailInput.className = "form-control";
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("placeholder", "Enter your email");

    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);

    // Tạo group cho password
    const passwordGroup = document.createElement("div");
    passwordGroup.className = "mb-3";
    const passwordLabel = document.createElement("label");
    passwordLabel.className = "form-label";
    passwordLabel.setAttribute("for", "password");
    passwordLabel.innerText = "Password";
const passwordInput = document.createElement("input");
    passwordInput.className = "form-control";
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("placeholder", "Enter your password");

    passwordGroup.appendChild(passwordLabel);
    passwordGroup.appendChild(passwordInput);
// Tạo button login
    const submitButton = document.createElement("button");
    submitButton.className = "btn btn-primary w-100";
    submitButton.setAttribute("type", "submit");
    submitButton.innerText = "Login";
// Thêm tất cả vào form
    form.appendChild(title);
    form.appendChild(emailGroup);
    form.appendChild(passwordGroup);
    form.appendChild(submitButton);
    //add vao maincontainer
    mainContainer.appendChild(form);
    }
}