import React, { useState } from "react";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";
import Modal from "./Modal";

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

    const [editGoalIndex, setEditGoalIndex] = useState(null);
    const [editGoalValue, setEditGoalValue] = useState("");
    const [showModal, setShowModal] = useState(false);

    const addGoal = (newGoal) => {
        setGoals([...sampleGoals, newGoal]);
    };

    const removeGoal = (index) => {
        const updatedGoals = sampleGoals.filter((_, i) => i !== index);
        setGoals(updatedGoals);
    };

    const handleEdit = (index) => {
        setEditGoalIndex(index);
        setEditGoalValue(sampleGoals[index]);
        setShowModal(true);
    };

    const saveGoal = () => {
        const updatedGoals = [...sampleGoals];
        updatedGoals[editGoalIndex] = editGoalValue;
        setGoals(updatedGoals);
        setShowModal(false);
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
                        onEdit={() => handleEdit(index)}
                    />
                ))}
            </ul>

            <Modal show={showModal} handleClose={() => setShowModal(false)}>
                <h2>Modifier l'objectif</h2>
                <input
                    type="text"
                    value={editGoalValue}
                    onChange={(e) => setEditGoalValue(e.target.value)}
                    style={styles.input}
                />
                <button onClick={saveGoal} style={styles.saveButton}>
                    Enregistrer
                </button>
            </Modal>
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
    input: {
        width: "90%",
        padding: "8px",
        marginBottom: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    saveButton: {
        padding: "10px 20px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default GoalList;
