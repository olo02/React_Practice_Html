import React from "react";

const Header = () => {
  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid lightgray",
          height: 150,
          background: "#ffeeee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>예제만들기</h1>
      </div>
      <div style={{ height: 50, borderBottom: "1px solid lightgray" }}>
        <ul
          style={{
            margin: 0,
            height: 50,
            display: "flex",
            alignItems: "center",
          }}
        >
          <li
            style={{
              listStyle: "none",
              paddingRight: "20px",
              cursor: "pointer",
            }}
          >
            홈
          </li>
          <li style={{ listStyle: "none", cursor: "pointer" }}>게시판</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
