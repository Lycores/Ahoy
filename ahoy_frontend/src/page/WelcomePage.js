import styled from "styled-components";

const BackgroundStyle = styled.div`
  background-color: var(--global-background-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WelcomeContainer = styled.div`
  background-color: var(--global-spotify-color);
  height: 50px;
  width: clamp(200px, 40vw, 400px);
  border-radius: var(--global-border-radius);
  font-size: 20px;
  text-align: center;
  line-height: 50px;
`;

const TextStyle = styled.a`
  color: var(--global-background-color);
  text-decoration: none;
`;

function WelcomePage() {
  return (
    // <BackgroundStyle>
    //   <a href="/auth/login">
    //     <WelcomeImage />
    //   </a>
    // </BackgroundStyle>
    <BackgroundStyle>
      <WelcomeContainer>
        <TextStyle href="/auth/login">Grant Access</TextStyle>
      </WelcomeContainer>
    </BackgroundStyle>
  );
}

export default WelcomePage;
