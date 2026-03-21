import axios from "axios";
import { useEffect, useState } from "react";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Available Cars</h2>

      {cars.map(car => (
        <div key={car.id} style={{ border: "1px solid black", margin: "8px", padding: "10px" }}>
          <h3>{car.brand} {car.model}</h3>
          <p>Rent: ₹{car.rentPerDay}</p>
          <p>Type: {car.type}</p>
        </div>
      ))}
    </div>
  );
}

export default CarList;
