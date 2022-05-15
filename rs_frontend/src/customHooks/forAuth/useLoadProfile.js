import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const useLoadProfile = () => {
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");
  useEffect(() => {
    if (token) {
      fetch(`/user/getUserProfile?token=${token}`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          // setUserProfileState(json)
          sessionStorage.setItem("userProfile", JSON.stringify(json));
          navigate("/traditional/album");
        });
    }
  }, [token]);
};
export default useLoadProfile;
