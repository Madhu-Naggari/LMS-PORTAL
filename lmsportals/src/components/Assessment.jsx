import React from 'react';
// import CourseBg from './assets/images/CourseBg.jpg'
import AssignBg from './assets/images/AssignBg.jpg'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from 'recharts';
// import HornerScoreChart from './Score';

function Assessment() {
 // Sample data for assignments
  const assignmentsData = {
    completed: 8,
    uncompleted: 2,
    upcoming: 5,
    failed: 1,
    passed: 7,
  };

  const progressData = [
    { name: 'Completed', value: assignmentsData.completed },
    { name: 'Uncompleted', value: assignmentsData.uncompleted },
    { name: 'Upcoming', value: assignmentsData.upcoming },
    { name: 'Failed', value: assignmentsData.failed },
    { name: 'Passed', value: assignmentsData.passed },
  ];

  const areaChartData = [
    { name: 'Week 1', completed: 3, Incompleted: 1, upcoming: 2 },
    { name: 'Week 2', completed: 4, Incompleted: 0, upcoming: 3 },
    { name: 'Week 3', completed: 1, Incompleted: 1, upcoming: 0 },
    { name: 'Week 4', completed: 5, Incompleted: 0, upcoming: 0 },
  ];

  
    return (
        <div className='relative w-full h-[90vh]'>
        <div className='main flex relative items-center justify-center bg-slate-800  h-[91vh] text-5xl md:text-3xl'>
               <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${AssignBg})` }}>
          </div>
                <div className="relative text-center z-10 p-8 text-white">
        <h2 className="text-3xl  font-bold mb-4 text-green-500">Assignments</h2>
        <p className="mb-6 text-xl">
          Test your knowledge and track your improvement.
        </p>
      </div>
          <p className='absolute top-5  left-1 text-lg  md:text-sm text-white'> Home/Assignment</p>
            </div>
            <div className='relative h-screen w-full flex items-center justify-center'>
                <div className='w-[98%] h-full '>
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Assignments Overview</h1>
      <br/>
      <br/>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-6 mb-8">
        {/* Pie Chart */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Assignment Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Tooltip />
              <Pie
                data={progressData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
              >
                {progressData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      index === 0 ? '#4caf50' :
                      index === 1 ? '#f44336' :
                      index === 2 ? '#ff9800' :
                      index === 3 ? '#ff5722' : '#2196f3'
                    }
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Assignments Progress Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="completed" stroke="#4caf50" fill="#dfffd6" />
              <Area type="monotone" dataKey="Incompleted" stroke="#f44336" fill="#ffcccc" />
            </AreaChart>
          </ResponsiveContainer>
                </div>

      </div>
      <br/>
      <br/>
      <div>
             <h1 className="text-2xl font-semibold mb-6">Assignments Info</h1>
      </div>
      <br/>
      <br/>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Completed Assignments */}
        <div className="bg-white rounded-lg shadow-md border-l-4 border-green-500 p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Completed Assignments</h3>
            <ul>
              <li>Assignment 1</li>
              <li>Assignment 2</li>
              <li>Assignment 3</li>
            </ul>
          </div>
          <button className="mt-2 bg-gray-300 text-gray-700 py-1 px-2 rounded">More Info</button>
        </div>

        {/* Uncompleted Assignments */}
        <div className="bg-white rounded-lg shadow-md border-l-4 border-green-500 p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Incompleted Assignments</h3>
            <ul>
              <li>Assignment 4</li>
              <li>Assignment 5</li>
            </ul>
          </div>
          <button className="mt-2 bg-gray-300 text-gray-700 py-1 px-2 rounded">More Info</button>
        </div>

        {/* Upcoming Assignments */}
        <div className="bg-white rounded-lg shadow-md border-l-4 border-green-500 p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Upcoming Assignments</h3>
            <ul>
              <li>Assignment 6</li>
              <li>Assignment 7</li>
              <li>Assignment 8</li>
            </ul>
          </div>
          <button className="mt-2 bg-gray-300 text-gray-700 py-1 px-2 rounded">More Info</button>
        </div>

        {/* Failed Assignments */}
        <div className="bg-white rounded-lg shadow-md border-l-4 border-green-500 p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Failed Assignments</h3>
            <ul>
              <li>Assignment 9</li>
            </ul>
          </div>
          <button className="mt-2 bg-gray-300 text-gray-700 py-1 px-2 rounded">More Info</button>
        </div>

        {/* Passed Assignments */}
        <div className="bg-white rounded-lg shadow-md border-l-4 border-green-500 p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Passed Assignments</h3>
            <ul>
              <li>Assignment 10</li>
              <li>Assignment 11</li>
            </ul>
          </div>
          <button className="mt-2 bg-gray-300 text-gray-700 py-1 px-2 rounded">More Info</button>
        </div>
      </div>
    </div>
      </div>
        </div>
        </div>
    )
}

export default Assessment

