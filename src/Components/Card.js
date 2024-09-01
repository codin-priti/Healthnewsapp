import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  const bookmarkarticle = (article) => {
    // Get existing bookmarks from local storage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedarticles')) || [];

    // Check if the article is already bookmarked
    const isBookmarked = bookmarks.some((item) => item.url === article.url);

    if (!isBookmarked) {
        // Add new article to bookmarks
        bookmarks.push(article);
        localStorage.setItem('bookmarkearticle', JSON.stringify(bookmarks));
        alert("Book mark added");
    } else {
        alert(" Already bookmarked");
    }
};


  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            <div key={index} className="card">
              <img src={curItem.urlToImage} alt={curItem.title} />
              <div className="content">
                <a className="title" onClick={() => readMore(curItem.url)}>
                  {curItem.title}
                </a>
                <p>{curItem.description}</p>
                <button onClick={() => readMore(curItem.url)}>Read More</button>
                <button onClick={() => bookmarkarticle(curItem)}>Book Mark</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
