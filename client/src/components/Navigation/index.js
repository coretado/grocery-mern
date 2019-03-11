import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav>
        <div className="nav-wrapper green accent-2">
          <a href="#" className="brand-logo">Shopping List</a>
          <ul className="right">
            <li><a href="https://github.com">Github</a></li>
          </ul>
        </div>        
      </nav>
    </>
  );
}

export default Navigation;