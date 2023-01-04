import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import FilmDiary from "./components/FilmDiary";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import WorkSummary from "./components/Work";
// import letterboxdClient from "./data/letterboxd";

const App = () => {
  const [filmList, setFilmList] = useState([]);

  // useEffect(() => {
  //   const response = letterboxdClient();
  //   if (response) {
  //     setFilmList(response);
  //   }
  // }, []);

  return (
    <div className="App">
        <NavBar />
        <Splash />
        <About />
        {!filmList.length === 0 && (
          <>
            <FilmDiary
              filmList={filmList}
            />
            <hr className="dashed-divider"/>
          </>
        )}
        <WorkSummary />
        <Footer />
    </div>
  );
};

export default App;
