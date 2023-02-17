import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../accsets/img/avatar.png";
import img1 from "../../accsets/img/image1.png";
import img2 from "../../accsets/img/image2.png";
import img3 from "../../accsets/img/image3.png";
import img4 from "../../accsets/img/image4.png";
import img5 from "../../accsets/img/image5.png";
import logo1 from "../../accsets/img/logo1.png";
import logo2 from "../../accsets/img/logo2.png";
import "./style.css";

const Home = (props) => {
  const statusLogin = localStorage.getItem("status login");

  const handleSingIn = () => {};
  return (
    <div className="home">
      <div className="homeHeader">
        <div className="icon">
          <img src={logo1} alt="" style={{ paddingRight: "9px" }} />
          <img src={logo2} alt="" />
        </div>
        <div className="singIn">
          <Link to="/login">
            {statusLogin ? (
              <div>
                <Link to="/profile">
                  <button className="homeButtonSingIn" onClick={handleSingIn}>
                    Profile
                  </button>{" "}
                </Link>

                <button className="homeButtonSingIn" onClick={handleSingIn}>
                  Logout
                </button>
              </div>
            ) : (
              <button className="homeButtonSingIn" onClick={handleSingIn}>
                Login
              </button>
            )}
          </Link>
        </div>
      </div>

      <div className="homeBanner">
        <div className="homeBannerRight">
          <p className="homeBannerRightTitle">Save your data storage here.</p>
          <p className="homeBannerRightpra">
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <button className="homeBannerRightButton">Learn more</button>
        </div>
        <div className="homeBannerLeft">
          <img src={img1} alt="" height="401px" />
        </div>
      </div>

      <div className="homeBody">
        <div className="homeBodyTitle">
          <h1 className="homeBodyTitleContent">Features</h1>
          <p className="homeBodypra">
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
        </div>
        <div className="homeBodyContent">
          <div className="homeBodyContent1">
            <img src={img2} alt="" width="282px" />
            <div>
              <p>Search Data</p>
              <p>
                Don’t worry if your data is very large, the Data Warehoue
                provides a search engine, which is useful for making it easier
                to find data effectively saving time.
              </p>
              <p>Learn more</p>
            </div>
          </div>
          <div className="homeBodyContent2">
            <div>
              <img src={img3} alt="" width="282px" />
            </div>
            <div>
              <p>24 Hours Access</p>
              <p>
                Access is given 24 hours a full morning to night and meet again
                in the morning, giving you comfort when you need data when
                urgent.
              </p>
              <p>Learn more</p>
            </div>
          </div>

          <div className="homeBodyContent3">
            <div>
              <img src={img4} alt="" width="282px" />
            </div>
            <div>
              <p>Print Out</p>
              <p>
                Print out service gives you convenience if someday you need
                print data, just edit it all and just print it.
              </p>
              <p>Learn more</p>
            </div>
          </div>
          <div className="homeBodyContent4">
            <div>
              <img src={img5} alt="" width="282px" />
            </div>
            <div>
              <p>Security Code</p>
              <p>
                Data Security is one of our best facilities. Allows for your
                files to be safer. The file can be secured with a code or
                password that you created, so only you can open the file.
              </p>
              <p>Learn more</p>
            </div>
          </div>
        </div>
      </div>

      <div className="homeSlider">
        <div className="homeSliderContainer">
          <div className="homeSliderContent">
            <h1 className="homeSliderTitle">Testimonials</h1>
            <div className="homeSliderContent1">
              <img src={avatar} alt="" width="130px" />
              <div>
                <p className="homeSliderContentName">John Fang </p>
                <p className="homeSliderContentNickName">wordfaang.com</p>
                <p className="homeSliderContentComment">
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ background: " #9C69E2", opacity: "0.2", Width: "1600px" }} />

      <div className="homeFooter">
        <div className="homeFooterContainer">
          <div>
            <div className="icon">
              <img src={logo1} alt="" style={{ paddingRight: "9px" }} />
              <img src={logo2} alt="" />
            </div>
            <p>DataWarehouse</p>
            <p>Warehouse Society, 234 Bahagia Ave Street PRBW 29281</p>
            <p>info@warehouse.project 1-232-3434 (Main)</p>
            <p>
              © Datawarehouse™, 2020. All rights reserved. Company Registration
              Number: 21479524.
            </p>
          </div>
          <div>
            <p>About</p>
            <ul>
              <li>Profile</li>
              <li>Features</li>
              <li>Careers</li>
              <li>DW News</li>
            </ul>
          </div>

          <div>
            <p>Help</p>
            <ul>
              <li>Support</li>
              <li>Sign up</li>
              <li>Guide</li>
              <li>Reports</li>
              <li>Q&A</li>
            </ul>
          </div>

          <div>
            <p>Social Media</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
