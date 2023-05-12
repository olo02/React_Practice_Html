import React, { useState } from "react";

const Content = ({ number }) => {
  return (
    <div style={{ padding: "20px 0", width: 300 }}>
      <div style={{ background: "#e8e8e8", width: "100%", height: 200 }}></div>
      <div style={{ width: "100%", padding: "8px 0" }}>
        <h4 style={{ margin: 0 }}>컨텐츠 ( {number} )</h4>
        <p style={{ margin: "5px 0 10px" }}>
          간략한 컨텐츠 내용간략한 컨텐츠 내용간략한 컨텐츠 내용간략한 컨텐츠
          내용
        </p>
      </div>
    </div>
  );
};

export default Content;
