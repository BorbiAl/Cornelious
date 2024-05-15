const person1selector = document.getElementById("person1");
const person2selector = document.getElementById("person2");
const chatMessages = document.querySelector(".chat__messages");
const chatForm = document.querySelector(".chat__form");
const chatInput = document.querySelector(".chat__input");

const messageElement = (message) => `
    <li class="chat__message_${message.sender === "Emma" ? "y" : "o"}">
        <p class="sender">${message.sender}</p>
        <p class="chat__message_text">${message.text}</p>
        <p class="chat__message_time">${message.time}</p>
    </li>
`
const sendername = "Emma"
const updatesender = (name) => {
    sendername = name;
    chatInput.placeholder = "Type a message, ${sendername}...";
    chatInput.focus();
}

person1selector.addEventListener("click", () => updatesender("Emma"));
person2selector.addEventListener("click", () => updatesender("Pesho"));

const sendMessage = (e) => {
    e.preventDefault();
    const time = new Date().toLocaleTimeString();
    const message = {
        sender: sendername,
        text: chatInput.value,
        time,
    }
    chatMessages.innerHTML += messageElement(message);
}

chatForm.addEventListener("submit", sendMessage);