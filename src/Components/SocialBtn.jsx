import React from 'react';
import '../Styles/SocialBtn.css';

const SocialBtn = ({ name, colori }) => {
    return (
      <button className={`${name} social-btn`} style={{ backgroundColor: colori }}>
        {name}
      </button>
    );
  };

export default SocialBtn;
