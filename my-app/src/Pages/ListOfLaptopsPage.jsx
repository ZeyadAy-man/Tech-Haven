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
      const response = await axios.get(
        "https://labtop-store-backend-project.vercel.app/laptop/getAllLaptops"
      ); 
      setLaptops(response.data.laptops);
      console.log(response.data.laptops);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching laptops:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAlltheLaptops();
  }, []);

  return (
    <div className="containerr">
      <div className="containerOfForm">
        
      <button className="btn add">
        <Link to="/addLaptopPage">Add Product</Link>
      </button>

      <div className="row">
        {loading ? (
          <span className="loader"></span>
        ) : laptops.length > 0 ? (
          laptops.map((item) => (
            <div className="item-card" key={item._id}>
              <img src={item.photo} alt="" />
              <h3>{item.name.split(" ").slice(0, 2).join(" ")}</h3>
              <p>Price: {item.price}$</p>
              <br />
              <p>Stock: {item.stock}</p>
              <br />
              <p>Rate: {item.rate}</p>
              <div className="layer">
                <Link to={`getLaptopById/${item._id}`}>
                  <button className="btn remove">Remove</button>
                </Link>

                <Link to={`editLaptopPage/${item._id}`}>
                  <button className="btn edit">Edit</button>
                </Link>
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
    </div>
  );
}
