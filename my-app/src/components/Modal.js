import React from "react";

const Modal = ({ show, handleClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
                {children}
                <button onClick={handleClose} style={styles.closeButton}>Fermer</button>
            </div>
        </div>
    );
};

const styles = {
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "4px",
        width: "300px",
        textAlign: "center",
    },
    closeButton: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default Modal;
