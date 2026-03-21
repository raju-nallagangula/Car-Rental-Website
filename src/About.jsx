import React from "react";
import { useNavigate } from "react-router-dom";

// Example images (replace with your own image URLs)
const carImages = [
  { name: "Tesla Model 3", src: "https://tesla-cdn.thron.com/delivery/public/image/tesla/..." },
  { name: "BMW X5", src: "https://www.bmwusa.com/content/dam/bmwusa/x5/...jpg" },
  { name: "Audi Q7", src: "https://www.audi.com/content/dam/gbp/models/q7/q7-2022/...jpg" },
  { name: "Mercedes GLC", src: "https://www.mercedes-benz.com/content/dam/mb/...jpg" },
];

function About() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        background: "linear-gradient(to right, #74ebd5, #acb6e5)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "15px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
        }}
      >
        {/* Heading */}
        <h1 style={{ textAlign: "center", color: "#333", marginBottom: "25px", letterSpacing: "1px" }}>
          About Us
        </h1>

        {/* Company Introduction */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "20px", color: "#555" }}>
          Welcome! We are a passionate team dedicated to creating high-quality products and delivering exceptional services.  
          With over 10 years of experience in the automotive and tech industry, we combine innovation, reliability, and customer satisfaction in everything we do.  
          Our mission is to provide solutions that make a real difference in your life.
        </p>

        {/* Additional details */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "20px", color: "#555" }}>
          From our humble beginnings to our current status as a trusted car rental platform, our focus has always been on understanding our customers’ needs.  
          Every product we build and every service we offer is backed by research, attention to detail, and a commitment to excellence.
        </p>

        {/* Values */}
        <h2 style={{ color: "#6c63ff", marginBottom: "15px" }}>Our Values</h2>
        <ul style={{ fontSize: "17px", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
          <li><strong>Quality First</strong> – We never compromise on product or service quality.</li>
          <li><strong>Customer-Centric</strong> – Your needs and feedback drive our decisions.</li>
          <li><strong>Innovation</strong> – We constantly evolve to bring you the latest advancements.</li>
          <li><strong>Integrity</strong> – Honesty, transparency, and trust in every interaction.</li>
          <li><strong>Sustainability</strong> – Committed to eco-friendly and responsible practices.</li>
        </ul>

        {/* Car Showcase */}
        <h2 style={{ color: "#6c63ff", marginBottom: "15px" }}>Popular Cars We Offer</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginBottom: "30px" }}>
          {carImages.map((car, index) => (
            <div
              key={index}
              style={{
                width: "200px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={car.src} alt={car.name} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
              <p style={{ textAlign: "center", padding: "10px", fontWeight: "bold", color: "#333" }}>{car.name}</p>
            </div>
          ))}
        </div>

        {/* Extra company message */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "30px", color: "#555" }}>
          Our team works tirelessly to ensure that every car is well-maintained, safe, and ready to give you an unforgettable driving experience.  
          Customer satisfaction is at the heart of what we do, and we strive to exceed expectations every time.
        </p>

        {/* Go Back button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "12px 25px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#6c63ff",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s background-color, 0.3s transform",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#574fd6";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#6c63ff";
            e.target.style.transform = "scale(1)";
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default About;
