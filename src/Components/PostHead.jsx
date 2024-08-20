import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostHead = () => {

    const { slug } = useParams(); // Get the post slug from the URL parameters
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPost = async () => {
        try {
          // Fetch posts and filter by slug
          const response = await axios.get('https://www.zonbase.com/blog/wp-json/wp/v2/posts?_embed');
          const filteredPost = response.data.find(post => post.slug === slug);
          
          if (filteredPost) {
            setPost(filteredPost);
          } else {
            setError('No post found with the given slug');
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPost();
    }, [slug]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching post: {error}</p>;
    if (!post) return <p>No post found</p>;
  

  return (
    <>
    <h1>{post.title.rendered}</h1>
      {post._embedded['wp:featuredmedia'] && (
        <img 
          src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} 
          alt={post.title.rendered} 
        />
      )}
    </>
  )
}

export default PostHead