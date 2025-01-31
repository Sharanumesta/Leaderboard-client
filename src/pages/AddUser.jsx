import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const AddUser = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setName(e.target.value);
    setError("");
  };

  const handleAddUserClick = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name cannot be empty");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/add-user`, { name });

      Swal.fire({
        icon: "success",
        title: "User Added",
        text: `User ${response.data.user.name} has been successfully added!`,
      }).then(() => {
        navigate("/");
      });
      setName("");
      setError("");
    } catch (error) {
      console.error("Error adding user:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Error while adding user",
      });
    }
  };

  const handleErrorClose = () => {
    setError(null);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row h-100 d-flex justify-content-center align-items-center">
          <div className="col-5 m-5 border rounded-5 p-5 border-secondary shadow-lg">
            <h1 className="pb-5 text-center text-white">Add User</h1>
            {error && (
              <div
                className="alert alert-danger alert-dismissible fade show text-center"
                role="alert"
              >
                {error}
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleErrorClose}
                  aria-label="Close"
                ></button>
              </div>
            )}
            <form onSubmit={handleAddUserClick}>
              <div className="">
                <label htmlFor="name" className="form-label text-white">
                  User Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={handleInputChange}
                  placeholder="Enter user name"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary fs-5 mt-5">
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
