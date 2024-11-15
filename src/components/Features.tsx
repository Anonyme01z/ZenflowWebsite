import React from 'react';
import { Bot, Workflow, Brain, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'AI-Powered Chatbots',
      description: 'Intelligent conversational agents that understand and respond to your customers 24/7.',
      icon: Bot,
    },
    {
      name: 'Workflow Automation',
      description: 'Streamline your business processes with smart automation solutions.',
      icon: Workflow,
    },
    {
      name: 'Machine Learning Integration',
      description: 'Leverage advanced ML models to make data-driven decisions.',
      icon: Brain,
    },
    {
      name: 'Enterprise Security',
      description: 'Bank-grade security measures to protect your data and systems.',
      icon: Shield,
    },
  ];

  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Seamless Integration for Effortless Efficiency
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-auto">
            Everything you need to transform your business with AI and automation.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-slate-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-slate-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}