import { Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";

export default function DefaultContainer() {
  return <Route path="/stuff" component={LandingPage} />;
}
