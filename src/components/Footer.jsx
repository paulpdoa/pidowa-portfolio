import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <p className="text-center text-sm text-gray-400">&copy; 2026 Paul Andres. All rights reserved.</p>
        
        <div className="flex gap-6 justify-center text-sm">
          <a href="https://github.com/paulpdoa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/paul-andres-174747210" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
