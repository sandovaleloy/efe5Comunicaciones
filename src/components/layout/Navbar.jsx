import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container_navbar-redes">
      <Link
        href="https://www.facebook.com/profile.php?id=100093630360338"
        target="_blank"
      >
        <i className="icon_redes1 bx bxl-facebook"></i>
      </Link>
      <Link
        href="https://www.instagram.com/efe5comunicaciones/?fbclid=IwAR2-8TwlxadQXxktkAYI2iRbNLknjguqaMu5tcv6ivVLIwJWHSd6EpDmEJc"
        target="_blank"
      >
        <i className="icon_redes2 bx bxl-instagram-alt"></i>
      </Link>
      <Link
        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40efe5comunicaciones%3Ffbclid%3DIwAR1U3q80GoMjSzBqLaKItgf04byv_fqWd9yFk4T1BxUb0lkGrBdePKFMEyQ&h=AT2w5nyKrQPC7SEAVdL4yZQYQ9HoLfiLKx0pMs_2LiK1CwRpAKlF17joYadMOvhC1pGGua5Q9w9K2VPv1qC4BfcBkmGsRuMNUnzVRaGR7xq_QRXDjWpksW9kvLKIcT1dQbeWvw"
        target="_blank"
      >
        <i className="icon_redes3 bx bxl-youtube"></i>
      </Link>
      <section className="link_routers">
        <Link className="link_router" to="/"> Home</Link>
        <Link className="link_router" to="/primerac"> T. Primera C</Link>
        <Link className="link_router" to="/noticias"> Noticias</Link>
      </section>
    </div>
  );
};

export default Navbar;
