import IncludeRedPage from "./IncludeRedPage";
import includeCianPage from "./includeCianPage";

const backgroundColor = (location) => {
  if(IncludeRedPage(location) && !includeCianPage(location)) {
    return "#F5F5F5";
  } else if (!IncludeRedPage(location) && !includeCianPage(location)) {
    return "#8e0e28";
  } else if (!IncludeRedPage(location) && includeCianPage(location)) {
    return "#34393E";
  }
}

export default backgroundColor;