import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code for USA

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      phone: `${countryCode} ${phoneNumber}`, // Combine country code and phone number
    };

    // Send email notification
    try {
      await emailjs.send(
        'service_f2u6oke',
        'template_lysn2so',
        formData,
        'qJz1jG03Dt5V-37m6'
      );
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div id="contact" className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                Phone Number
              </label>
              <div className="flex items-center">
                <select
                  name="countryCode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="mr-2 p-2 border rounded-md"
                >
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (India)</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="text"
                  name="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your message"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-8 border-t border-slate-200 pt-8">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-600" />
                <span className="ml-3 text-slate-600">contact@zenflow.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-600" />
                <span className="ml-3 text-slate-600">+234 706 521 4616</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-indigo-600" />
                <span className="ml-3 text-slate-600">123 Innovation Street, Tech City</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
