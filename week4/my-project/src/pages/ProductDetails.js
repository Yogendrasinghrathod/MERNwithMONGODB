import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  
  // Sample product data - in a real app, you would fetch this based on the ID
  const products = [
    { id: 1, name: 'Premium Headphones', price: 149.99, image: '/api/placeholder/400/320', description: 'High-quality over-ear headphones with noise cancellation technology.', features: ['Noise cancellation', 'Bluetooth 5.0', '20 hour battery life', 'Comfortable ear cushions'] },
    { id: 2, name: 'Wireless Mouse', price: 49.99, image: '/api/placeholder/400/320', description: 'Ergonomic wireless mouse with precision tracking.', features: ['2.4GHz wireless', 'Ergonomic design', '12-month battery life', 'Compatible with all operating systems'] },
    { id: 3, name: 'Mechanical Keyboard', price: 89.99, image: '/api/placeholder/400/320', description: 'Mechanical gaming keyboard with RGB backlighting.', features: ['Mechanical switches', 'RGB backlighting', 'Anti-ghosting', 'Programmable macros'] },
    { id: 4, name: 'HD Webcam', price: 59.99, image: '/api/placeholder/400/320', description: '1080p HD webcam with built-in microphone.', features: ['1080p HD video', 'Auto focus', 'Noise-reducing microphone', 'Universal clip mount'] },
    { id: 5, name: 'Bluetooth Speaker', price: 79.99, image: '/api/placeholder/400/320', description: 'Portable Bluetooth speaker with rich sound.', features: ['Bluetooth 5.0', '12 hour battery life', 'Waterproof IPX7', 'Built-in microphone for calls'] },
    { id: 6, name: 'USB-C Hub', price: 39.99, image: '/api/placeholder/400/320', description: 'Multi-port USB-C hub for connecting multiple devices.', features: ['4K HDMI output', '3 USB 3.0 ports', 'SD card reader', 'Power delivery pass-through'] },
    { id: 7, name: 'Laptop Stand', price: 29.99, image: '/api/placeholder/400/320', description: 'Adjustable laptop stand for ergonomic working.', features: ['Adjustable height', 'Foldable design', 'Heat dissipation', 'Compatible with all laptops'] },
    { id: 8, name: 'External SSD', price: 119.99, image: '/api/placeholder/400/320', description: 'Fast external SSD with 500GB capacity.', features: ['500GB capacity', 'USB 3.1 interface', 'Shock resistant', 'Compact design'] },
  ];
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
        </div>
        <div className="mt-10 lg:mt-0">
          <h2 className="text-3xl font-extrabold text-gray-900">{product.name}</h2>
          <p className="mt-3 text-3xl text-gray-900">${product.price.toFixed(2)}</p>
          <div className="mt-6">
            <p className="text-base text-gray-700">{product.description}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Features</h3>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <button
              type="button"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
          <div className="mt-4">
            <Link
              to="/"
              className="inline-block text-blue-600 font-medium hover:text-blue-500"
            >
              &larr; Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;