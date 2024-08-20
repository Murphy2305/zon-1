import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Updates from './Updates';
import '../Styles/SearchResult.css';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://www.zonbase.com/blog/wp-json/wp/v2/posts?_embed')
      .then(response => {
        let filteredPosts = response.data;
        
        if (query) {
          filteredPosts = filteredPosts.filter(post => 
            post.title.rendered.toLowerCase().includes(query.toLowerCase()) ||
            post.content.rendered.toLowerCase().includes(query.toLowerCase()) ||
            post.excerpt.rendered.toLowerCase().includes(query.toLowerCase())
          );
        }
        
        setPosts(filteredPosts);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [query]);

  return (
    <>
      {posts.length > 0 ? (
        <div className="updati">
          {posts.map(post => (
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
          ))}
        </div>
      ) : (
        <div className='outer-noResult'>
        <div className='NoResult'style={{backgroundColor:"orange", width:"2px", height:"25px"}}></div>
        <div className='NoResultText'>SEARCH RESULTS : {query.toUpperCase()} 
        
        <div className='numbering'>
          (0)
        </div>
        </div>
        </div> 
        

      )}
    </>
  );
};

export default SearchResult;

