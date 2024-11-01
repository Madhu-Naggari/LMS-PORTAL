import React from "react";

function Compiler() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      <header className="text-center py-4 bg-blue-600 text-white text-xl font-bold">
        Online Compiler
      </header>
      <main className="md:flex-1 mt-4 flex md:flex-col flex-row gap-4">
        {/* Code Editor */}
        <div className="flex-1 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Code Editor</h2>
          <textarea
            className="w-full h-64 md:h-full border p-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="// Write your code here..."
          ></textarea>
        </div>
        
        {/* Console Output */}
        <div className="flex-1 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Console Output</h2>
          <div className="w-full h-64 md:h-full border p-2 rounded-md bg-gray-50 text-gray-800 overflow-y-auto">
            {/* Placeholder for console output */}
            <p>Output will be displayed here...</p>
          </div>
        </div>
      </main>
      
      {/* Control Buttons */}
      <footer className="flex justify-center mt-4 gap-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200">
          Run Code
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-600 transition duration-200">
          Reset
        </button>
      </footer>
    </div>
  );
}

export default Compiler;