import React, { useState } from "react";

interface NavbarProps {
  onSearch: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    onSearch(searchTerm);
    setSearchTerm(searchTerm);
  };

  return (
    <header>
      <nav className="bg-gray-800 p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-2xl font-bold mb-2 md:mb-0 md:mr-4">
          <span className="text-yellow-500">Blogs</span> Post
        </div>
        <div className="flex items-center space-x-4">
          <h5 className="text-white hidden md:block">Blogs</h5>
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => handleSearch(e)}
            className="p-2 rounded border-none"
          />
          <button className="bg-blue-500 text-white p-2 rounded md:w-auto">
            Create Blog Post
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
