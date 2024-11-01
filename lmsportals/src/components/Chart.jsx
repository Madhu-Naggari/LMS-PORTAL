import React from 'react';
import {
 PieChart,
  BarChart,
      LineChart,
  Line,
  Bar,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';

const Chart = () => {
  // Sample data for progress and statistics
  const progressData = [
    { name: 'Week 1', progress: 50 },
    { name: 'Week 2', progress: 70 },
    { name: 'Week 3', progress: 80 },
    { name: 'Week 4', progress: 90 },
    { name: 'Week 5', progress: 100 },
  ];

  const pieData = [
    { name: 'Completed', value: 60 },
    { name: 'In Progress', value: 30 },
    { name: 'Missed', value: 10 },
  ];
const data = [
  { name: 'Math', score: 85 },
  { name: 'Science', score: 90 },
  { name: 'English', score: 75 },
  { name: 'History', score: 80 },
  { name: 'Art', score: 95 },
];

const pdata = [
  { date: '2023-10-01', activity: 30 },
  { date: '2023-10-02', activity: 45 },
  { date: '2023-10-03', activity: 28 },
  { date: '2023-10-04', activity: 50 },
  { date: '2023-10-05', activity: 35 },
  { date: '2023-10-06', activity: 60 },
  { date: '2023-10-07', activity: 40 },
];
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-black">Learning Progress Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 justify-around mb-8">
        {/* Line Chart for Progress Over Time */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Progress Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="progress" stroke="#4caf50" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart for Assignment Status */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Assignment Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Tooltip />
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#82ca9d"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? '#4caf50' : index === 1 ? '#ff9800' : '#f44336'}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
                {/* HornorScore */}
   <div className=" bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-semibold mb-4">Horner Score Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#4caf50" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    {/* activity */}
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-semibold mb-4">Activity Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={pdata}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="activity" stroke="#4caf50" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-10">
        <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Total Courses Enrolled</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-full">
            <i className="fas fa-book-reader text-blue-600 fa-2x"></i>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Total Assignments Completed</h3>
            <p className="text-2xl font-bold">30</p>
          </div>
          <div className="bg-green-100 p-2 rounded-full">
            <i className="fas fa-check-circle text-green-600 fa-2x"></i>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Overall Progress</h3>
            <p className="text-2xl font-bold">85%</p>
          </div>
          <div className="bg-yellow-100 p-2 rounded-full">
            <i className="fas fa-chart-line text-yellow-600 fa-2x"></i>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Feedback Ratings</h3>
            <p className="text-2xl font-bold">4.5/5</p>
          </div>
          <div className="bg-purple-100 p-2 rounded-full">
            <i className="fas fa-star text-purple-600 fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
