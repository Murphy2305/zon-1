import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Updates from './Updates';
import '../Styles/Blogs.css';




const Blogs = () => {
    
    const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    axios.get('https://www.zonbase.com/blog/wp-json/wp/v2/posts?_embed')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  
// Pagination logic
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
const totalPages = Math.ceil(posts.length / postsPerPage);

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

const renderPagination = () => {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={`page-button ${currentPage === i ? 'active' : ''}`}
      >
        {i}
      </button>
    );
  }
  return pages;
};
let le = '<';
  let re = ' >';




  return (
    <div className="updati">
                {currentPosts.length > 0 ? (
                  currentPosts.map(post => (
                    <Updates
                      key={post.id}
                      time={'5 min'} // Example value, adjust as needed
                      date={new Date(post.date).toLocaleDateString()}
                      Title={post.title.rendered}
                      writer={post._embedded.author[0].name}
                      image={post._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.medium?.source_url || ''}
                      excerpt={post.excerpt.rendered}
                      slug={post.slug}
                      writerImg={post._embedded.author[0].avatar_urls['48']}
                    />
                  ))
                ) : (
                  <p>No posts available</p>
                )}

                <div className="pagination">
                  {currentPage > 1 && (
                    <button className='page-button' onClick={() => handlePageChange(currentPage - 1)}> {le} </button>
                  )}
                  {renderPagination()}
                  {currentPage < totalPages && (
                    <button className='page-button' onClick={() => handlePageChange(currentPage + 1)}>{re}</button>
                  )}
                </div>
              </div>
  )
}

export default Blogs