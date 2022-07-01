import React from "react";
import tapRoom from "./../img/img.jpeg";



function Header(){
  return (
    <React.Fragment>
      <h1>Welcome to the Tap Room</h1>
      <img class="center" src = {tapRoom} /> <br></br>

    </React.Fragment>
  );
}

export default Header;
