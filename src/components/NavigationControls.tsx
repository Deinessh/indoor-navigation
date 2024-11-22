import React from 'react';
import { X, RotateCcw } from 'lucide-react';

interface NavigationControlsProps {
  destination: string;
  onStop: () => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  destination,
  onStop,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Navigating to:</p>
            <p className="font-medium">{destination}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => window.location.reload()}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              title="Recalibrate"
            >
              <RotateCcw className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={onStop}
              className="p-2 rounded-full bg-red-100 hover:bg-red-200"
              title="Stop Navigation"
            >
              <X className="w-6 h-6 text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationControls;