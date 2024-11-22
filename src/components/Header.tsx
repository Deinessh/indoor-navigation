import React from 'react';
import { Leaf } from 'lucide-react';

export const Header: React.FC = () => (
  <div className="text-center">
    <div className="flex justify-center mb-4">
      <Leaf className="w-12 h-12 text-green-600" />
    </div>
    <h1 className="text-2xl font-bold text-gray-800 mb-2">
      Crop Disease Detection
    </h1>
    <p className="text-gray-600">
      Take a photo of your crop's leaves to instantly detect diseases
    </p>
  </div>
);