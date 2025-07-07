import React from 'react';

const PaperIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CodeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="text-center py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
        A Multi-Strategy Approach for AI-Generated Text Detection
      </h1>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">Ali Zain</p>
          <a href="mailto:vin.alizain@gmail.com" className="text-blue-600 hover:underline">vin.alizain@gmail.com</a>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">Sareem Farooqui</p>
          <a href="mailto:sareemfarooqui10@gmail.com" className="text-blue-600 hover:underline">sareemfarooqui10@gmail.com</a>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">Dr. Muhammad Rafi</p>
          <a href="mailto:muhammad.rafi@nu.edu.pk" className="text-blue-600 hover:underline">muhammad.rafi@nu.edu.pk</a>
        </div>
      </div>
      
      <div className="mt-6 text-gray-600">
        <p>National University of Computer and Emerging Sciences, FAST</p>
        <p className="text-gray-500">Karachi, Pakistan</p>
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <PaperIcon />
          Paper
        </a>
        <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <CodeIcon />
          Code
        </a>
      </div>
    </header>
  );
};

export default Header;