import React from 'react';
import "./navbar.css";
const NavBar = (props) => {
  const handleCategoryChange = (category) => {
    props.onCategoryChange(category);
  }

  return (
    <nav>
      <ul>
        <li><button onClick={() => handleCategoryChange('General')}>General</button></li>
        <li><button onClick={() => handleCategoryChange('Business')}>Business</button></li>
        <li><button onClick={() => handleCategoryChange('Entertainment')}>Entertainment</button></li>
        <li><button onClick={() => handleCategoryChange('Health')}>Health</button></li>
        <li><button onClick={() => handleCategoryChange('Science')}>Science</button></li>
        <li><button onClick={() => handleCategoryChange('Sports')}>Sports</button></li>
        <li><button onClick={() => handleCategoryChange('Technology')}>Technology</button></li>
      </ul>
    </nav>
  )
}

export default NavBar;
