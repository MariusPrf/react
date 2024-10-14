import React, { useState } from "react";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";

const GoalList = () => {
    const [sampleGoals, setGoals] = useState([
        "Faire les courses",
        "Aller à la salle de sport 3 fois par semaine",
        "Monter à plus de 5000m d'altitude",
        "Acheter mon premier appartement",
        "Perdre 5 kgs",
        "Gagner en productivité",
        "Apprendre un nouveau langage",
        "Faire une mission en freelance",
        "Organiser un meetup autour de la tech",
        "Faire un triathlon",
    ]);

    const addGoal = (newGoal) => {
        setGoals([...sampleGoals, newGoal]);
    };

    const removeGoal = (index) => {
        const updatedGoals = sampleGoals.filter((_, i) => i !== index);
        setGoals(updatedGoals);
    };

    return (
        <div style={styles.container}>
            <GoalInput addGoal={addGoal} />
            <ul style={styles.goalList}>
                {sampleGoals.map((goal, index) => (
                    <GoalItem
                        key={index}
                        goal={goal}
                        onDelete={() => removeGoal(index)}
                    />
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
    },
    goalList: {
        listStyleType: "none",
        padding: 0,
    },
};

export default GoalList;
