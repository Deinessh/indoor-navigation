import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="mt-4 text-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
    <p className="text-gray-600 mt-2">Analyzing image...</p>
  </div>
);