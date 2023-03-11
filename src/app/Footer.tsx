import Image from "next/image";

import logo from "../images/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <Image
        src={logo}
        alt="logoipsum logo"
        height={10}
        width={110}
        className="logo"
      />
      <div className="flex">
        <span className="footer-text">Terms of Service</span>
        <span className="footer-text">Privacy policy</span>
        <span className="footer-text">Returns</span>
        <span className="footer-text">FAQ</span>
      </div>
      <span id="" className="footer-text legal-rights">
        © 2022 Logoipsum. All rights reserved
      </span>
    </div>
  );
}

export default Footer;
