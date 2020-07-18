import React from "react";
import './footer.styles.scss'

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <footer className='footer-div'>
        <p className="copy">Copyright © Nick F. & Ivan R. {year}</p>
        <p>For More information Please contact us at @me</p>
      </footer>
    </div>
  );
}

export default Footer;
