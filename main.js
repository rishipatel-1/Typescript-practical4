var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");
var loginToggle = document.querySelector(".form-toggle-login");
var registerToggle = document.querySelector(".form-toggle");
// Show register form
loginToggle.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});
// Show login form
registerToggle.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
});
// Handle login form submit
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    var matchingUser = registeredUsers.find(function (user) { return user.email === email && user.password === password; });
    if (matchingUser) {
        localStorage.setItem('loggedInUser', matchingUser.name);
        window.location.href = "./public/index.html";
    }
    else {
        alert("Invalid email or password");
    }
});
// Handle register form submit
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("reg-name").value;
    var email = document.getElementById("reg-email").value;
    var password = document.getElementById("reg-password").value;
    var registeredUser = { name: name, email: email, password: password };
    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    registeredUsers.push(registeredUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    alert("Registration successful");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});
var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
if (registeredUsers.length > 0) {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
}
// import { Invoice } from './classes/Invoice.js';
// import { Payment } from './classes/Payment.js';
// import { ListTemplate } from './classes/ListTemplate.js';
// const form = document.querySelector('.new-item-form');
// const type = document.querySelector('#type');
// const tofrom = document.querySelector('#tofrom');
// const details = document.querySelector('#details');
// const amount = document.querySelector('#amount');
// const ul = document.querySelector('ul');
// const list = new ListTemplate(ul);
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let values;
//     values = [tofrom.value, details.value, amount.valueAsNumber];
//     let doc;
//     if (type.value === 'invoice') {
//         doc = new Invoice(...values);
//     }
//     else {
//         doc = new Payment(...values);
//     }
//     list.render(doc, type.value, 'end');
// });
// const usernameElement = document.getElementById("username");
// if (usernameElement) {
//   const loggedInUser = localStorage.getItem('loggedInUser');
//   if (loggedInUser) {
//     usernameElement.textContent = loggedInUser;
//   } else {
//     usernameElement.textContent = "Guest";
//   }
// }
// const logoutButton = document.querySelector('#logout-button');
// logoutButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   window.location.href = "../index.html";
// });
