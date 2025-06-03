import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

export default function Footer() {
  return (
    <footer>
    <div class="footer-bg"></div>
    <div class="wrapper footer-grid">
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
        <div class="footer-social">
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
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
          <li>Fan project · 2025</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      © 2025 F1Info. Not affiliated with Formula One Group. For fan use only.
    </div>
  </footer>
  );
}