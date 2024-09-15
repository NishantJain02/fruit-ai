// src/components/ChatbotPage.js
import React, { useState } from 'react';

const responses = {
  "What is Fruit.ai?": "Fruit.ai is a health management tool focused on fruit consumption.",
  "How do I use the chatbot?": "Simply ask questions related to fruit information and our chatbot will provide answers.",
  "Tell me about apples.": "Apples are nutritious fruits that provide various health benefits."
};

const ChatbotPage = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    const userMessage = userInput;
    const botResponse = responses[userInput] || "Sorry, I don't understand that question.";
    
    setMessages([...messages, { user: userMessage, bot: botResponse }]);
    setUserInput('');
  };

  return (
    <div className="chatbot-container">
      <h1>Chatbot</h1>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p><strong>You:</strong> {msg.user}</p>
            <p><strong>Bot:</strong> {msg.bot}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Ask me anything..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatbotPage;
