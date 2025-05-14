import React from "react";

export const Modal = ({ isOpen, onClose, onContinue, islandName }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        pointerEvents: "auto",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "8px",
          padding: "24px",
          maxWidth: "400px",
          width: "100%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          pointerEvents: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          Explore Island
        </h2>
        <p style={{ marginBottom: "16px" }}>
          Ingin menjelajahi pulau {islandName}?
        </p>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "16px" }}
        >
          <button
            onClick={onContinue}
            style={{
              padding: "8px 16px",
              background: "#d1d5db",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.background = "#9ca3af")}
            onMouseOut={(e) => (e.target.style.background = "#d1d5db")}
          >
            Lanjutkan
          </button>
          <button
            onClick={() => {
              console.log(`Jelajahi ${islandName}`);
              onClose();
            }}
            style={{
              padding: "8px 16px",
              background: "#3b82f6",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.background = "#2563eb")}
            onMouseOut={(e) => (e.target.style.background = "#3b82f6")}
          >
            Jelajahi
          </button>
        </div>
      </div>
    </div>
  );
};
