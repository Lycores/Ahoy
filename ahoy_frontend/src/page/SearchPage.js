import { useLocation } from "react-router-dom";
import { RightAreaStyleForDesktopOrTablet } from "../components/ReusableStyleComp";
const SearchPage = () => {
  let { state } = useLocation();
  let result = null;
  if (state) {
    result = state.result;
    console.log(result);
  }

  return <RightAreaStyleForDesktopOrTablet></RightAreaStyleForDesktopOrTablet>;
};

export default SearchPage;
