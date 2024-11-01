import React from 'react'
import Chart from './Chart'
import SheduleBg from './assets/images/SheduleBg.jpg'
function Schedule() {
  const scheduleData = [
    {
      type: 'Class',
      title: 'React Basics',
      date: 'October 30, 2024',
      time: '10:00 AM - 11:30 AM',
      description: 'Introduction to React and component-based development.',
    },
    {
      type: 'Exam',
      title: 'Math Midterm',
      date: 'November 2, 2024',
      time: '1:00 PM - 3:00 PM',
      description: 'Covers Chapters 1-5. Bring your calculator.',
    },
    {
      type: 'Assignment',
      title: 'Science Project',
      dueDate: 'November 5, 2024',
      description: 'Group project on renewable energy sources.',
    },
  ];
  return (
    <div>
           <div className='relative w-full h-[90vh] bg-slate-300 '>
      <div className='main flex relative items-center justify-center bg-slate-800  h-[91vh] text-5xl md:text-3xl'>
               <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${SheduleBg})` }}>
          </div>
                <div className="relative text-center z-10 p-8 text-white">
        <h2 className="text-3xl  font-bold mb-4 text-green-500">DashBoard</h2>
        <p className="mb-6 text-xl">
          Monitor your achievements and stay motivated with real-time progress updates.
        </p>
      </div>
          <p className='absolute top-5  left-1 text-lg md:text-sm text-white'> Home/DashBoard</p>
            </div>
        <br/>
        <br/>

      <Chart/>
        <br/>
        <br />
      <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-black">Upcoming Schedule</h1>

      <div className="space-y-4">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">
              {item.type === 'Assignment' ? (
                `Due: ${item.dueDate}`
              ) : (
                <>
                  {item.date} - {item.time}
                </>
              )}
            </p>
            <p className="text-gray-500 mt-2">{item.description}</p>
            <button className="mt-4 bg-white border border-green-500 text-green-500 py-1 px-3 rounded transition duration-300 hover:bg-green-500 hover:text-white">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
      </div>
      
    </div>
  )
}

export default Schedule

