import React, { useEffect, useState } from "react";
import "./ListOfLaptopsPage.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListOfLaptopsPage() {
  const [laptops, setLaptops] = useState([]); // State to hold the list of laptops
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch laptops from the API
  async function getAlltheLaptops() {
    try {
      const response = await axios.get("/API/laptops"); // Replace with your real API endpoint
      setLaptops(response.data.data); // Update state with fetched data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching laptops:", error);
      setLoading(false);
    }
  }

  // Fetch laptops when the component mounts
  useEffect(() => {
    getAlltheLaptops();
  }, []);

  return (
    <div className="container">
      <button className="btn add">
        <Link to="/addLaptopPage">Add Product</Link>
      </button>


      <div className="row">
        {loading ? (
          <span class="loader"></span>
        ) : laptops.length > 0 ? (
          laptops.map((item) => (
            <div className="item-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title.split(" ").slice(0, 2).join(" ")}</h3>
              <p>{item.price}</p>
              <div className="layer">
                <button className="btn remove">
                  <Link to={`/deleteLaptopPage/${item.id}`}>Remove</Link>
                </button>
                <button className="btn edit">
                  <Link to={`/editLaptopInfoPage/${item.id}`}>Edit</Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-laptops">
          <p>No laptops available.</p>
        </div>
        )}
      </div>
    </div>
  );
}
