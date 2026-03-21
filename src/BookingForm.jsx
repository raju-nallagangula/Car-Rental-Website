import React, { useState } from "react";
import axios from "axios";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    car: "",
    date: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitBooking = () => {
    if (!form.name || !form.email || !form.car || !form.date) {
      setError("Please fill all the details before booking!");
      setSuccess("");
      return;
    }
    setError("");
    axios
      .post("http://localhost:8080/api/booking", form)
      .then(() => {
        setSuccess("Booking Created Successfully!");
        setForm({ name: "", email: "", car: "", date: "" });
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong. Please try again.");
        setSuccess("");
      });
  };

  // Extra car options
  const carOptions = ["Tesla Model 3", "BMW X5", "Audi Q7", "Mercedes GLC", "Range Rover Evoque"];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #74ebd5, #acb6e5)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px 35px",
          borderRadius: "15px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "450px",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333", letterSpacing: "1px" }}>
          🚗 Car Booking Form
        </h2>

        <p style={{ textAlign: "center", marginBottom: "25px", color: "#666" }}>
          Choose your car, pick a date, and book your ride today! 🌟
        </p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={{
            display: "block",
            marginBottom: "18px",
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none",
            transition: "0.3s border-color",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{
            display: "block",
            marginBottom: "18px",
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none",
            transition: "0.3s border-color",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        <select
          name="car"
          value={form.car}
          onChange={handleChange}
          style={{
            display: "block",
            marginBottom: "18px",
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none",
            backgroundColor: "#fff",
            transition: "0.3s border-color",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        >
          <option value="">Select Car Model</option>
          {carOptions.map((car, index) => (
            <option key={index} value={car}>
              {car}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={{
            display: "block",
            marginBottom: "25px",
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none",
            transition: "0.3s border-color",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        <button
          onClick={submitBooking}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#6c63ff",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s background-color, 0.3s transform",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#574fd6";
            e.target.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#6c63ff";
            e.target.style.transform = "scale(1)";
          }}
        >
          Book Now 🚀
        </button>

        {error && <p style={{ color: "red", marginTop: "20px", textAlign: "center" }}>{error}</p>}
        {success && <p style={{ color: "green", marginTop: "20px", textAlign: "center" }}>{success}</p>}
      </div>
    </div>
  );
}

export default BookingForm;
