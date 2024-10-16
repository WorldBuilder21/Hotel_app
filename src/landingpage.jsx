import React from 'react';
import image1 from './asset/image 1.png';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Book</a></li>
            <li><a href="#" className="hover:text-gray-300">Reviews</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Communities</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="relative">
        <img src={image1} alt="Luxury interior" className="w-full h-[calc(100vh-4rem)] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Perfect Stay</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Experience unparalleled luxury with our curated collection of elite accommodations. Our data-driven approach ensures a bespoke experience tailored to your exquisite tastes.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">Book Now</button>
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">How We Work</button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 p-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <Facebook size={20} />
          <Twitter size={20} />
          <Instagram size={20} />
          <Linkedin size={20} />
        </div>
        <p className="text-sm">&copy; 2024 Luxury Accommodations. All Rights Reserved.</p>
        <p className="text-sm">123 Luxury Lane, Opulent City, OC1 2LD</p>
      </footer>
    </div>
  );
};

export default LandingPage;