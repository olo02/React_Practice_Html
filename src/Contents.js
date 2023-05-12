import React, { useState } from "react";
import Content from "./Content";

const Contents = () => {
  const [number, setNumber] = useState(10);

  const addNumber = () => {
    setNumber(number + 1);
  };

  const initNumber = () => {
    setNumber(10);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          margin: "60px 0 20px",
        }}
      >
        <h2 style={{ width: "100%", display: "flex", alignItems: "center" }}>
          컨텐츠 제목
          <button
            style={{
              cursor: "pointer",
              marginLeft: 10,
              marginTop: 3,
              background: "#ffeeee",
              border: 0,
              borderRadius: "50%",
              width: 30,
              height: 30,
            }}
            onClick={addNumber}
          >
            +1
          </button>
          <button
            style={{
              cursor: "pointer",
              marginLeft: 10,
              marginTop: 3,
              background: "#ffeeee",
              border: 0,
              borderRadius: "50%",
              width: 30,
              height: 30,
            }}
            onClick={initNumber}
          >
            ㅎ
          </button>
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Content number={number} />
        <Content number={number} />
        <Content number={number} />
        <Content number={number} />
        <Content number={number} />
        <Content number={number} />
      </div>
    </div>
  );
};

export default Contents;
