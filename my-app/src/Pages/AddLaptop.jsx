import React, { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import "./AddLaptop.css";
import axios from "axios";

export default function AddLaptop() {
  const [laptops, setLaptops] = useState([]);
  const [errors, setErrors] = useState({});
  const [NewLaptopData, setNewLaptopData] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    photo: "",
    category: "",
  });

  const API_URL = "http://localhost:6000/laptop/addLaptop";

  async function addLaptop(data) {
    try {
      const response = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error adding laptop:", error);
      throw error;
    }
  }

  async function getAllLaptops() {
    try {
      const response = await axios.get("http://localhost:6000/laptop");
      setLaptops(response.data);
    } catch (error) {
      console.error("Failed to fetch laptops:", error);
    }
  }

  const validateInputs = () => {
    const newErrors = {};
    if (!/^[a-zA-Z0-9\s]{3,50}$/.test(NewLaptopData.name)) {
      newErrors.name = "Name must be 3-50 characters and alphanumeric.";
    }
    if (!/^.{10,200}$/.test(NewLaptopData.description)) {
      newErrors.description = "Description must be 10-200 characters.";
    }
    if (!/^\d+$/.test(NewLaptopData.stock) || NewLaptopData.stock < 1) {
      newErrors.stock = "Stock must be a positive integer.";
    }
    if (!/^\d+(\.\d{1,2})?$/.test(NewLaptopData.price) || NewLaptopData.price < 10) {
      newErrors.price = "Price must be a positive number and at least 10 $.";
    }
    if (
      NewLaptopData.photo &&
      !/^https?:\/\/.+\.(jpg|jpeg|png)$/i.test(NewLaptopData.photo)
    ) {
      newErrors.photo = "Photo must be a valid URL ending with .jpg, .jpeg, or .png.";
    }
    if (!NewLaptopData.category) {
      newErrors.category = "Category is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewLaptopData({ ...NewLaptopData, [name]: value });
  }

  async function handleAddLaptop(e) {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
    try {
      const payload = {
        name: NewLaptopData.name,
        description: NewLaptopData.description,
        stock: NewLaptopData.stock,
        price: NewLaptopData.price,
        photo: NewLaptopData.photo,
        category: NewLaptopData.category,
      };

      await addLaptop(payload);
      toast.success("Laptop has been added successfully!");
      setNewLaptopData({
        name: "",
        description: "",
        stock: "",
        price: "",
        photo: "",
        category: "",
      });
      fetchAllTheLaptops();
    } catch (error) {
      toast.error("Failed to add the laptop.");
      console.error(error);
    }
  }

  async function fetchAllTheLaptops() {
    await getAllLaptops();
  }

  useEffect(() => {
    fetchAllTheLaptops();
  }, []);

  return (
    <div className="container">
      <div className="containerOfForm">
        <h1>Add a New Laptop</h1>
        <form className="form" onSubmit={handleAddLaptop}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={NewLaptopData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={NewLaptopData.description}
            onChange={handleInputChange}
            required
          />
          {errors.description && <p className="error">{errors.description}</p>}

          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={NewLaptopData.stock}
            onChange={handleInputChange}
            required
          />
          {errors.stock && <p className="error">{errors.stock}</p>}
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={NewLaptopData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Gaming">Gaming</option>
            <option value="Workstation">Workstation</option>
            <option value="Ultrabook">Ultrabook</option>
            <option value="Studying">Studying</option>
          </select>
          {errors.category && <p className="error">{errors.category}</p>}
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={NewLaptopData.price}
            onChange={handleInputChange}
            required
          />
          {errors.price && <p className="error">{errors.price}</p>}

          <label htmlFor="photo">Photo URL:</label>
          <input
            type="url"
            id="photo"
            name="photo"
            value={NewLaptopData.photo}
            onChange={handleInputChange}
            required
          />
          {errors.photo && <p className="error">{errors.photo}</p>}



          <button type="submit" className="btn add-btn">
            Add Laptop
          </button>
        </form>
      </div>
    </div>
  );
}
