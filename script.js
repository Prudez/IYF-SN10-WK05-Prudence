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