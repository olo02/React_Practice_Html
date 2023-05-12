import React from "react";
import Contents from "./Contents";
import Aside from "./Aside";
import Slide from "./Slide";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px auto",
        width: 988,
        flexWrap: "wrap",
      }}
    >
      <Slide />
      <Aside />
      <Contents />
      <Contents />
    </div>
  );
};

export default Main;
