import logo from './logo.svg';
import './App.css';




import React, { useState } from "react";

const GoalList = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  const addGoal = () => {
    if (newGoal.trim() !== "") {
      setGoals([...goals, newGoal]);
      setNewGoal(""); // Réinitialiser le champ input après ajout
    }
  };

  return (
      <div style={styles.container}>
        <div style={styles.inputRow}>
          <input
              type="text"
              placeholder="Ajouter un objectif"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              style={styles.input}
          />
          <button onClick={addGoal} style={styles.button}>
            Add
          </button>
        </div>
        <ul style={styles.goalList}>
          {goals.map((goal, index) => (
              <li key={index} style={styles.goalItem}>
                {goal}
              </li>
          ))}
        </ul>
      </div>
  );
};

// Styles en ligne
const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
  },
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
  goalList: {
    listStyleType: "none",
    padding: 0,
  },
  goalItem: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
  },
};

export default GoalList;


