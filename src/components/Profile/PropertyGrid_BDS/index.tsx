import React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Slide1 from "../../../assets/images/baner1.png";

interface PropertyCard {
  id: number;
  price: string;
  rating: number;
  description: string;
  bedrooms: number;
  area: string;
  address: string;
  image: string;
}

interface PropertyGridProps {
  properties: PropertyCard[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property: PropertyCard) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="relative">
              <img
                src={Slide1}
                alt={`Property ${property.id}`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {property.price}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <button className="bg-white bg-opacity-80 rounded-full p-1 hover:bg-opacity-100">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-2">{renderStars(property.rating)}</div>
              <h3 className="text-sm text-gray-800 mb-3">
                {property.description}
              </h3>
              <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
                <div className="flex items-center space-x-1">
                  <span>🏠</span>
                  <span>{property.bedrooms} phòng</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>📐</span>
                  <span>Diện tích</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>{property.area}</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {property.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
