import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';

const Home = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Premium Headphones', price: 149.99, image: '/api/placeholder/400/320' },
    { id: 2, name: 'Wireless Mouse', price: 49.99, image: '/api/placeholder/400/320' },
    { id: 3, name: 'Mechanical Keyboard', price: 89.99, image: '/api/placeholder/400/320' },
    { id: 4, name: 'HD Webcam', price: 59.99, image: '/api/placeholder/400/320' },
    { id: 5, name: 'Bluetooth Speaker', price: 79.99, image: '/api/placeholder/400/320' },
    { id: 6, name: 'USB-C Hub', price: 39.99, image: '/api/placeholder/400/320' },
    { id: 7, name: 'Laptop Stand', price: 29.99, image: '/api/placeholder/400/320' },
    { id: 8, name: 'External SSD', price: 119.99, image: '/api/placeholder/400/320' },
  ];

  return (
    <div>
      <HeroSection />
      <ProductsSection products={products} />
    </div>
  );
};

export default Home;