import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useLoadToken = () => {
  const [searchParams] = useSearchParams();
  let token = searchParams.get("token");
  console.log(123123, token);
  useEffect(() => {
    sessionStorage.setItem("token", token);
  }, [token]);
};

export default useLoadToken;
