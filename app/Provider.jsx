import React from "react";
import Header from "./_components/Header";

function Provider({ children }) {
  return (
    <div className="px-10 md:px-20 relative">
      <Header />
      {children}
    </div>
  );
}

export default Provider;
