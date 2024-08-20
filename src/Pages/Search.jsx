import React from 'react'
import Navbar from '../Components/Navbar'
import Signup from '../Components/Signup'
import MainContainer from '../Components/MainContainer'
import Try from '../Components/Try'
import Footer from '../Components/Footer'
import LinkBar from '../Components/LinkBar'
import Breadcrumb from '../Components/Breadcrumb'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');
  const breadcrumbPaths = [
    { name: 'Home', link: '/' },
    { name: `Search Results for "${query}"` }
  ];
  return (
    <>

    <Navbar></Navbar>
    <Breadcrumb paths={breadcrumbPaths} />
    <MainContainer que ='Search'/>
    <Try/>
    <LinkBar></LinkBar>
    <Footer></Footer>
    </>
  )
}

export default Search