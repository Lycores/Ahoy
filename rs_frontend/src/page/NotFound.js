import styled from "styled-components";

const BackgroundStyle = styled.div`
  background-color: var(--global-background-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundStyle = styled.div`
  text-align: center;
  line-height: 100vh;
  font-size: clamp(20px, 40vw, 80px);
`;
const NotFound = () => {
  return (
    <BackgroundStyle>
      <NotFoundStyle>404</NotFoundStyle>
    </BackgroundStyle>
  );
};

export default NotFound;
