import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Breadcrumb.css'; 

const Breadcrumb = ({ paths }) => {
  return (
    <div className="bread">
      <nav className="breadcrumb">
      {paths.map((path, index) => (
        <span key={index}>
          {index > 0 && '»'} &nbsp;&nbsp;
          {path.link ? (
            <Link to={path.link}>{path.name}</Link>
          ) : (
            <span>{path.name}</span>
          )}
        </span>
      ))}
    </nav>
    </div>
    
  );
};

export default Breadcrumb;
