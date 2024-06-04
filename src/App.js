import './App.css';
import { Chatbot } from 'react-chatbot-kit';
import config from './config';
import MessageParser from './messageParser';
import ActionProvider from './actionProvider';
import 'react-chatbot-kit/build/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello
        <div className="chatbot-container">
          <Chatbot 
            config={config} 
            messageParser={MessageParser} 
            actionProvider={ActionProvider} 
          />
        </div>
      </header>
    </div>
  );
}

export default App;
