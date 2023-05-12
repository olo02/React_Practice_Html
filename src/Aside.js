import React from "react";

const Aside = () => {
  return (
    <div>
      <aside style={{ width: 250, paddingLeft: 30, height: 180 }}>
        <form
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            marginTop: 20,
            alignContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "8px 0",
            }}
          >
            <label>아이디</label>
            <input style={{ padding: 5 }} type="text" id="id"></input>
          </div>
          <div
            style={{
              margin: "8px 0",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>비밀번호</label>
            <input
              style={{
                padding: 5,
              }}
              type="password"
              id="pw"
            ></input>
          </div>
          <div style={{ display: "flex", margin: "15px 0", width: "100%" }}>
            <button
              style={{
                width: "100%",
                border: 0,
                padding: 5,
                cursor: "pointer",
                height: 40,
              }}
            >
              로그인
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
};

export default Aside;
