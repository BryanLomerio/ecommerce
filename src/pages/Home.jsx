import React from 'react';
import Card from '../components/Cards';

function Home() {
  // list of items to show in each Card
  const cardItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="grid grid-cols-4 gap-4">
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
