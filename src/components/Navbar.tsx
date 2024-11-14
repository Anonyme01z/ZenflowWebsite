import React, { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-slate-800">ZenFlow</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-indigo-600">Features</a>
            <a href="#services" className="text-slate-600 hover:text-indigo-600">Services</a>
            <a href="#bot-showcase" className="text-slate-600 hover:text-indigo-600">Try Our Bots</a>
            <a href="#case-studies" className="text-slate-600 hover:text-indigo-600">Case Studies</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Contact Us
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#features" className="block px-3 py-2 text-slate-600 hover:text-indigo-600">Features</a>
            <a href="#services" className="block px-3 py-2 text-slate-600 hover:text-indigo-600">Services</a>
            <a href="#bot-showcase" className="block px-3 py-2 text-slate-600 hover:text-indigo-600">Try Our Bots</a>
            <a href="#case-studies" className="block px-3 py-2 text-slate-600 hover:text-indigo-600">Case Studies</a>
            <a href="#contact" className="block px-3 py-2 text-indigo-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}