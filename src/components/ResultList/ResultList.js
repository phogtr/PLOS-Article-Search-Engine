import { useState } from "react";
import "./ResultList.style.css";

const ResultList = ({ titleDisplay, authorDisplay, articleAbstract }) => {
  const [displayArticleAbstract, setDisplayArticleAbstract] = useState(false);

  const onMouseEnterResult = () => {
    setDisplayArticleAbstract(true);
  };

  const onMouseLeaveResult = () => {
    setDisplayArticleAbstract(false);
  };

  return (
    <>
      <li className="card" onMouseEnter={onMouseEnterResult} onMouseLeave={onMouseLeaveResult}>
        <h2>{titleDisplay}</h2>
        {authorDisplay && (
          <div className="author__wrapper">
            <h4>Author: </h4>
            <ul className="author__list">
              {authorDisplay.map((author, idx) => (
                <li key={author}>{author}</li>
              ))}
            </ul>
          </div>
        )}
      </li>
      {displayArticleAbstract && (
        <>
          {articleAbstract[0] ? (
            <>
              {articleAbstract.map((article) => (
                <div className="article__container">
                  <h3>Article Abstract</h3>
                  {article}
                </div>
              ))}
            </>
          ) : (
            <div className="article__empty">N/A</div>
          )}
        </>
      )}
    </>
  );
};

export default ResultList;
