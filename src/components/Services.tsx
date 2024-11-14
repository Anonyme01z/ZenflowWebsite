import React from 'react';
import { MessageSquare, GitBranch, Settings, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Custom Chatbot Development',
      description: 'Tailored AI chatbots designed specifically for your business needs and industry requirements.',
      icon: MessageSquare,
    },
    {
      title: 'Process Automation',
      description: 'End-to-end automation solutions that streamline your business workflows and boost efficiency.',
      icon: GitBranch,
    },
    {
      title: 'Integration Services',
      description: 'Seamless integration with your existing systems and third-party applications.',
      icon: Settings,
    },
    {
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support to ensure successful implementation.',
      icon: Users,
    },
  ];

  return (
    <div id="services" className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-auto">
            Comprehensive AI and automation solutions for your business
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#contact" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {service.description}
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