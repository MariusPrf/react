import React from "react";

const GoalItem = ({ goal, onDelete }) => {
    return (
        <li style={styles.goalItem}>
            {goal}
            <button onClick={onDelete} style={styles.deleteButton}>
                ✖
            </button>
        </li>
    );
};

const styles = {
    goalItem: {
        padding: "8px",
        borderBottom: "1px solid #ddd",
    },
    deleteButton: {
        marginLeft: "10px",
        padding: "4px 8px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default GoalItem;
