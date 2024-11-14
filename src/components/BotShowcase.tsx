import React, { useState } from 'react';
import { Bot, Send, RefreshCw } from 'lucide-react';

export default function BotShowcase() {
  const [botUrl, setBotUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: 'Hi! I\'m a demo bot. Enter a bot URL above to test a different bot.', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');
    
    // Simulate bot response
    setIsLoading(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'This is a demo response. Connect a real bot URL to get actual responses.', 
        isBot: true 
      }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleBotUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate and connect to the bot URL
    setMessages([{ text: `Connected to new bot at ${botUrl}`, isBot: true }]);
  };

  return (
    <div id="bot-showcase" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Test Our Bots
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Experience our AI chatbots in action
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <form onSubmit={handleBotUrlSubmit} className="mb-8">
            <div className="flex gap-4">
              <input
                type="url"
                value={botUrl}
                onChange={(e) => setBotUrl(e.target.value)}
                placeholder="Enter bot URL"
                className="flex-1 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <RefreshCw className="h-5 w-5" />
                Connect
              </button>
            </div>
          </form>

          <div className="bg-white rounded-lg shadow-lg border border-slate-100">
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 ${
                    message.isBot ? '' : 'flex-row-reverse'
                  }`}
                >
                  {message.isBot && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-indigo-600" />
                    </div>
                  )}
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.isBot
                        ? 'bg-slate-100 text-slate-800'
                        : 'bg-indigo-600 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="bg-slate-100 rounded-lg px-4 py-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-slate-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}