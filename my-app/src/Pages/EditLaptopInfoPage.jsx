import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./EditLaptopInfoPage.css";

export default function EditLaptopInfoPage() {
  const [laptopDetails, setLaptopDetails] = useState({
    name: "",
    description: "",
    price: "",
    cpu: "",
    gpu: "",
    ram: "",
    photo: "",
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchLaptopById(laptopId) {
    try {
      const response = await axios.get(
        `https://labtop-store-backend-project.vercel.app/laptop/getLaptopById/${laptopId}`
      );
      setLaptopDetails(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching laptop:", error);
      toast.error("Failed to load laptop details.");
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLaptopDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  }

  function editLaptop(productId, payload) {
    return axios
      .put(
        `https://labtop-store-backend-project.vercel.app/laptop/updateLaptopById/${productId}`,
        payload
      )
      .then((res) => res)
      .catch((err) => err);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await editLaptop(id, laptopDetails);
      toast.success("Product updated successfully!");
      navigate("/laptop");
    } catch (error) {
      console.error("Error updating laptop", error);
      toast.error("Failed to update product.");
    }
  }

  useEffect(() => {
    fetchLaptopById(id);
  }, [id]);

  if (loading) {
    return <p>Loading laptop details...</p>;
  }

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
            <label className="form-label">CPU:</label>
            <input
              type="text"
              name="cpu"
              className="form-input"
              value={laptopDetails.cpu}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">GPU:</label>
            <input
              type="text"
              name="gpu"
              className="form-input"
              value={laptopDetails.gpu}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">RAM:</label>
            <input
              type="text"
              name="ram"
              className="form-input"
              value={laptopDetails.ram}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Photo URL:</label>
            <input
              type="url"
              name="photo"
              className="form-input"
              value={laptopDetails.photo}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update Laptop
          </button>
        </form>
      </div>
    </div>
  );
}
