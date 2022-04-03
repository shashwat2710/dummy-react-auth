/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable semi,quotes */

import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";

function App () {
  return (
    <Fragment>
     <Layout></Layout>
    <Login />
    </Fragment>
  );
}

export default App;
