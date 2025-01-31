import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const AwardPoint = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const points = Math.floor(Math.random() * 10) + 1;

    Swal.fire({
      icon: 'info',
      title: `Award Points to ${name}`,
      text: `${name} have been awarded ${points} points.`,
      showCancelButton: true,
      confirmButtonText: 'Award Points',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(`${API_URL}/claim-point`, { name, points });

          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Points Awarded!',
              text: `${points} points have been awarded to ${name} successfully!`,
            }).then(() => {
              navigate("/")
              window.location.reload();
            });
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response?.data?.message || 'Failed to award points!',
          });
        }
      } else {
        navigate('/');
      }
    });
  }, [name, navigate]);

  return null;
};

export default AwardPoint;
