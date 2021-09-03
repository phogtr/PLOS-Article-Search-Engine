import { useState, useEffect } from "react";
import { getData } from "./api/search.api";
import Search from "./components/Search/Search";
import ResultList from "./components/ResultList/ResultList";
import PaginationBtn from "./components/PaginationBtn/PaginationBtn";
import "./App.style.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [resultData, setResultData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [maxNumFound, setMaxNumFound] = useState(0);

  const onChangeInput = (event) => {
    setUserInput(event.target.value);
  };

  const onClickSearchBtn = () => {
    getData(userInput, currentIndex, pageSize).then((data) => {
      setResultData(data.response.docs);
      setMaxNumFound(data.response.numFound);
    });
  };

  const handleBackPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - pageSize);
    }
  };
  const handleNextPage = () => {
    if (currentIndex < maxNumFound - pageSize) {
      setCurrentIndex(currentIndex + pageSize);
    }
  };

  useEffect(() => {
    if (userInput) {
      getData(userInput, currentIndex, pageSize).then((data) => {
        setResultData(data.response.docs);
      });
    }
  }, [currentIndex]);

  return (
    <main className="App">
      <Search
        userInput={userInput}
        onChangeInput={onChangeInput}
        onClickSearchBtn={onClickSearchBtn}
      />
      <section>
        {resultData.length > 0 && (
          <>
            <ul className="card__wrapper">
              {resultData.map((item) => {
                return (
                  <ResultList
                    key={item.id}
                    titleDisplay={item.title_display}
                    authorDisplay={item.author_display}
                    articleAbstract={item.abstract}
                  />
                );
              })}
            </ul>
            <div className="btn__wrapper">
              <PaginationBtn
                text="Back"
                handlePageClick={handleBackPage}
                currentIndex={currentIndex}
                pageSize={pageSize}
                maxNumFound={maxNumFound}
              />
              <PaginationBtn
                text="Next"
                handlePageClick={handleNextPage}
                currentIndex={currentIndex}
                pageSize={pageSize}
                maxNumFound={maxNumFound}
              />
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
