import React from "react";

const Background = ({ children }) => {
  return (
    <div className="w-[100%] h-[100vh] bg-charcoal flex items-center justify-center">
      {children}
    </div>
  );
};

export default Background;
