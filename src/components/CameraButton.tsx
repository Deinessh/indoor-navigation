import React from 'react';
import { Camera } from '@capacitor/camera';

interface CameraButtonProps {
  onImageCapture: (imageUrl: string) => void;
}

export const CameraButton: React.FC<CameraButtonProps> = ({ onImageCapture }) => {
  const takePicture = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: 'dataUrl'
      });

      if (image.dataUrl) {
        onImageCapture(image.dataUrl);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };

  return (
    <button
      onClick={takePicture}
      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
    >
      Take Photo
    </button>
  );
};