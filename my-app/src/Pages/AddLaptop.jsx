import React, { useState } from "react";
import toast from "react-hot-toast";
import "./AddLaptop.css";
import axios from "axios";

export default function AddLaptop() {
  const [errors, setErrors] = useState({});
  const [NewLaptopData, setNewLaptopData] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    cpu: "",
    displaySize: "",
    gpu: "",
    ram: "",
    storage: "",
    brand_id: "",
    category_id: "",
    photo: "",
  });

  async function addLaptop(data) {
    try {
      const response = await axios.post(
        `https://labtop-store-backend-project.vercel.app/laptop/addLaptop`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error adding laptop:", error);
      throw error;
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
    if (
      !/^\d+(\.\d{1,2})?$/.test(NewLaptopData.price) ||
      NewLaptopData.price < 10
    ) {
      newErrors.price = "Price must be a positive number and at least 10 $.";
    }
    if (!/^\d{1,2}GB$/i.test(NewLaptopData.ram)) {
      newErrors.ram = "RAM must be in the format like 8GB or 16GB.";
    }
    if (!/^\d{1,3}GB|TB$/i.test(NewLaptopData.storage)) {
      newErrors.storage = "Storage must be in GB or TB (e.g., 512GB, 1TB).";
    }
    if (!/^[a-zA-Z0-9\s]{3,30}$/.test(NewLaptopData.cpu)) {
      newErrors.cpu = "CPU must be 3-30 characters.";
    }
    if (!/^[0-9]+(inch|Inch)$/i.test(NewLaptopData.displaySize)) {
      newErrors.displaySize = "Display size must be in inches (e.g., 15inch).";
    }
    if (!NewLaptopData.gpu) {
      newErrors.gpu = "GPU is required.";
    }
    if (!NewLaptopData.brand_id) {
      newErrors.brand_id = "Brand ID is required.";
    }
    if (!NewLaptopData.category_id) {
      newErrors.category_id = "Category ID is required.";
    }
    if (
      NewLaptopData.photo &&
      !/^https?:\/\/.+\.(jpg|jpeg|png)$/i.test(NewLaptopData.photo)
    ) {
      newErrors.photo =
        "Photo must be a valid URL ending with .jpg, .jpeg, or .png.";
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
      const payload = { ...NewLaptopData };
      await addLaptop(payload);      
      toast.success("Laptop has been added successfully!");
      setNewLaptopData({
        name: "",
        description: "",
        stock: "",
        price: "",
        cpu: "",
        displaySize: "",
        gpu: "",
        ram: "",
        storage: "",
        brand_id: "",
        category_id: "",
        photo: "",
      });
    } catch (error) {
      toast.error("Failed to add the laptop.");
      console.error(error);
    }
  }

  return (
    <div className="container">

      <div className="containerOfForm">
        <h1>Add a New Laptop</h1>
        <form className="form" onSubmit={handleAddLaptop}>
          {[
            { label: "Name", id: "name", type: "text", value: NewLaptopData.name },
            { label: "Description", id: "description", type: "textarea", value: NewLaptopData.description },
            { label: "Stock", id: "stock", type: "number", value: NewLaptopData.stock },
            { label: "Price", id: "price", type: "number", value: NewLaptopData.price },
            { label: "CPU", id: "cpu", type: "text", value: NewLaptopData.cpu },
            { label: "Display Size", id: "displaySize", type: "text", value: NewLaptopData.displaySize },
            { label: "GPU", id: "gpu", type: "text", value: NewLaptopData.gpu },
            { label: "RAM", id: "ram", type: "text", value: NewLaptopData.ram },
            { label: "Storage", id: "storage", type: "text", value: NewLaptopData.storage },
            // { label: "Brand ID", id: "brand_id", type: "text", value: NewLaptopData.brand_id },
            // { label: "Category ID", id: "category_id", type: "text", value: NewLaptopData.category_id },
            // { label: "Photo URL", id: "photo", type: "url", value: NewLaptopData.photo },
          ].map(({ label, id, type, value }) => (
            <div key={id}>
              <label htmlFor={id}>{label}:</label>
              {type === "textarea" ? (
                <textarea
                  id={id}
                  name={id}
                  value={value}
                  onChange={handleInputChange}
                  required
                />
              ) : (
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={value}
                  onChange={handleInputChange}
                  required
                />
              )}
              {errors[id] && <p className="error">{errors[id]}</p>}

            </div>
                      ))}
 <select>
              <option>option1</option>
              <option>option2</option>
            </select>
          <button type="submit" className="btn add-btn">
            Add Laptop
          </button>
        </form>
       
      </div>
      
    </div>
  );
}
