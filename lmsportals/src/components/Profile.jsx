// import React from 'react'

// function Profile() {
//   return (
//      <div className='relative w-full h-[90vh] bg-slate-300 '>
//             <div className='flex relative items-center justify-center h-[91vh] text-5xl md:text-3xl'>
//                 Home/Profile
//             </div>
//             <div className='relative h-screen w-full flex items-center justify-center'>
//                 <div className='w-[98%] h-full bg-red-500'>

//                 </div>
//             </div>
//         </div>
//   )
// }

// export default Profile

import React, { useState } from 'react';

const rankStyles = {
  bronze: 'bg-yellow-600 text-white',
  silver: 'bg-gray-400 text-white',
  gold: 'bg-yellow-500 text-white',
  diamond: 'bg-blue-600 text-white',
  platinum: 'bg-gray-200 text-black',
};

const Profile = () => {
  const [formData, setFormData] = useState({
    username: 'Student Name',
    profilePhoto: null,
    rank: 'gold',
    bio: 'This is a short bio about the student.',
    email: 'student@example.com',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePhoto') {
      setFormData({ ...formData, profilePhoto: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleLogout = () => {
    console.log('User logged out');
    // Implement your logout logic here
  };

  return (
    <div className="flex flex-col  max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6 md:space-y-0 md:space-x-6">
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex-1">
        <h2 className="text-2xl font-semibold mb-4 text-black">Profile</h2>
        <div className="flex items-center mb-4">
          <img
            src={formData.profilePhoto ? URL.createObjectURL(formData.profilePhoto) : 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">{formData.username}</h3>
            <p className="text-gray-600">{formData.email}</p>
            <div className={`inline-flex items-center px-3 py-1 rounded-full ${rankStyles[formData.rank]}`}>
              {formData.rank.charAt(0).toUpperCase() + formData.rank.slice(1)}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            rows="3"
          />
        </div>

        <button
          onClick={handleLogout}
          className="w-96 md:w-56 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex-1">
        <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
        
        <div className="grid grid-cols-1  gap-4">
          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold">Upcoming Assignments</h3>
            <ul>
              <li>Assignment 1: Due on 10/30</li>
              <li>Assignment 2: Due on 11/05</li>
            </ul>
          </div>

          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold">Completed Courses</h3>
            <ul>
              <li>Course 1: Completed</li>
              <li>Course 2: Completed</li>
            </ul>
          </div>

          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <ul>
              <li>No new notifications</li>
            </ul>
          </div>

          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold">Course Progress</h3>
            <div className="bg-blue-200 rounded-full">
              <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{ width: '70%' }}>
                70%
              </div>
            </div>
            <p className="mt-2">You have completed 70% of your courses.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

