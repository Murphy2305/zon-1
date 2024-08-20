import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
    const FootNav = [
        "Terms of Services",
        "Privacy Policy",
        "Contact Us: support@zonbase.com",
        "Sitemap"
      ];
      const socialHandles =[];

  return (
    <div className='foot-nav'>
        <div className="foot-left">
            <ul className="foot-left-list">
            {FootNav.map((term)=> <li className="foot-left-item"> {term}</li> )}
            </ul>
        </div>
        <div className="foot-right">
            <p className="foot-right-head">@Zonbase 2024</p>
        </div>
    </div>
  )
}

export default Footer