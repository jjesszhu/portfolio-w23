import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import FilmDiary from "./components/FilmDiary";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import WorkSummary from "./components/Work";
import letterboxd from "./data/letterboxd";

const App = () => {
  const [filmList, setFilmList] = useState([]);

  const getLetterboxdFeed = () => {
    letterboxd("jesszhu")
      .then((items) => setFilmList(items.slice(0, 3)))
      .catch(() => setFilmList(null));
  };

  useEffect(() => {
    getLetterboxdFeed();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Splash />
      <About />
      { filmList ? 
        <>
          <FilmDiary filmList={filmList} />
          <hr className="dashed-divider" /> 
        </>
        :
        <p>"film diary could not be displayed"</p>
      }
      <WorkSummary />
      <Footer />
    </div>
  );
};

export default App;
