import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to ProductStore
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl">
            Discover amazing products at incredible prices. We offer a wide range of high-quality items to suit your needs.
          </p>
          <div className="mt-10">
            <a
              href="#products"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-base font-medium hover:bg-gray-100"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;