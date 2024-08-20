import React from 'react';
import '../Styles/Updates.css';
import { Link } from 'react-router-dom';

const Updates = ({ time, date, Title, writer, image, excerpt, slug, writerImg, id }) => {
  const MAX_LENGTH = 170;

  const truncateExcerpt = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }

    const truncated = text.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    return `${text.substring(0, lastSpaceIndex)}...`;
  };



  const trimmedExcerpt = truncateExcerpt(excerpt, MAX_LENGTH);

  return (
    <div className="up-cont">
      <div className="top">
        <p className="p-title">{Title}</p>
        <img src={writerImg} alt="writer" className="writer-img" />
        <span className="Writer-desc">By <a className="WriterName">{writer}</a></span>
        <span className="write-date">{date}</span> <span className="write-time">{time} Read</span>
      </div>
      <div className="bottom">
        <img src={image} id="lady" alt="post" />
        <div className="full-content">
          <span className="excerpt" dangerouslySetInnerHTML={{ __html: trimmedExcerpt }} />
          <div className="content-toggle">
            <Link to={`/post/${slug}`} className="checker">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updates;
