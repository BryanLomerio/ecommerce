import React from 'react';

// "children" is whatever put inside <Card>...</Card>.
const Card = ({ children }) => {
   {/* This will display whatever is inside <Card></Card> so when it call to the other components it will display this styles */}
  return <div className="bg-red-200 w-full h-40 flex items-center justify-center">{children}</div>;
};

export default Card;
