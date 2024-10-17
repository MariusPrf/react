// src/pages/CocktailDetailPage.js
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CocktailDetailPage() {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => setCocktail(data.drinks[0]));
    }, [id]);

    if (!cocktail) return <p>Loading...</p>;

    return (
        <div className="cocktail-detail">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h1>{cocktail.strDrink}</h1>
            <h2>Ingrédients</h2>
            <ul>
                {Object.keys(cocktail)
                    .filter(key => key.startsWith('strIngredient') && cocktail[key])
                    .map(key => (
                        <li key={key}>
                            {cocktail[key]}
                            <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail[key]}-Small.png`} alt={cocktail[key]} />
                        </li>
                    ))}
            </ul>
            <p>{cocktail.strInstructions}</p>
        </div>
    );
}

export default CocktailDetailPage;
