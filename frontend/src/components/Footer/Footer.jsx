import { Link } from "react-router-dom";
import React from "react";
import "../Footer/Footer.scss";

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sidebar */}
        <div className="footer-sidebar">
          <div>
            <p className="footer-credit">Designed and Developed by</p>
            <div className="footer-logo">
              <h1>House of</h1>
              <h1>MarkTech</h1>
            </div>
          </div>
          <div className="footer-copy">
            <p>© 2025 Nyouta.</p>
            <p>All rights reserved.</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="footer-main">
          {/* Nyuota */}
          <div>
            <h2 className="footer-title">Nyuota</h2>
            <ul className="footer-links">
              <li><Link to="/aboutus">About us</Link></li>
              <li><Link to="/contactus">Join us</Link></li>
              <li><Link to="#">Offers</Link></li>
              <li><Link to="#">Awards</Link></li>
              <li><Link to="/product/:id">Shops</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h2 className="footer-title">Explore</h2>
            <ul className="footer-links">
              <li><Link to="/join-e-nyouta">Share Memories</Link></li>
              <li><Link to="#">Free Greetings</Link></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h2 className="footer-title text-white">Contact Us</h2>
            <div className="footer-contact">
              <div>
                <Mail className="icon" />
                <a href="mailto:info@nyouta.com">info@nyouta.com</a>
              </div>
              <div>
                <Phone className="icon" />
                <a href="tel:+919549541111">+91-954-954-1111</a>
              </div>
              <div className="footer-time">
                <p>Monday to Saturday 10am-5pm IST</p>
                <p>Closed all Sunday & holidays</p>
              </div>
            </div>

            {/* Social */}
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-icons">
                <a href="https://www.facebook.com/nyoutastores" target="_blank" aria-label="Facebook">
                  <Facebook className="icon" />
                </a>
                <a href="https://x.com/Nyoutastore" target="_blank" aria-label="Twitter">
                  <Twitter className="icon" />
                </a>
                <a href="https://www.youtube.com/@nyoutastore" target="_blank" aria-label="YouTube">
                  <Youtube className="icon" />
                </a>
                <a href="https://www.instagram.com/nyoutastore/" target="_blank" aria-label="Instagram">
                  <Instagram className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
