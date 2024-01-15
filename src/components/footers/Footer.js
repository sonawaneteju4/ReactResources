import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-body-tertiary  text-center text-lg-start">
        <div className="text-center p-3">
          © 2020 Copyright:
          <Link className="text-body" to="">
            Copyright
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
