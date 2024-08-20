import React from 'react'
import  '../Styles/LinkBlock.css'
const LinkBlock = ({ name, linkar }) => {
    const formatName = (name) => {
        return name.replace(/([a-z])([A-Z])/g, '$1 $2');
      };

    return (
        <div className="link-block">
            <p className="link-block-name">
                {formatName(name)}
            </p>
            <div className='link-block-list'>
                {linkar.map((data, index) => (
                    <div className='link-block-item'><a href=""  key={index}></a>{data}</div>
                    
                ))}
            </div>
        </div>
    )
}

export default LinkBlock;
