// src/pages/FavoritesPage.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Récupérer les favoris depuis localStorage
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div>
            <h2>Mes favoris</h2>
            {favorites.length === 0 ? (
                <p>Aucun cocktail en favori pour le moment.</p>
            ) : (
                <div className="cocktail-list">
                    {favorites.map(cocktail => (
                        <div key={cocktail.idDrink} className="cocktail-card">
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                            <h3>{cocktail.strDrink}</h3>
                            <Link to={`/cocktail/${cocktail.idDrink}`} className="btn">Voir la recette</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavoritesPage;
