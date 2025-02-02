import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="relative mt-16">
      <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">
              Mississauga Drywall Repair by AZ
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your trusted partner for professional drywall repair and water damage restoration across the Greater Toronto Area. Our expert team delivers quality craftsmanship and reliable emergency services 24/7.
            </p>
            <div className="text-slate-400 text-sm">
              <p>Locally owned and operated in Greater Toronto Area</p>
              <p className="flex items-center gap-2 text-white mt-2">
                Licensed & Insured in Ontario
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              OUR <span className="text-white">SERVICES</span>
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <ul className="space-y-3 text-slate-300">
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/drywall-repair">
                  Drywall Repair
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/water-damage">
                  Water Damage Restoration
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/emergency-services">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              GET IN <span className="text-white">TOUCH</span>
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <div className="text-slate-300 space-y-4">
              <div>
                <p className="font-semibold mb-2">Service Areas:</p>
                <p className="text-white">Toronto • North York • Etobicoke</p>
                <p className="text-white">Scarborough • Mississauga</p>
                <p className="mt-2 text-white font-semibold">24/7 Emergency Response</p>
              </div>
              <div className="pt-4 border-t border-slate-700">
                <a href="tel:778-200-9299" className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer mb-3">
                  <Phone size={16} />
                  <p>778-200-9299</p>
                </a>
                <a href="mailto:office@mississaugadrywall.ca" className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer mb-3">
                  <Mail size={16} />
                  <p>office@mississaugadrywall.ca</p>
                </a>
                <a href="https://mississaugadrywall.ca" className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer mb-3">
                  <ExternalLink size={16} />
                  <p>mississaugadrywall.ca</p>
                </a>
                <div className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                  <MapPin size={16} />
                  <p>Greater Toronto Area</p>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="p-2 bg-slate-700 hover:bg-white hover:text-slate-800 transition-all duration-300 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-2 bg-slate-700 hover:bg-white hover:text-slate-800 transition-all duration-300 rounded-lg">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2 bg-slate-700 hover:bg-white hover:text-slate-800 transition-all duration-300 rounded-lg">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Mississauga Drywall Repair by AZ. ALL RIGHTS RESERVED</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors duration-300">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors duration-300">TERMS & CONDITIONS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;