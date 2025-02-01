import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const AwardPoint = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const points = Math.floor(Math.random() * 10) + 1;

    Swal.fire({
      icon: 'info',
      title: `Award Points to ${name}`,
      text: `${name} has been awarded ${points} points.`,
      showCancelButton: true,
      confirmButtonText: 'Award Points',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          const res = await axios.post(`${API_URL}/claim-point`, { name, points });

          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Points Awarded!',
              text: `${points} points have been awarded to ${name} successfully!`,
            }).then(() => {
              navigate("/");
              window.location.reload();
            });
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response?.data?.message || 'Failed to award points!',
          });
        } finally {
          setLoading(false);
        }
      } else {
        navigate('/');
      }
    });
  }, [name, navigate]);

  return loading ? (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Processing...</span>
      </div>
    </div>
  ) : null;
};

export default AwardPoint;
