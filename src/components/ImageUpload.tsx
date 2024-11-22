import React from 'react';
import { ImageSource } from '@nativescript/core';
import { Button, StackLayout } from '@nativescript/core';
import * as camera from '@nativescript/camera';

interface ImageUploadProps {
  onImageSelect: (imageSource: ImageSource) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect }) => {
  const takePicture = async () => {
    try {
      const options = {
        width: 300,
        height: 300,
        keepAspectRatio: true,
        saveToGallery: false
      };

      const imageAsset = await camera.takePicture(options);
      const source = await ImageSource.fromAsset(imageAsset);
      onImageSelect(source);
    } catch (err) {
      console.error('Error taking picture:', err);
    }
  };

  const selectFromGallery = async () => {
    try {
      const options = {
        width: 300,
        height: 300,
        keepAspectRatio: true
      };

      const imageAsset = await camera.requestPermissions();
      if (imageAsset) {
        const source = await ImageSource.fromAsset(imageAsset);
        onImageSelect(source);
      }
    } catch (err) {
      console.error('Error selecting from gallery:', err);
    }
  };

  return (
    <StackLayout className="upload-container">
      <Button text="Take Picture" onTap={takePicture} className="-primary -rounded-lg" />
      <Button text="Select from Gallery" onTap={selectFromGallery} className="-outline -rounded-lg" />
    </StackLayout>
  );
};