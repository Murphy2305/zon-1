import React from 'react'
import Navbar from '../Components/Navbar'
import Signup from '../Components/Signup'
import MainContainer from '../Components/MainContainer'
import Try from '../Components/Try'
import Footer from '../Components/Footer'
import LinkBar from '../Components/LinkBar'

const Homepage = () => {
  return (
    <>
    <Navbar></Navbar>
    <Signup/>
    <MainContainer que = {'Home'}/>
    <Try/>
    <LinkBar></LinkBar>
    <Footer></Footer>
    </>
  )
}

export default Homepage