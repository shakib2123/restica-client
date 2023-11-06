import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});
const useAxios = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error in fetch", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => console.log(err));
        }
      }
    );
  }, [logOut, navigate]);

  return instance;
};

export default useAxios;
