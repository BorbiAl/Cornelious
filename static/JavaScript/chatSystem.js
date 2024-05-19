const johnSelectorBtn = document.getElementById('john-selector')
const janeSelectorBtn = document.getElementById('jane-selector')
const chatMessages = document.getElementById('chat-messages')
const chatInputForm = document.getElementById('chat-input-form')
const chatInput = document.getElementById('chat-input')
const messages = JSON.parse(localStorage.getItem('messages')) || []
let messageSender = 'John'
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
    if (name === 'John') {
        johnSelectorBtn.classList.remove('active')
        janeSelectorBtn.classList.add('active')
    }
    if (name === 'Jane') {
        janeSelectorBtn.classList.remove('active')
        johnSelectorBtn.classList.add('active')
    }
    chatInput.focus()
    chatMessages.innerHTML = ""
    messages.forEach((message) => {
        chatMessages.innerHTML += createChatMessageElement(message)
    })
    chatMessages.scrollTop = chatMessages.scrollHeight
}
johnSelectorBtn.onclick = () => updateMessageSender('Jane')
janeSelectorBtn.onclick = () => updateMessageSender('John')
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