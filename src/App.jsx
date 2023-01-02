import "./App.css";
import FilmDiary from "./components/FilmDiary";
import letterboxdClient from "./data/letterboxd";
// import NavBar from './components/NavBar';

const App = () => {
  const filmList = letterboxdClient();

  return (
    <div className="App">
      <header>
        <FilmDiary
          filmList={filmList}
        />
      </header>
    </div>
  );
};

export default App;
