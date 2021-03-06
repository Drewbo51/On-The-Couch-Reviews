import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Playing from "./components/Playing";
import Navbar from "./components/Navbar";
import Genres from "./components/Genres";
import SearchMovieContainer from "./components/SearchMovieContainer";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App-header">
        <Jumbotron />
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/searchReviews" component={SearchMovieContainer} />
        <Route exact path="/genres" component={Genres} />
        <Route exact path="/playing" component={Playing} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
