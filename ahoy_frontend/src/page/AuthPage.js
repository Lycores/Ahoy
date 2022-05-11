import useLoadProfile from "../customHooks/useLoadProfile";
import useLoadToken from "../customHooks/useLoadToken";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const SpotifyLogo = styled.i`
  font-size: clamp(50px, 30vw, 200px);
  color: var(--global-spotify-color);
  line-height: 100vh;
`;
const AuthPage = () => {
  useLoadToken();
  useLoadProfile();
  return (
    <LogoContainer>
      <SpotifyLogo className="fa-brands fa-spotify fa-spin" />
    </LogoContainer>
  );
};
export default AuthPage;
