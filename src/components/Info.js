import React from "react";
import PictureOfMe from "../gintautas.jpg";

function Info() {
  return (
    <div className="Info">
      <img src={PictureOfMe} alt="Gintautas meditating at Molietai" />
      <div className="text_title">Gintautas Šedys</div>
      <div className="text_title_2">Full Stack Developer</div>
      <div className="button"><i className="fa fa-envelope"></i> <a href="https://github.com/GitLordGin">Github</a></div>
    </div>
  );
}

export default Info;
