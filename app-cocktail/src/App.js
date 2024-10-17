// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CocktailDetailPage from './pages/CocktailDetailPage'; // La page de détail que tu as déjà
import FavoritesPage from './pages/FavoritesPage'; // Nouvelle page des favoris

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cocktail/:id" element={<CocktailDetailPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
