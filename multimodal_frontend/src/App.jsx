import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full py-4 px-8 bg-white shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div> {/* Placeholder for Logo */}
          <span className="font-semibold text-lg">Github</span>
        </div>
        <div className="text-sm">
          <button className="bg-transparent">Sign in</button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center space-y-8">
        <div className="bg-gray-300 w-24 h-24 rounded-full"></div> {/* Placeholder for central logo */}
        <h1 className="text-center text-xl font-medium">Transcribe, Query or talk to any video with one click</h1>
        <input
          type="text"
          placeholder="Input video URL"
          className="px-4 py-2 w-80 text-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
        />
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Start
        </button>
      </main>

      <footer className="py-4">
        {/* Footer or additional information can be added here */}
      </footer>
    </div>
  );
};

export default App;
