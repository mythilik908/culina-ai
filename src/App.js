
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/searchPage/SearchPage'
import MainPage from './components/mainPage/MainPage';
import RecipePage from './components/recipePage/RecipePage'
import FavPage from './components/favPage/FavPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/favorites" element={<FavPage />} />
      </Routes>
    </Router>
  );
}

export default App;
