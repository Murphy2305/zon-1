import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb';
import Navbar from '../Components/Navbar';
import Loader from '../Components/Loader'
import PostHead from '../Components/PostHead';
import MainContainer from '../Components/MainContainer';
import Try from '../Components/Try';
import LinkBar from '../Components/LinkBar';
import Footer from '../Components/Footer';
const Posts = () => {

  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://www.zonbase.com/blog/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then(response => {
        if (response.data.length > 0) {
          setPost(response.data[0]);
        } else {
          setPost(null);
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p><Loader></Loader></p>;
  if (error) return <p>Error fetching post: {error.message}</p>;
  if (!post) return <p>No post found</p>;

  const breadcrumbPaths = [
    { name: 'Home', link: '/' },
    { name: 'Zonbase', link: '/' },
    { name: post.title.rendered }
  ];

  return (
    <>
    <Navbar></Navbar>
    <Breadcrumb paths={breadcrumbPaths} />
    <PostHead/>
    <MainContainer que ={'Posts'}/>
    <Try/>
    <LinkBar/>
    <Footer/>
    </>
  );
};
  

export default Posts

