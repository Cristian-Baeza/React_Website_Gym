import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">

            <a className="btn btn-social-icon btn-instagram social-logo" href="https://www.instagram.com/10psaltlakecity/" target="_blank"><i
              className="fa fa-instagram instalogo"></i></a>

            <a className="btn btn-social-icon btn-facebook social-logo" href="https://www.facebook.com/10thPlanetSLC/" target="_blank"><i
              className="fa fa-facebook"></i></a>

            <a className="btn btn-social-icon btn-google social-logo" href="https://www.youtube.com/user/twistereddie/videos"
              target="_blank"><i className="fa fa-youtube"></i></a>

            <a role="button" className="btn btn-link footernumber" href="tel:+18019536477"><i className="fa fa-phone"></i>(801)
        953-6477</a>

            <a role="button" className="btn btn-link footernumber" href="mailto:10thplanetslc@gmail.com"><i
              className="fa fa-envelope-o"></i> 10thplanetslc@gmail.com</a> <br />
              Made by CBI
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;