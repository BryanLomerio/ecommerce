import React, { useState, useEffect } from 'react';
import Card from '../components/Cards';

function Home() {
  // list of items to show in each Card
  const cardItems = [1, 2, 3, 4, 5, 6, 7, 8];
  const [showFirst, setShowFirst] = useState(true);

  // Use useEffect to change the container every 3 seconds automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`flex transition-transform duration-500 ${showFirst ? 'transform-none' : '-translate-x-full'}`}
      >
        {/* First Container */}
        <div className="flex-shrink-0 w-full h-full bg-green-300 flex items-center justify-center">
          <h2>Container 1</h2>

        </div>

        {/* Second Container */}
        <div className="flex-shrink-0 w-full h-full bg-red-300 flex items-center justify-center">
          <h2>Container 2</h2>

        </div>

      </div>

      {/*
        grid-cols-1 - 1 column on extra small screens
        sm:grid-cols-2 - small screens the grid will have 2 columns
        md:grid-cols-3 - on medium screens the grid will have 3 columns
        lg:grid-cols-4 - on large screens, the grid will have 4 columns
      */}
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {/*
          { } - use this to insert JavaScript inside HTML.
          Syntax: array.map(item => ( ... ))
          For each 'item' in cardItems, return a Card component.
        */}
        {cardItems.map(item => (
          <Card key={item}>{item}</Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
