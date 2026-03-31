// ===== TASK 9.1: DOM Selection =====
const header = document.getElementById("main-header");
console.log("getElementById:", header);

const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);
const h1 = document.querySelector("h1");
console.log("h1:", h1);

const allContent = document.querySelectorAll(".content");
console.log("all content:", allContent);

const form = document.getElementById("contact-form");
console.log("form:", form);

const emailInput = document.querySelector("#email");
console.log("email input:", emailInput);

const navItems = document.querySelectorAll(".nav-list li");
console.log("nav items:", navItems);

const firstNavLink = document.querySelector(".nav-link");
console.log("first nav link:", firstNavLink);

const lastParagraph = document.querySelectorAll("p")[document.querySelectorAll("p").length - 1];
console.log("last paragraph:", lastParagraph);


// ===  Task 9.2 : Transversing Dom ===
const header = document.querySelector("header");
const headerNav = header.querySelector("nav");
console.log("Nav inside header:", headerNav);

const firstNavLink = document.querySelector(".nav-link");
const parentLi = firstNavLink.parentElement;
console.log("Parent <li> of first nav-link:", parentLi);

const article = document.querySelector("article");
const nextSection = article.nextElementSibling;
console.log("Next sibling of article:", nextSection);

const ul = document.querySelector("ul.nav-list");
const liItems = ul.children;
console.log("All <li> inside ul:", liItems);

const footer = document.querySelector("footer");
const footerParent = footer.parentElement;
console.log("Parent of footer:", footerParent);


// ===== TASK 9.3: Text, HTML, Attributes, Styles =====
const h1 = document.querySelector("h1");
console.log("textContent:", h1.textContent); 
console.log("innerText:", h1.innerText); 
h1.textContent = "New Title for DOM Practice";

const article = document.querySelector("article");


console.log("article.innerHTML:", article.innerHTML);

article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content added via JS.</p>
`;

const userInput = "<script>alert('hack!')</script>";
article.textContent = userInput; 

const link = document.querySelector(".nav-link");

console.log("getAttribute('href'):", link.getAttribute("href"));
console.log("Property access href:", link.href);

link.setAttribute("href", "https://example.com");
link.href = "https://example.com";

console.log("Has target?", link.hasAttribute("target"));

link.removeAttribute("target");

const element = document.querySelector("[data-id]");
console.log("Data id:", element.dataset.id);
console.log("Data category:", element.dataset.category);

element.dataset.newAttr = "value";

const container = document.querySelector(".container");

container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});


// ===== TASK 9.4: Adding & Removing Elements =====
const article = document.querySelector("article");

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

article.appendChild(newParagraph);

const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);

article.prepend(newParagraph);
article.append(newParagraph);
firstParagraph.before(newParagraph);
firstParagraph.after(newParagraph);

const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);
clone.querySelector("a").textContent = "New Link";

document.querySelector(".nav-list").appendChild(clone);

function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.className = "nav-link";
    li.appendChild(a);
    document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");


// ===== TASK 10.1: Event Listeners =====
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", function() {
    console.log("Button clicked!");
});

button.addEventListener("click", () => {
    console.log("Clicked again!");
});

function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);

element.addEventListener("click", elementclick);

input.addEventListener("input", input); 

form.addEventListener("submit", FormSubmit);

window.addEventListener("scroll", scrollevent);

const counterDisplay = document.createElement("p");
counterDisplay.textContent = "Count: 0";
document.body.appendChild(counterDisplay);

const plusBtn = document.createElement("button");
plusBtn.textContent = "+";
document.body.appendChild(plusBtn);

const minusBtn = document.createElement("button");
minusBtn.textContent = "-";
document.body.appendChild(minusBtn);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
document.body.appendChild(resetBtn);

let count = 0;

function updateDisplay() {
    counterDisplay.textContent = `Count: ${count}`;
}

plusBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

minusBtn.addEventListener("click", () => {
    if (count > 0) count--;
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});


// ===== TASK 10.2: Event Objects =====
const form = document.querySelector("form");

document.addEventListener("keydown", function(event) {
    
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Saved!");
    }

    if (event.key === "Escape") {
        const inputs = document.querySelectorAll("input, textarea");
        inputs.forEach(input => input.value = "");
    }

    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        if (form) {
            form.submit();
        }
    }
});


// ===== TASK 10.3: Event Bubbling & Delegation =====
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.classList.add("item");

    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="delete-btn">X</button>
    `;

    list.appendChild(li);
    input.value = "";
});

list.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
        return;
    }

});


// ===== TASK 10.4: Form Handling =====
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

nameInput.addEventListener("input", function(event) {
    const value = event.target.value;

    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log("Form data:", data);

    if (isValid(data)) {
        showSuccess("Form submitted successfully!");
        form.reset();
    }
});

function isValid(data) {
    let valid = true;

    if (data.name.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showError(emailInput, "Please enter a valid email");
        valid = false;
    }

    return valid;
}

function showError(input, message) {
    input.classList.add("error");

    let error = input.nextElementSibling;

    if (!error || !error.classList.contains("error-message")) {
        error = document.createElement("div");
        error.classList.add("error-message");
        input.parentNode.insertBefore(error, input.nextSibling);
    }

    error.textContent = message;
}

function clearError(input) {
    input.classList.remove("error");

    const error = input.nextElementSibling;
    if (error && error.classList.contains("error-message")) {
        error.remove();
    }
}

function showSuccess(message) {
    let success = document.querySelector(".success-message");

    if (!success) {
        success = document.createElement("div");
        success.classList.add("success-message");
        form.appendChild(success);
    }

    success.textContent = message;
}