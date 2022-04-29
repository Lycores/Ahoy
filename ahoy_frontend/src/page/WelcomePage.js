import styled from "styled-components";

const BackgroundStyle = styled.div`
  background-color: var(--global-background-color);
  width: 100vw;
  height: 100vh;
`;

const WelcomeImage = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 300px;
  background-image: url("../assets/spotify_welcome.png");
  background-size: 80%;
`;

function WelcomePage() {
  return (
    <BackgroundStyle>
      <a href="/auth/login">
        <WelcomeImage />
      </a>
    </BackgroundStyle>
  );
}

export default WelcomePage;
