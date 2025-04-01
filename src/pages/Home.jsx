import React from 'react';
import Card from '../components/Cards';

function Home() {
  // list of items to show in each Card
  const cardItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    // grid-cols-1 - 1 column on extra small screens
    // sm:grid-cols-2 - small screens the grid will have 2 columns
    // md:grid-cols-3 - on medium screens the grid will have 3 columns
    //lg:grid-cols-4 - on large screens, the grid will have 3 columns
    <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/*
        { } - use this to insert JavaScript inside HTML.
        Syntax: array.map(item => ( ... ))
        For each 'item' in cardItems, return a Card component.
      */}
      {cardItems.map(item => (
        <Card key={item}>{item}</Card>
      ))}
    </div>
  );
}

export default Home;
