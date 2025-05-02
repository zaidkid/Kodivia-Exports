import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ChatWidget = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000');

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const message = {
        text: inputMessage,
        sender: 'user',
      };
      const socket = new WebSocket('ws://localhost:5000');
      socket.send(JSON.stringify(message));
      setMessages((prevMessages) => [...prevMessages, message]);
      setInputMessage('');
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.95 }}
        transition={{ duration: 0.3 }}
        className={`rounded-xl border border-blue-500 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-xl max-w-xs w-80 p-4 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {/* Messages area */}
        <div className="space-y-2 min-h-[4rem] max-h-60 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg text-sm max-w-[90%] ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white self-end ml-auto'
                  : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Input + Prompt */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-center text-[15px] text-neutral-700 font-semibold">
            💬 Ask your query and get instant assistance.
          </p>
          <br/>
          <div className="flex items-center w-full space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type a message"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>

      {/* Toggle Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all"
        whileTap={{ scale: 0.9 }}
      >
        Chat
      </motion.button>
    </div>
  );
};

export default ChatWidget;
