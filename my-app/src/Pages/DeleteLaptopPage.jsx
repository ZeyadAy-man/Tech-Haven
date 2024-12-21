import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./DeleteLaptopPage.css";

export default function DeleteLaptopPage() {
  const { id } = useParams(); // Get the laptop ID from the URL
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
// console.log(id);

  // Fetch the specific laptop by ID
  async function fetchLaptopById(laptopId) {
    try {
      const response = await axios.get(
        `https://labtop-store-backend-project.vercel.app/laptop/getLaptopById/${laptopId}`
      );
      setLaptop(response.data);
      console.log(response.data);
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching laptop:", error);
      toast.error("Failed to load laptop details.");
      setLoading(false);
    }
  }

  // Delete the laptop
  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;
    else{
      try {
        await axios.delete(`https://labtop-store-backend-project.vercel.app/laptop/deleteLaptopById/${id}`);
        toast.success("Laptop deleted successfully!");
        navigate("/laptop"); // 
      } catch (error) {
        console.error("Error deleting laptop:", error);
        toast.error("Failed to delete laptop.");
      }
    }
    }

    

  // Fetch the laptop when the component mounts
  useEffect(() => {
    if (id) fetchLaptopById(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <span className="loader"></span>
      ) : laptop ? (
        <div className="container">
          <div className="containerOfForm">
            <h2 className="header">Delete a Product</h2>
            <img src={laptop.photo} alt="" />
            <table className="laptop-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Storage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{laptop._id}</td>
                  <td>{laptop.name}</td>
                  <td>{laptop.stock}</td>
                  <td>${laptop.price}</td>
                  <td>{laptop.storage}</td>
                </tr>
              </tbody>
            </table>
            <button className="btn delete-btn" onClick={handleDelete}>
              Delete
            </button>
            <button
              className="btn add-btn"
              onClick={() => navigate("/addLaptopPage")}
            >
              Add New Laptop
            </button>
          </div>
        </div>
      ) : (
        <div className="noProducts">
          <p className="no-products">No product found for this ID.</p>
        </div>
      )}
    </>
  );
}
