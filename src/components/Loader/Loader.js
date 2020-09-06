import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends React.Component {
  render() {
    return (
      <Loader type="BallTriangle" color={"#0c52e9"} height={100} width={100} />
    );
  }
}
