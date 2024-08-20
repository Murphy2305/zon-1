import React from 'react';
import Blogs from './Blogs';
import Sidebar from './Sidebar';
import SearchResult from './SearchResult';
import PostDetails from './PostDetails'; 
import '../Styles/MainContainer.css';

const MainContainer = ({ que }) => {
  return (
    <div className="outer-container">
      {que === 'Home' ? (
        <Blogs />
      ) : que === 'Search' ? (
        <SearchResult />
      ) : que === 'Posts' ? (
        <PostDetails />
      ) : (
        <p>No content available</p> 
      )}

      <Sidebar />
    </div>
  );
};

export default MainContainer;
