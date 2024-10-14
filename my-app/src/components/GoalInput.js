import React, { useState } from "react";

const GoalInput = ({ addGoal }) => {
    const [newGoal, setNewGoal] = useState("");

    const handleAddGoal = () => {
        if (newGoal.trim() !== "") {
            addGoal(newGoal);
            setNewGoal("");
        }
    };

    return (
        <div style={styles.inputRow}>
            <input
                type="text"
                placeholder="Ajouter un objectif"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleAddGoal} style={styles.button}>
                Add
            </button>
        </div>
    );
};

const styles = {
    inputRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "10px",
    },
    input: {
        flex: 1,
        padding: "8px",
        marginRight: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "8px 16px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default GoalInput;
