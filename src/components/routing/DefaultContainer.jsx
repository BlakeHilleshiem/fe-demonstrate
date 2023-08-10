import { Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Header from "../pages/Header";

export default function DefaultContainer() {
  return (
    <>
      <Route path="/" component={Header} />
      <Route path="/" component={LandingPage} />;
    </>
  );
}
