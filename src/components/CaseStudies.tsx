import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Are Your Sales Stalling?',
      description: 'Unlock explosive growth with AI-driven customer service. See how we helped a client increase sales by 150%',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
    {
      title: 'Banking Automation',
      description: 'Reducing processing time by 80% for a major financial institution',
      image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'Healthcare Innovation',
      description: 'Streamlining patient care with intelligent automation systems',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ];

  return (
    <div id="case-studies" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-auto">
          Curious to see how AI and automation can supercharge your business? Explore real-world success stories.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {cases.map((case_study) => (
            <div
              key={case_study.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={case_study.image}
                  alt={case_study.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {case_study.title}
                  </h3>
                  <p className="mt-3 text-base text-slate-600">
                    {case_study.description}
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}