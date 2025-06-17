'use client';

import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
type SocketType = ReturnType<typeof io>;
import { motion } from 'framer-motion';

type ChatMessage = {
  text: string;
  sender: 'user' | 'bot';
};

const ChatWidget = () => {
  const socketRef = useRef<SocketType | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    socketRef.current = io('https://kodivia-backend.onrender.com');

    socketRef.current.on('connect', () => {
      console.log('✅ Connected to backend via Socket.IO');
    });

    socketRef.current.on('message', async (data: ChatMessage) => {
      setIsTyping(true);
      await simulateBotTyping(data.text);
      setIsTyping(false);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage: ChatMessage = {
        text: inputMessage,
        sender: 'user',
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      socketRef.current?.emit('message', { text: inputMessage });
      setInputMessage('');
    }
  };

  // 🔠 Typing simulation: word-by-word "magical" display
  const simulateBotTyping = async (fullText: string) => {
    const words = fullText.split(' ');
    let currentText = '';

    for (let i = 0; i < words.length; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          currentText += (i === 0 ? '' : ' ') + words[i];

          setMessages((prev) => {
            const last = prev[prev.length - 1];
            if (last?.sender === 'bot') {
              return [...prev.slice(0, -1), { text: currentText, sender: 'bot' }];
            } else {
              return [...prev, { text: currentText, sender: 'bot' }];
            }
          });

          resolve(null);
        }, 80); // 🕐 Typing speed (adjust as needed)
      });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="rounded-xl bg-white dark:bg-gray-900 shadow-2xl border border-blue-500 w-80 max-h-[32rem] flex flex-col overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 font-semibold text-center">
            Kodivia Assistant
          </div>

          <div className="flex-1 p-3 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] text-sm px-4 py-2 rounded-lg shadow-sm ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white ml-auto text-right rounded-br-none'
                    : 'bg-gray-200 text-gray-900 mr-auto text-left rounded-bl-none dark:bg-gray-700 dark:text-white'
                }`}
              >
                {message.text}
              </div>
            ))}

            {isTyping && (
              <div className="text-sm italic text-gray-500 dark:text-gray-300">
                Just a moment, thinking through<span className="animate-pulse">...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-3 py-2 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:bg-gray-900 dark:text-white"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
              >
                Send
              </button>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              Ask anything about exports 📦
            </p>
          </div>
        </motion.div>
      )}

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all"
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? '✖' : '💬'}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
