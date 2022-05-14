import { useMediaQuery } from "react-responsive";
export const DesktopOrTablet = ({ children }) => {
  const isDesktopOrTablet = useMediaQuery({
    minWidth: 601,
  });
  return isDesktopOrTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return isMobile ? children : null;
};
