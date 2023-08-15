import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
function Main() {
  const [data, setData] = useState();
  const handleData = (e) => {
    setData(e.target.value);
  };
  return (
    <div className="Main">
      <div className="Cont">
        <div className="text">
          <textarea
            onChange={handleData} className="data"
          ></textarea>
        </div>
        <div className="last" >
          <ReactMarkdown>{data}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Main;