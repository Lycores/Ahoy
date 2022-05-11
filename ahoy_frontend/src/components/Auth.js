import useLoadProfile from "../customHooks/useLoadProfile";
import useLoadToken from "../customHooks/useLoadToken";
const Auth = () => {
  useLoadToken();
  useLoadProfile();
  return <></>;
};
export default Auth;
