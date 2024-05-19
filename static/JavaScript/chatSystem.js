const person1btn = document.getElementById('person1-selector')
const person1Name = document.getElementById('person1-selector').textContent
const person2btn = document.getElementById('person2-selector')
const person2Name = document.getElementById('person2-selector').textContent
const chatMessages = document.getElementById('chat-messages')
const chatInputForm = document.getElementById('chat-input-form')
const chatInput = document.getElementById('chat-input')
const messages = JSON.parse(localStorage.getItem('messages')) || []
let messageSender = person1Name
const createChatMessageElement = (message) => `
    <div class="message ${message.sender === messageSender ? 'you-bg' : 'other-bg'}">
        <div class="message-sender">${message.sender}</div>
        <div class="message-text">${message.text}</div>
        <div class="message-timestamp">${message.timestamp}</div>
    </div>
`
window.onload = () => {
    updateMessageSender(messageSender)
}
const updateMessageSender = (name) => {
    messageSender = name
    chatInput.placeholder = `Type here, ${name}...`
    if (name === person1Name) {
        person1btn.classList.remove('active')
        person2btn.classList.add('active')
    }
    if (name === person2Name) {
        person2btn.classList.remove('active')
        person1btn.classList.add('active')
    }
    chatInput.focus()
    chatMessages.innerHTML = ""
    messages.forEach((message) => {
        chatMessages.innerHTML += createChatMessageElement(message)
    })
    chatMessages.scrollTop = chatMessages.scrollHeight
}
person1btn.onclick = () => updateMessageSender(person2Name)
person2btn.onclick = () => updateMessageSender(person1Name)
const sendMessage = (e) => {
    e.preventDefault()
    const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp,
    }
    messages.push(message)
    localStorage.setItem('messages', JSON.stringify(messages))
    chatMessages.innerHTML += createChatMessageElement(message)
    chatInputForm.reset()
    chatMessages.scrollTop = chatMessages.scrollHeight
}
chatInputForm.addEventListener('submit', sendMessage)