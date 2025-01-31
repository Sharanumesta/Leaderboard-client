import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const API_URL = import.meta.env.VITE_API_URL;

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  const fetchUsers = async (page) => {
    try {
      const response = await axios.get(`${API_URL}/leaderboard?page=${page}`);
      setUsers(response.data.users);
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to fetch users. Please try again later.");
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
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <h2 className="text-center text-white my-4">Leaderboard</h2>
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
          <div className="col-9">
            <table className="table table-bordered table-striped mt-3">
              <thead className="table-dark py-3">
                <tr className="border">
                  <th className="text-center py-3 col-3">Rank</th>
                  <th className="text-center py-3 col-3">Name</th>
                  <th className="text-center py-3 col-3">Score</th>
                  <th className="text-center py-3 col-3">Points History</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td className="py-3 text-center col-3">
                      {index + 1 + (currentPage - 1) * 10}
                    </td>
                    <td className="py-3 text-center col-3">
                      {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
                    </td>
                    <td className="py-3 text-center col-3">{user.points}</td>
                    <td className="text-center">
                      <Link
                        to={`/points-history/${encodeURIComponent(user.name)}`}
                        className="btn btn-outline-primary fw-semibold"
                      >
                        View History
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
