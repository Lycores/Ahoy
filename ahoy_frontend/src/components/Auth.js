import useLoadProfile from "../customHooks/useLoadProfile";
import useLoadToken from "../customHooks/useLoadToken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Auth = () => {
  useLoadToken();
  useLoadProfile();
  return (
    <>
      <i className="fa-brands fa-spotify"></i>
    </>
  );
};
export default Auth;
