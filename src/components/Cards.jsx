import React from 'react';

// "children" is whatever put inside <Card></Card>.
const Card = ({ children }) => {
   {/* This will display whatever is inside <Card></Card> so when it call to the other components it will display this styles */}
  return <div className="bg-[#1e1e1e] w-full h-60 flex items-center justify-center">{children}</div>;
};

export default Card;
