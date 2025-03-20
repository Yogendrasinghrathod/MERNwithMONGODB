import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img 
        src={product.image || "/api/placeholder/400/320"} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        <Link
          to={`/product/${product.id}`}
          className="mt-4 block w-full bg-blue-600 text-white text-center px-4 py-2 rounded font-medium hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;