import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = (baseURL) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  // Create an Axios instance with a base URL
  const axiosSecure = axios.create({
    baseURL:'http://localhost:5000',
  });

  // Set authorization header for each request
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Handle 401 and 403 responses
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response) {
        const { status } = error.response;
        if (status === 401 || status === 403) {
          // Log out user asynchronously
          try {
            await logOut();
          } catch (logoutError) {
            console.error('Error during logout:', logoutError);
          }

          // Redirect to login page using useNavigate
          navigate('/login');
        }
      }
      return Promise.reject(error);
    }
  );

  // Cleanup: Remove interceptors when the component unmounts
  useEffect(() => {
    return () => {
      axiosSecure.interceptors.request.eject();
      axiosSecure.interceptors.response.eject();
    };
  }, [axiosSecure]);

  // Return axiosSecure instance outside of useEffect
  return axiosSecure;
};

export default useAxiosSecure;