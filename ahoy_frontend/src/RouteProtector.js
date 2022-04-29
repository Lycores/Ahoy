import { Outlet } from "react-router-dom";
import WelcomePage from "./page/WelcomePage";

const RouteProtector = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  return token ? <Outlet /> : <WelcomePage />;
};

export default RouteProtector;
