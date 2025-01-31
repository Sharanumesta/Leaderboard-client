import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const PointsHistory = () => {
  const { name } = useParams();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`${API_URL}/points-history/${name}`);
        const sortedHistory = response.data.pointsHistory.sort(
            (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
          );
          setHistory(sortedHistory);
      } catch (error) {
        console.error("Error fetching points history:", error);
      }
    };

    fetchHistory();
  }, [name]);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Points History of <span className=" text-white">{name.charAt(0).toUpperCase() + name.slice(1)}</span></h2>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-8">
          <table className="table table-bordered table-striped mt-3">
            <thead className="table-dark py-3">
              <tr>
                <th className="text-center py-3">Timestamp</th>
                <th className="text-center py-3">Points</th>
              </tr>
            </thead>
            <tbody>
              {history.length > 0 ? (
                history.map((entry, index) => (
                  <tr key={index}>
                    <td className="py-3 text-center">{new Date(entry.timestamp).toLocaleString()}</td>
                    <td className="py-3 text-center">{entry.points}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center">
                    No points history available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PointsHistory;
