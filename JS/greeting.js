const loginForm = document.querySelector("#login-form")
const loginInput1 = document.querySelector("#login-form input")
const loginButton1 = document.querySelector("#login-form button")
const greeting = document.querySelector("#greeting")
const loginGreeting = document.querySelector("login-greeting")
const loginContainer = document.querySelector("login-container")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const InputValue = loginInput1.value
    localStorage.setItem(USERNAME_KEY, InputValue)
    paintGreetings(InputValue)
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginContainer.classList.remove(HIDDEN_CLASSNAME);
}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if (saveUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(saveUserName)
}
