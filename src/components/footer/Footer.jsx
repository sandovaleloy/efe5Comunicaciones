import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="container_footer-redes">
      <h6 className="footer_redes-h6">Siguenos en nuestras redes <i className='bx bxs-hand-right'></i></h6>
      <a
        href="https://www.facebook.com/profile.php?id=100093630360338&sk=about"
        target="_blank"
      >
        <i className="icon_redes4 bx bxl-facebook"></i>
      </a>
      <a
        href="https://www.instagram.com/efe5comunicaciones/?fbclid=IwAR2-8TwlxadQXxktkAYI2iRbNLknjguqaMu5tcv6ivVLIwJWHSd6EpDmEJc"
        target="_blank"
      >
        <i className="icon_redes5 bx bxl-instagram-alt"></i>
      </a>
      <a
        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40efe5comunicaciones%3Ffbclid%3DIwAR1U3q80GoMjSzBqLaKItgf04byv_fqWd9yFk4T1BxUb0lkGrBdePKFMEyQ&h=AT2w5nyKrQPC7SEAVdL4yZQYQ9HoLfiLKx0pMs_2LiK1CwRpAKlF17joYadMOvhC1pGGua5Q9w9K2VPv1qC4BfcBkmGsRuMNUnzVRaGR7xq_QRXDjWpksW9kvLKIcT1dQbeWvw"
        target="_blank"
      >
        <i className="icon_redes6 bx bxl-youtube"></i>
      </a>
    </div>
  );
};

export default Footer;
