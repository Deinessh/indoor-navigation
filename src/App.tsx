import React, { useState } from 'react';
import { Navigation } from 'lucide-react';
import ARScene from './components/ARScene';
import LocationSelector from './components/LocationSelector';
import NavigationControls from './components/NavigationControls';

function App() {
  const [destination, setDestination] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);

  const startNavigation = () => {
    if (destination) {
      setIsNavigating(true);
    }
  };

  const stopNavigation = () => {
    setIsNavigating(false);
    setDestination('');
  };

  return (
    <div className="min-h-screen">
      {!isNavigating ? (
        <div className="p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Navigation className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-center mb-6">
            Indoor AR Navigation
          </h1>
          
          <LocationSelector
            destination={destination}
            setDestination={setDestination}
          />
          
          <button
            onClick={startNavigation}
            disabled={!destination}
            className={`w-full py-3 px-4 rounded-lg font-medium mt-4 ${
              destination
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Start Navigation
          </button>
        </div>
      ) : (
        <>
          <ARScene destination={destination} />
          <NavigationControls
            destination={destination}
            onStop={stopNavigation}
          />
        </>
      )}
    </div>
  );
}

export default App;