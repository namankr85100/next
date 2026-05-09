"use client"; 
import React, { useState } from 'react';
import { useTheme } from './context/ThemeContext';
const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
   <div>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-cyan-500 z-20 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Click Me
      </button>

      {/* Pop-up Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyan bg-opacity-50">
          {/* Modal Box */}
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Hello!</h2>
            <p className="text-gray-600 mb-6">This is a simple pop-up made with React and Tailwind CSS.</p>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              </button>
              <p>Theme: {theme}</p>
              <button
              className='w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition'
              onClick={()=> 
                toggleTheme()
                // setTheme(theme=='light'?'dark':'light')
              }
              >Change Theme </button>
              Close
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
