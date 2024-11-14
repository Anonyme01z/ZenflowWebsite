import React from 'react';
import { Bot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-slate-800">ZenFlow</span>
            </div>
            <p className="mt-4 text-slate-600 max-w-md">
              Transforming businesses through intelligent automation and AI-powered solutions. Your partner in digital transformation.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#about" className="text-base text-slate-600 hover:text-indigo-600">
                  About
                </a>
              </li>
              <li>
                <a href="#careers" className="text-base text-slate-600 hover:text-indigo-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="text-base text-slate-600 hover:text-indigo-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#privacy" className="text-base text-slate-600 hover:text-indigo-600">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-base text-slate-600 hover:text-indigo-600">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-100 pt-8 text-center">
          <p className="text-base text-slate-400">
            © {new Date().getFullYear()} ZenFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}