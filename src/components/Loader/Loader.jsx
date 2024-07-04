import React, { Component } from "react";
import { RotatingTriangles } from "react-loader-spinner";
import css from "./Loader.module.scss"

export default class Loader extends Component {
  render() {
    return (
      <div className={css.loaderContainer}>
        <RotatingTriangles
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="rotating-triangles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}
