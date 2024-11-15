import React from 'react';
import { MessageSquare, GitBranch, Settings, Users } from 'lucide-react';

export default function Products() {
  const products = [
    {
      title: 'AI Chatbot',
      description: 'Intelligent chatbots tailored for seamless customer interaction and engagement.',
      icon: MessageSquare,
    },
    {
      title: 'Workflow Automation',
      description: 'Advanced automation tools to optimize processes and increase productivity.',
      icon: GitBranch,
    },
    {
      title: 'System Integrator',
      description: 'Effortless integration solutions for your software and third-party platforms.',
      icon: Settings,
    },
    {
      title: 'Support Suite',
      description: 'Comprehensive tools for training and continued support to boost adoption.',
      icon: Users,
    },
  ];

  return (
    <div id="products" className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-auto">
            Cutting-edge AI solutions designed to transform your business.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.title}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                    <product.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#contact" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
