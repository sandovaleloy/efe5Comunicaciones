import React from "react";
import "./styles/NavbarLink.css";

const NavbarLink = () => {
  return (
    <div className="container_navbarLink">
      <div className="NavbarLink_img">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrwYTFmwiU7S_-Im7neWKznJC3fHhjH4wZRxLMxE2aXtylxBas_sXPG9gk_2g6g2Tt5LKo9oYWcizSg7YsWkqaO_zNkmDjhiF7eHQhWKcOM7Bl4XU1GtesORLQBTBPXJ5Eoq-TIXoGu-E3jOmoLeNZm9iphF932i7_qJ09DlQOMvWWEhZiHzod6zuTlr2y/s324/Captura.PNG" />
      </div>
      <div className="container_iframe">
        <iframe
          className="iframe"
          src="https://www.facebook.com/plugins/video.php?height=373&href=https%3A%2F%2Fwww.facebook.com%2F100093630360338%2Fvideos%2F858781692341601%2F&show_text=false&width=560&t=0"
        ></iframe>
      </div>
    </div>
  );
};

export default NavbarLink;
