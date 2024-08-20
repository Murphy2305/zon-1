import React, { useState } from 'react';
import '../Styles/Sidebar.css';
import SocialBtn from './SocialBtn';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => { // Changed 'sidebar' to 'Sidebar' to follow React naming conventions

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const buttons = [
    { name: 'Facebook', colori: '#3b5998' },
    { name: 'Twitter', colori: '#1da1f2' },
    { name: 'Instagram', colori: '#e1306c' },
    { name: 'Youtube', colori: 'red' },
    // Add more buttons as needed
  ];

  const handleSearch = () => {
    let t = searchQuery.trim();
    if (t) {
      navigate(`/search?search=${t}`);
    }
    else
    {
      alert('Write Some text to search!')
      setSearchQuery("");
    }
  };

  return (
    <div className="side-outer">
      <div className='side-cont'>

        <div className="side-search">
          <p className='side-search-head'>SEARCH</p>
          <input 
            type="text" 
            name="searchin" 
            id="side-search" 
            placeholder='Search...' 
            className='side-searchbox' 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button className='side-search-btn' type='submit' onClick={handleSearch}>Search</button>
        </div>

        <div className="side-subscribe">
          <p className='side-subscribe-head'>Join our newsletter</p>
          <p className="side-subscibe-content">Subscribe to our newsletter to get the latest <br />
            news, updates, and access to exclusive content to <br />
            help you build a successful business on Amazon</p>
          <input type="email" id="side-subscribe" placeholder='Your email address...' className='side-subscribebox' />
          <button className='side-subscribe-btn'>Subscribe</button>
        </div>

        <div className="side-socials">
          <p className="side-socials-head">WE ARE SOCIAL</p>
          <div className="social-btns">
            {buttons.map((button, index) => (
              <SocialBtn key={index} name={button.name} colori={button.colori} />
            ))}
          </div>
        </div>

        <div className="side-tiktok">
          <p className="side-tiktok-head">FOLLOW ON TIKTOK</p>
          <button className="tiktok-btn socials-btn">TikTok</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
