import React from 'react';

interface DiseaseDetailsProps {
  disease: string;
}

interface DiseaseInfo {
  description: string;
  treatment: string;
  prevention: string;
}

const diseaseData: Record<string, DiseaseInfo> = {
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

export const DiseaseDetails: React.FC<DiseaseDetailsProps> = ({ disease }) => {
  const info = diseaseData[disease];

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">{disease}</h2>
      <div className="space-y-3">
        <div>
          <h3 className="font-medium text-gray-700">Description</h3>
          <p className="text-gray-600">{info.description}</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-700">Treatment</h3>
          <p className="text-gray-600">{info.treatment}</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-700">Prevention</h3>
          <p className="text-gray-600">{info.prevention}</p>
        </div>
      </div>
    </div>
  );
};