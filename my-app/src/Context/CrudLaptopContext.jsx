import axios from "axios";
import { createContext } from "react";
export let CrudLaptopContext = createContext();


export default function CrudLaptopProvider(props) {
  function getAllLaptops() {
    return axios
      .get(`API`)
      .then((res) => res)
      .catch((err) => err);
  }
  function getSpcificLaptop(productId) {
    return axios
      .post(`API/${productId}`)
      .then((res) => res)
      .catch((err) => err);
  }
  function addLaptop(productId) {
    return axios
      .post(`API/${productId}`)
      .then((res) => res)
      .catch((err) => err);
  }
  function deleteLaptop(productId) {
    return axios
      .delete(`API/${productId}`)
      .then((res) => res)
      .catch((err) => err);
  }
  function editLaptop(productId) {
    return axios
      .put(`API/${productId}`)
      .then((res) => res)
      .catch((err) => err);
  }
  return (
    <>
      <CrudLaptopContext.Provider value={{addLaptop, deleteLaptop, editLaptop, getAllLaptops, getSpcificLaptop}}>
        {props.children}
      </CrudLaptopContext.Provider>
    </>
  );
}
