// Get references to DOM elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Function to simulate sending a message
function sendMessage() {
    const message = userInput.value.trim();

    if (message !== "") {
        // Display user message
        displayMessage(message, "user");

        // Clear the input field
        userInput.value = "";

        // Simulate bot response
        setTimeout(() => {
            const botResponse = generateBotResponse(message);
            displayMessage(botResponse, "bot");
        }, 1000);
    }
}

// Function to display a message in the chat
function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", {sender}-message);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to generate bot response based on user input
function generateBotResponse(input) {
    // Basic responses for demonstration
    const responses = {
        "hello": "Hi there! How can I assist you?",
        "how are you": "I'm doing great! How about you?",
        "bye": "Goodbye! Have a great day!"
    };

    // Default response if input is not recognized
    const defaultResponse = "Sorry, I don't understand that. Can you try again?";

    // Convert the input to lowercase for matching
    const normalizedInput = input.toLowerCase();

    // Return the response or default if no match is found
    return responses[normalizedInput] || defaultResponse;
}