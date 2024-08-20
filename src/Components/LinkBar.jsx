import React from 'react'
import tools from '../Data/Tools';
import logo from '../assets/logo.png';
import flag from '../assets/Flags.png';
import LinkBlock from './LinkBlock';
import '../Styles/LinkBar.css'

const LinkBar = () => {

    const NeedHelp = [
        '5 Day Challenge',
        'ZonBase Academy',
        "Help Articles",
        "Our Team",
        "Careers",
        "Our Review"
      ];



  return (
    <div className="footing">
        <div className="leftcol">
          <div className="leftcol-first">
            <img src={logo} alt="logo" className="foot-logo" />
            <img src={flag} alt="flag" className="foot-flag" />
            <p className="leftcol-first-quote">Sell More, Work Less</p>
          </div>
          <div className="leftcol-second">
            <p className="leftcol-second-needHelp">Need Help?</p>
            <ul>
              {NeedHelp.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right-col">
          {Object.entries(tools).map(([name, linkar]) => (
            <LinkBlock key={name} name={name} linkar={linkar} />
          ))}
        </div>
      </div>
  )
}

export default LinkBar