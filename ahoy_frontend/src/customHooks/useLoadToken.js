import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const useLoadToken = () => {
  const [searchParams] = useSearchParams();
  let token = searchParams.get("token");
  const navigate = useNavigate();
  if (!token) {
    navigate("/notfound");
  }
  console.log(123123, token);
  useEffect(() => {
    sessionStorage.setItem("token", token);
  }, [token]);
};

export default useLoadToken;
