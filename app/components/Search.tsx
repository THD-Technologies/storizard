import React, { useState } from 'react';

export default function Search() {
  // State to control the active state for the transition
  const [active, setActive] = useState(false);

  return (
    <div className="flex">
      {/* Button to trigger the transition */}
      <button
        onClick={() => setActive(!active)}
        className="flex items-center justify-center bg-blue-500 text-white size-9 rounded-lg"
      >
        <i className="bx bx-search"></i>
      </button>

      {/* Input field with transition */}
      <input
        className={`transition-all duration-300 ease-in-out mt-1 ${
          active ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
        type="text"
        placeholder="Search for your stories..."
      />
    </div>
  );
}
