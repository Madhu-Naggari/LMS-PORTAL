import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const problems = [
  { code: 'AICOM', name: 'AI is Coming', submission: 50561, difficulty: 167, contestCode: 'START153' },
  { code: 'FOODCOST', name: 'Food Costs', submission: 71539, difficulty: 183, contestCode: 'START112' },
  { code: 'START01', name: 'Number Mirror', submission: 782785, difficulty: 200, contestCode: '-' },
  { code: 'CWC23QUALIF', name: 'Cricket World Cup Qualifier', submission: 101457, difficulty: 203, contestCode: 'START109' },
  { code: 'CHRISTGREET', name: 'Christmas Greetings', submission: 60035, difficulty: 205, contestCode: 'START114' },
  { code: 'LUCKYSEVEN', name: 'Lucky Seven', submission: 101419, difficulty: 213, contestCode: 'SEP23' },
];

const Practice = () => {
  const [difficultyRange, setDifficultyRange] = useState([0, 5001]);
  const [search, setSearch] = useState('');

  const filteredProblems = problems.filter(
    (problem) =>
      problem.difficulty >= difficultyRange[0] &&
      problem.difficulty <= difficultyRange[1] &&
      problem.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen relative mt-10 p-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Practice Section</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
            <NavLink to='/Compiler'>Go to Practice</NavLink>
          </button>
        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search Problems"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-800 px-4 py-2 rounded-md focus:outline-none w-full"
          />
          <div>
            <label className="block mb-1">Difficulty</label>
            <input
              type="range"
              min="0"
              max="5001"
              value={difficultyRange[1]}
              onChange={(e) => setDifficultyRange([0, parseInt(e.target.value)])}
              className="w-full"
            />
            <span className="text-sm">{difficultyRange[0]} - {difficultyRange[1]}</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto bg-gray-800 rounded-lg shadow-md">
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-700 text-gray-300 font-medium">Code</th>
                <th className="px-6 py-3 bg-gray-700 text-gray-300 font-medium">Name</th>
                <th className="px-6 py-3 bg-gray-700 text-gray-300 font-medium">Submission</th>
                <th className="px-6 py-3 bg-gray-700 text-gray-300 font-medium">Difficulty</th>
                <th className="px-6 py-3 bg-gray-700 text-gray-300 font-medium">Contest Code</th>
              </tr>
            </thead>
            <tbody>
              {filteredProblems.map((problem, index) => (
                <tr key={index} className="hover:bg-gray-700">
                  <td className="px-6 py-4 border-b border-gray-700">{problem.code}</td>
                  <td className="px-6 py-4 border-b border-gray-700">{problem.name}</td>
                  <td className="px-6 py-4 border-b border-gray-700">{problem.submission}</td>
                  <td className="px-6 py-4 border-b border-gray-700">{problem.difficulty}</td>
                  <td className="px-6 py-4 border-b border-gray-700">{problem.contestCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Practice;