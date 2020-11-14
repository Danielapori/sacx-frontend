import React from 'react';

import { BackTop } from 'antd';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <a>Sacx</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/daniel.obeng.16752/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://twitter.com/apori_daniel"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/daniel-apori-2a62841a9/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/danielsapori/_saved/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2020 Sacx</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;