import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "ChatBot",
  initialMessages: [createChatBotMessage("Hello! How can I help you?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
