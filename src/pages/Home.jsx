import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";

const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/users`, {
        params: {
          page: page,
        },
      });
      setUsers(response.data.users);
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
      setError(null);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to fetch users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  

  const handleErrorClose = () => {
    setError(null);
  };

  return (
    <div className="container mt-4 p-4">
      <h2 className="text-center text-dark mb-4">Users</h2>

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

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <UserTable users={users} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Home;