import { usePlay } from "../context/Play";

export const Modal = () => {
  const { isModalOpen, setIsModalOpen, modalContent } = usePlay();

  if (!isModalOpen) return null;

  const handleClose = () => {
    console.log("Modal close clicked");
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={handleClose}
    >
      <div
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "8px",
          maxWidth: "400px",
          width: "100%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {modalContent?.title && (
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            {modalContent.title}
          </h2>
        )}
        <p
          style={{
            color: "#4B5563",
            marginBottom: "24px",
            whiteSpace: "pre-line",
          }}
        >
          {modalContent?.subtitle}
        </p>
        <button
          onClick={handleClose}
          style={{
            background: "#3B82F6",
            color: "white",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
