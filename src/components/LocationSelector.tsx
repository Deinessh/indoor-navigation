import React from 'react';

interface LocationSelectorProps {
  destination: string;
  setDestination: (destination: string) => void;
}

const locations = [
  'Conference Room A',
  'Conference Room B',
  'Kitchen',
  'Reception',
  'Office 101',
  'Office 102',
  'Break Room',
  'Meeting Room 1',
];

const LocationSelector: React.FC<LocationSelectorProps> = ({
  destination,
  setDestination,
}) => {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Select Destination
      </label>
      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Choose a location...</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;