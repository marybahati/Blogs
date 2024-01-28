import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Blog Post</p>
        <p>&copy; Copyright {new Date().getFullYear()} . BlogPost</p>
      </div>
    </footer>
  );
};

export default Footer;
