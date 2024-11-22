import React from 'react';

interface ImagePreviewProps {
  imageUrl: string;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl }) => (
  <div className="mt-4">
    <img
      src={imageUrl}
      alt="Captured plant"
      className="w-full h-64 object-cover rounded-lg"
    />
  </div>
);