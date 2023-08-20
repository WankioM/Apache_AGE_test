import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="menu">
        <div className="left-menu">
          <img src="https://bitnine.net/wp-content/uploads/2023/08/bitnine-logo_.png" alt="Logo" className="logo" />
          
        </div>
        <div className="right-menu">
          <div className="top-row">
            <div className="language-bar">
            <select className="language-select">
              <option value="en">English</option>
              <option value="sw">Swahili</option>
              <option value="ko">한국어</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              
            </select>
            </div>
            <input type="text" placeholder="Search" className="search-bar" />
            <span className="contact-icon">CONTACT</span>
            <span className="icon youtube-icon"><i class="bi bi-youtube"></i></span>
            <span className="icon github-icon"><i class="bi bi-github"></i></span>
            <span className="icon github-icon"><i class="bi bi-linkedin"></i></span>
            <span className="icon github-icon"><i class="bi bi-facebook"></i></span>
            <span className="icon medium-icon">
            <i class="bi bi-medium"></i> 
            </span>
          </div>
          <div className="bottom-row">
            <span className="menu-item">PRODUCTS</span>
            <span className="menu-item">USECASES</span>
            <span className="menu-item">SERVICES</span>
            <span className="menu-item">RESOURCES</span>
            <span className="menu-item">BLOG</span>
            <span className="menu-item">COMPANY</span>
            <span className="menu-item">IR</span>
            <button className="try-free-button">TRY FREE</button>
          </div>
        </div>
      </div>
        <div class="mid">
          <div class="content">
        <img src="https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo.png" alt="Bitnine Logo" />
        <h2>An integration of Bitnine’s DB technology and PG expertise</h2>
        <p>AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise
        and knowledge accumulated through database research and development.</p>
        <p>The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures
        the efficiency and scalability of data management.</p>
        <p>Get AgensSQL now for stable operation and management services at a reduced
        maintenance cost.</p>
        <div class="button-container">
          <button class="button">Contact</button>
          <button class="button">Brochure</button>
          <button class="button">Blog</button>
          </div>

          
          </div>
          
        </div>
          <div class="mid2">
          <div class ="pg2">
            <img src= "https://bitnine.net/wp-content/uploads/2022/04/img_diagram_eng-e1651143428347.png" alt="Bitnine Logo"  />
            </div>
            </div>

            <div class="mid2">
            <div class = "pg2">
              <h2>Key features</h2>
              <p>Manage your data with Agens Enterprise Package.</p>
              <p> Essential enterprise features such as high availability and sharding are provided</p>
            <img src= "https://bitnine.net/wp-content/uploads/2022/04/img_key-features_eng-1024x402.png" alt="Bitnine Logo"  />
            </div>
            </div>
      </div>
  );
}

export default Home;
