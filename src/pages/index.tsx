import React, { useState } from 'react';
import { Phone, Hammer, Clock, Shield, ArrowRight, AlertTriangle, BadgeCheck } from 'lucide-react';
import Link from 'next/link';

const MississaugaDrywall = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    emergency: '',
  });

  const handleEmergencyCall = () => {
    window.location.href = 'tel:778-200-9299';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Emergency Response",
      description: "Fast service across GTA"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed & Insured",
      description: "Professional experts"
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Expert Repairs",
      description: "Quality guaranteed"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-b from-zinc-100 to-zinc-50">
        <div className="absolute inset-0 bg-grid-zinc-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              24/7 Emergency Drywall & Water Damage Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              Mississauga Drywall Repair
              <span className="block text-slate-700">by AZ</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Expert drywall repair and water damage restoration services across the Greater Toronto Area. Available 24/7 for emergency response.
            </p>
          </div>

          {/* Call Button & Service Areas */}
          <div className="max-w-2xl mx-auto text-center mb-8">
            <button
              onClick={handleEmergencyCall}
              className="group inline-flex items-center justify-center gap-3 bg-slate-800 text-white px-8 py-6 rounded-full text-2xl font-bold hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl mb-6"
            >
              <Phone className="w-8 h-8" />
              <span>778-200-9299</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex flex-wrap justify-center gap-2 text-slate-600 text-sm">
              <span className="px-3 py-1 bg-white rounded-full shadow-sm">Toronto</span>
              <span className="px-3 py-1 bg-white rounded-full shadow-sm">North York</span>
              <span className="px-3 py-1 bg-white rounded-full shadow-sm">Etobicoke</span>
              <span className="px-3 py-1 bg-white rounded-full shadow-sm">Scarborough</span>
              <span className="px-3 py-1 bg-white rounded-full shadow-sm">Mississauga</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-slate-700 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-zinc-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/7.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Drywall Repair</h3>
                <p className="text-slate-600 mb-4">Expert drywall repair services for holes, cracks, water damage, and more.</p>
                <Link 
                  href="/drywall-repair" 
                  className="text-slate-800 font-medium hover:text-slate-600 transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/4.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Water Damage</h3>
                <p className="text-slate-600 mb-4">Complete water damage restoration including extraction, drying, and repairs.</p>
                <Link 
                  href="/water-damage" 
                  className="text-slate-800 font-medium hover:text-slate-600 transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/5.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Emergency Services</h3>
                <p className="text-slate-600 mb-4">24/7 emergency response for water damage and urgent drywall repairs.</p>
                <Link 
                  href="/emergency-services" 
                  className="text-slate-800 font-medium hover:text-slate-600 transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Estimate</h2>
            <p className="text-lg text-slate-600">
              Call: <span className="font-semibold">778-200-9299</span> or
              Email: <span className="font-semibold">office@mississaugadrywall.ca</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-slate-600 focus:border-transparent"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-slate-600 focus:border-transparent"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Property Address"
              value={formData.address}
              onChange={handleChange}
              className="col-span-2 px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-slate-600 focus:border-transparent"
              required
            />
            <textarea
              name="emergency"
              placeholder="Describe Your Service Needs"
              value={formData.emergency}
              onChange={handleChange}
              rows={4}
              className="col-span-2 px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-slate-600 focus:border-transparent"
              required
            ></textarea>
            <button
              type="submit"
              className="col-span-2 bg-slate-800 text-white py-4 rounded-lg text-lg font-semibold hover:bg-slate-900 transition-colors duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MississaugaDrywall;