import React from 'react';
import { StackLayout, Label } from '@nativescript/core';

interface DiseaseInfoProps {
  disease: string | null;
}

export const DiseaseInfo: React.FC<DiseaseInfoProps> = ({ disease }) => {
  if (!disease) return null;

  const diseaseData = {
    'Leaf Blight': {
      description: 'A fungal disease that causes brown spots on leaves.',
      treatment: 'Apply copper-based fungicide and ensure proper air circulation.',
      prevention: 'Avoid overhead watering and maintain plant spacing.',
    },
    'Powdery Mildew': {
      description: 'White powdery spots on leaves and stems.',
      treatment: 'Use sulfur-based fungicide and remove infected parts.',
      prevention: 'Improve air circulation and avoid high humidity.',
    },
  };

  const data = diseaseData[disease as keyof typeof diseaseData] || {
    description: 'Disease information not available.',
    treatment: 'Consult a local agricultural expert.',
    prevention: 'Maintain good plant health practices.',
  };

  return (
    <StackLayout className="disease-info">
      <Label text={disease} className="disease-title" />
      
      <Label text="Description" className="section-title" />
      <Label text={data.description} className="section-text" textWrap={true} />

      <Label text="Treatment" className="section-title" />
      <Label text={data.treatment} className="section-text" textWrap={true} />

      <Label text="Prevention" className="section-title" />
      <Label text={data.prevention} className="section-text" textWrap={true} />
    </StackLayout>
  );
};