import React from 'react';
import './Footer.css'; 

export default function Footer() {
  return (
    <footer>
    <div className="footer-bg"></div>
    <div className="wrapper footer-grid">
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/drivers">Drivers</a></li>
          <li><a href="/races">Races</a></li>
          <li><a href="/standings">Standings</a></li>
          <li><a href="/news">News</a></li>
        </ul>
      </div>
      <div>
        <h4>Follow</h4>
        <div className="footer-social">
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <ul>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>info@f1info.com</li>
          <li>School project · 2025</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      © 2025 F1Info. Not affiliated with Formula One Group. For educational use only.
    </div>
  </footer>
  );
}