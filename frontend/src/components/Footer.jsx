import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 py-6 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Todo App. Built with MERN Stack.</p>
      <p className="mt-1">
        Designed by <span className="font-medium text-indigo-500">ManhFangg</span>
      </p>
    </footer>
  );
};

export default Footer;
