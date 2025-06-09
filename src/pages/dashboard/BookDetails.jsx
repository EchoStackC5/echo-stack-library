import { useState } from "react"
import img from "../../assets/images/img1.png"
export default function BookDetails() {
    const [isOpen, setIsOpen] = useState(false);
    return (
            <section className="relative">
      {/* Thumbnail image */}
      <img
        src={img}
        alt="Book"
        onClick={() => setIsOpen(true)}
        style={{ width: "200px", cursor: "pointer" }}
      />

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "20px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <img
              src={img}
              alt="Full view"
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
            />
          </div>
        </div>
      )}
        </section>
    )
}