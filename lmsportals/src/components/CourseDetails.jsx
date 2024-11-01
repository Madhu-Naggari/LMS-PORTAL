

import React from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import CourseDetails from './CourseDetails';

const CourseDetails = () => {
  const pieData = [
    { name: 'Completed', value: 75 },
    { name: 'Remaining', value: 25 }
  ];
  
  const lineData = [
    { day: 'Mon', progress: 20 },
    { day: 'Tue', progress: 40 },
    { day: 'Wed', progress: 60 },
    { day: 'Thu', progress: 70 },
    { day: 'Fri', progress: 75 },
    { day: 'Sat', progress: 80 },
    { day: 'Sun', progress: 100 }
  ];

  const COLORS = ['#4CAF50', '#E0E0E0'];

  return (
      <div className="min-h-screen  w-full p-6 bg-gray-100">
          <div className='text-center text-3xl md:text-2xl text-black'>
          <h1>Course Details</h1>
          </div>
          <br/>
          <br/>
      <div className="flex flex-col space-y-6">
        {/* Main Content: 50% Video and 50% Course Details */}
        <div className="flex flex-wrap md:w-full h-96">
          <div className="md:w-full w-1/2 bg-gray-800 rounded-lg flex items-center justify-center p-4">
            {/* Video Placeholder */}
            <video controls className="w-full h-full rounded-lg">
              <source src="your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="md:w-full w-1/2 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">Course Details</h2>
            <p className="mt-4 text-gray-600">This section includes a detailed description of the course, its objectives, and key points to help the learner understand what to expect.</p>
            <ul className="mt-4 text-gray-700 list-disc list-inside">
              <li>Lesson 1: Introduction</li>
              <li>Lesson 2: Core Concepts</li>
              <li>Lesson 3: Advanced Techniques</li>
              <li>Lesson 4: Practical Applications</li>
              <li>Lesson 5: Review and Final Project</li>
            </ul>
          </div>
        </div>

        {/* Progress Charts: 100% Width */}
        <div className="w-full flex flex-wrap space-y-6 md:space-y-0 relative md:top-32 md:space-x-6">
          {/* Pie Chart */}
          <div className="md:w-full w-1/2 h-96 mt-6 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Course Progress</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="text-center mt-2 text-gray-600">75% Completed</div>
          </div>

          {/* Line Chart */}
          <div className="md:w-full h-96 w-1/2 bg-white relative md:top-6 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-gray-800">Daily Progress</h3>
                      <br />
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <XAxis dataKey="day" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip />
                <Line type="monotone" dataKey="progress" stroke="#4CAF50" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
