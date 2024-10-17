// src/pages/HomePage.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

function HomePage() {
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            .then(response => response.json())
            .then(data => setCocktails(data.drinks));
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const addToFavorites = (cocktail) => {
        // Récupérer les favoris existants dans localStorage
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        // Vérifier si le cocktail est déjà dans les favoris
        const alreadyFavorited = storedFavorites.some(fav => fav.idDrink === cocktail.idDrink);

        if (!alreadyFavorited) {
            // Ajouter le nouveau cocktail aux favoris
            const updatedFavorites = [...storedFavorites, cocktail];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            alert(`${cocktail.strDrink} a été ajouté aux favoris !`);
        } else {
            alert(`${cocktail.strDrink} est déjà dans les favoris.`);
        }
    };

    return (
        <div>
            {/* Champ de recherche */}
            <input
                type="text"
                placeholder="Rechercher par ingrédient..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
            />

            {/* Liste des cocktails filtrée */}
            <div className="cocktail-list">
                {cocktails
                    .filter(cocktail =>
                        cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .slice(0, 200) // Limiter à 200 cocktails
                    .map(cocktail => (
                        <div key={cocktail.idDrink} className="cocktail-card">
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                            <h3>{cocktail.strDrink}</h3>
                            <Link to={`/cocktail/${cocktail.idDrink}`} className="btn">Voir la recette</Link>
                            <button onClick={() => addToFavorites(cocktail)} className="btn-fav">Ajouter aux favoris</button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default HomePage;
