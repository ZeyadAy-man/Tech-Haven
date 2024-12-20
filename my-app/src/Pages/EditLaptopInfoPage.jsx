import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./EditLaptopInfoPage.css";


export default function EditLaptopInfoPage() {
  const [laptopDetails, setLaptopDetails] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    category: "Gaming",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  async function getSpecificLaptop() {
    try {
      const response = await axios.get(`/API/laptops/${id}`);
      setLaptopDetails(response.data.data);
    } catch (error) {
      console.error("Error fetching laptop details", error);
      toast.error("Failed to load product details.");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLaptopDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  }

  function editLaptop(productId, payload) {
    return axios
      .put(`/API/${productId}`, payload)
      .then((res) => res)
      .catch((err) => err);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await editLaptop(id, laptopDetails);
      toast.success("Product updated successfully!");
      navigate("/laptops");
    } catch (error) {
      console.error("Error updating laptop", error);
      toast.error("Failed to update product.");
    }
  }

  useEffect(() => {
    getSpecificLaptop();
  }, []);

  return (
    <div className="container">
      <div className="containerOfForm">
      <h1 className="form-title">Edit Laptop Information</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Laptop Name:</label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={laptopDetails.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Brand:</label>
          <input
            type="text"
            name="brand"
            className="form-input"
            value={laptopDetails.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Price:</label>
          <input
            type="number"
            name="price"
            className="form-input"
            value={laptopDetails.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Description:</label>
          <textarea
            name="description"
            className="form-textarea"
            value={laptopDetails.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label className="form-label">Category:</label>
          <select
            name="category"
            className="form-select"
            value={laptopDetails.category}
            onChange={handleChange}
          >
            <option value="Gaming">Gaming</option>
            <option value="Workstation">Workstation</option>
            <option value="Ultrabook">Ultrabook</option>
            <option value="Studying">Studying</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Update Laptop
        </button>
      </form>
      </div>
      
    </div>
  );
}
