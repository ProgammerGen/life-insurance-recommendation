import React from 'react';

interface LifeInsuranceResultProps {
  result: { plan: string; explanation: string };
  onStartOver: () => void;
}

const LifeInsuranceResult: React.FC<LifeInsuranceResultProps> = ({ result, onStartOver }) => (
  <div className="text-center">
    <div className="mb-4">
      <span className="block text-lg font-semibold text-green-700">{result.plan}</span>
      <span className="block text-gray-700 mt-2">{result.explanation}</span>
    </div>
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={onStartOver}
    >
      Start Over
    </button>
  </div>
);

export default LifeInsuranceResult; 