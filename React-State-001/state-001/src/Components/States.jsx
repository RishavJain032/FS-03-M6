import React, { useState } from "react";

function States() {
  const [state, setState] = useState(false);
  function changeTheme() {
    setState(!state);
  }

  return (
    <div className="MainCont" style={{ 
    backgroundColor: state ? "black" : "white"}}>
      <div>
        <h1 style={{ color: state ? "white" : "black" }}>Overreacted</h1>
        <div>
        <br/>
        <br/>
        <br/>


          <h2 className="he">The Wet Codebase</h2>
          <p style={{ color: state ? "white" : "black" }}>
            {" "}
            <i>Sunday 4th, 2020, 11 min read </i>
            <br/>

            <br /> Come waste your time with me.
          </p>
        </div>
        <div>
          <h2 className="he1">Goodby, Clean Code</h2>
          <p style={{ color: state ? "white" : "black" }}>
            {" "}
            <i>Friday 22nd, 2019, 5 min read </i>
            <br/>

            <br /> Let clean code guide you.Then let it go.
          </p>
        </div>
        <div>
          <h2 className="he2">My Decade In Review</h2>
          <p style={{ color: state ? "white" : "black" }}>
            {" "}
            <i>Saturday 11th, 2018, 5 min read </i>
            <br/>

            <br /> A personal reflection.
          </p>
        </div>
        <div>
          <h2 className="he4">What Are The React Team Principles</h2>
          <p style={{ color: state ? "white" : "black" }}>
            {" "}
            <i>Thrusday 4th, 2015, 5 min read </i>
            <br />
          </p>
        </div>
      </div>
      <button
        onClick={changeTheme}
        style={{color: state ? "white" : "black"}}
      >
        Toggle
      </button>
    </div>
  );
}

export default States;