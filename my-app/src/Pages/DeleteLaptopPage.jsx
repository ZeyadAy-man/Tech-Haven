import React, { useContext, useEffect, useState } from "react";
import { CrudLaptopContext } from "../Context/CrudLaptopContext"
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import "./DeleteLaptopPage.css";
import axios from "axios";

export default function DeleteLaptopPage() {
  // const { deleteLaptop, getAllLaptops } = useContext(CrudLaptopContext);
  const [laptops, setLaptops] = useState([]); 
  const navigate = useNavigate();

  // Fetch all laptops from the API
  async function fetchAllTheLaptops() {
    try {
      const response = await getAllLaptops();
      setLaptops(response.data.data); // Populate the list
    } catch (error) {
      console.error("Error fetching laptops", error);
      toast.error("Failed to load laptops.");
    }
  }
  function getAllLaptops() {
    return axios
      .get(`API`)
      .then((res) => res)
      .catch((err) => err);
  }
  function deleteLaptop(productId) {
    return axios
      .delete(`API/${productId}`)
      .then((res) => res)
      .catch((err) => err);
  }
  // Delete a specific laptop
  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you wanna delete this product?"
    );
    if (!confirmDelete) return;

    try {
      await deleteLaptop(id); 
      toast.success("Product deleted successfully!");
      fetchAllTheLaptops(); 
    } catch (error) {
      console.error("Error deleting product", error);
      toast.error("Failed to delete product.");
    }
  }

  // Fetch laptops on component mount
  useEffect(() => {
    fetchAllTheLaptops();
  }, []);

  return (
    <div className="container">
      <div className="containerOfForm">
      <h2 className="header">Delete a Product</h2>
      {laptops.length > 0 ? (
        <table className="laptops-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {laptops.map((laptop) => (
              <tr key={laptop.id}>
                <td>{laptop.id}</td>
                <td>{laptop.name}</td>
                <td>{laptop.brand}</td>
                <td>{laptop.category}</td>
                <td>${laptop.price}</td>
                <td>
                  <button
                    className="btn delete-btn"
                    onClick={() => handleDelete(laptop.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="noProducts">
    <p className="no-products">No products have been found here, my friend.</p>
</div>

      )}
      <button className="btn add-btn" onClick={() => navigate("/addLaptopPage")}>
        Add New Laptop
      </button>
      </div>
    </div>
  );
}
