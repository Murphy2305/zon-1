import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
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

  // Extract headings for the ToC
  const extractHeadings = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headings = [];
    
    doc.querySelectorAll('h1, h2, h3').forEach(heading => {
      headings.push({
        id: heading.id || heading.innerText.replace(/\s+/g, '-').toLowerCase(), // Generate an ID if not present
        title: heading.innerText,
      });
    });

    return headings;
  };

  const tocSections = extractHeadings(post.content.rendered);

  return (
    <div className="post-details">
      
      
      <div className="toc">
        <h2>Table of Contents</h2>
        <ul>
          {tocSections.map((section, index) => (
            <li key={index}>
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ul>
      </div>
      
      
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      
      <h2>Author</h2>
      {post._embedded.author && (
        <p>
          <a href={`/author/${post._embedded.author[0].id}`}>
            {post._embedded.author[0].name}
          </a>
        </p>
      )}
     
      
    </div>
  );
};

export default PostDetails;
