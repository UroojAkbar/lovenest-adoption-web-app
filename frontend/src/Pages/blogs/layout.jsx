import React from "react";

export default function RootLayout({ children }) {
  return (
    <div className="w-full flex flex-col items-center scroll-smooth">
      {children}
    </div>
  );
}
