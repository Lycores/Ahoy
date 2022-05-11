import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import useRerender from "../utilHooks/useRerender";
const useLoadToken = () => {
  const [searchParams] = useSearchParams();
  let token = searchParams.get("token");
  const navigate = useNavigate();
  const [forceUpdate] = useRerender();
  if (!token) {
    navigate("/notfound");
  }
  console.log(123123, token);
  useEffect(() => {
    sessionStorage.setItem("token", token);
    forceUpdate();
  }, [token]);
};

export default useLoadToken;
