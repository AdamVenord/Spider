/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import blogData from "../../data/blog1.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>9661 S Kalina Way apt 2-108, Sandy, UT 84092</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+1 801-750-2805</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                {blogData.slice(0, 2).map((item, index) => (
                  <li key={item.id}>
                    <div className="img">
                      <Link href="/blog-details/blog-details-dark">
                        <a>
                          <img src={item.image} alt={`blog ${item.id}`} />
                        </a>
                      </Link>
                    </div>
                    <div className="sm-post">
                      <Link href="/blog-details/blog-details-dark">
                        <a>
                          <p>{item.title}</p>
                        </a>
                      </Link>
                      <div>
                        <Link href="/blog/blog-dark">
                          <a>
                            <span className="date">
                              {item.date.day} {item.date.month} {item.date.year}{" "}
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Spider Studios. Made with passion by{" "}
                  <Link href="https://themeforest.net/user/themescamp/portfolio">
                    <a target="_blank">ThemesCamp</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
