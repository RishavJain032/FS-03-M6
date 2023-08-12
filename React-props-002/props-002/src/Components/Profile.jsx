import React from "react";
function Profile(props) {
  return (
    <div className="main">
      <div className="container">
        <div className="container1">
          <div className="ga">
            <span className="spa">
              <img src={props.profileImg} height="30px" style={{ borderRadius : "50%", width : "30px"}} />
            </span>
            <h3>{props.name}</h3>
          </div>
          <h2>{props.heading}</h2>
          <p>{props.para}</p>
          <div className="paracont">
            <div className="paracont1">
              <p>{props.date}</p>
              <p>{props.time}</p>
              <p className="but">
                {props.but}
              </p>
            </div>
            <div>
                <img src= "https://static.thenounproject.com/png/3247958-200.png"  width="25px" height= "10px"/>
            </div>
          </div>
        </div>
        <div className="image" >
          <img src={props.mainImg} height="100" width="420px" />
        </div>
      </div>
    </div>
  );
}

export default Profile;