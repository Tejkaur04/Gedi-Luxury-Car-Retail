import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './styles.css'; // Assuming CSS from style.css is copied into Home.css
import Png from'./pngwing'; // Assuming CSS from pngwing.css is copied into Home.css
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* Main content */}
      <div className="wasted">
        <div className="bluebox"></div>
        <div className="blackbox"></div>
        <div className="blackbox2"></div>
        <div className="gedi"></div>
        <div className="FINAL">
          <p>
            DRIVE YOUR <span style={{ color: '#f40000' }}>DREAM</span>
          </p>
        </div>
        <div className="wheel"></div>
      </div>

      {/* Test drive and other sections */}
      <div className="test">
        <div className="imaged">
          <img
            src="https://www.svgrepo.com/show/287512/steering-wheel-drive.svg"
            alt=""
            className="imm"
          />
        </div>
        <div className="at">
          <a href="testdrive.html">BOOK A TEST DRIVE</a>
        </div>
      </div>
      <div className="test2">
        <div className="imaged">
          <img
            src="https://www.svgrepo.com/show/24573/offer-label.svg"
            alt=""
            className="imm"
          />
        </div>
        <div className="at" style={{ backgroundColor: '#007eedd0' }}>
          <a href="carcatalogue.html">VIEW PRICES</a>
        </div>
      </div>
      <div className="test3">
        <div className="imaged">
          <img
            src="https://www.svgrepo.com/show/172006/hold.svg"
            alt=""
            className="imm"
          />
        </div>
        <div className="at" style={{ backgroundColor: '#f40000dd' }}>
          <a href="carcatalogue.html">RESERVE ONLINE</a>
        </div>
      </div>

      {/* Shopping tools section */}
      <div className="randomtext" data-aos="fade-up" data-aos-duration="3000">
        <p className="st">SHOPPING TOOLS</p>
        <p className="sthead">
          FIND YOUR <span style={{ color: '#522dae' }}>DAILY</span> OR{' '}
          <span style={{ color: '#f40000' }}>GEDI DRIVE.</span>
        </p>
        <div className="threebox">
          <div className="boxe1">
            <img
              src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_STOCK_CAR?wid=1504&hei=542"
              alt=""
              className="hi"
            />
            <p className="wow">Find a New Car.</p>
            <div className="d-flex justify-content-center">
              <a
                href="carcatalogue.html"
                className="btn btn-outline-dark"
                role="button"
                aria-pressed="true"
              >
                Search Now
              </a>
            </div>
          </div>
          <div className="boxe2">
            <img
              src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_USED_CAR?wid=1504&hei=542"
              alt=""
              className="hi"
            />
            <p className="wow">Book a Test Drive.</p>
            <div className="d-flex justify-content-center">
              <a
                href="testdrive.html"
                className="btn btn-outline-dark"
                role="button"
                aria-pressed="true"
              >
                Request a Test Drive
              </a>
            </div>
          </div>
          <div className="boxe3">
            <img
              src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_CON?wid=1504&hei=542"
              alt=""
              className="hi"
            />
            <p className="wow">Buy car insurance.</p>
            <div className="d-flex justify-content-center">
              <a
                href="insurance.html"
                className="btn btn-outline-dark"
                role="button"
                aria-pressed="true"
              >
                Insure Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main image section */}
      <div className="main">
        <div className="ok">
          <p className="cata" data-aos="fade-right">
            <a href="carcatalogue.html">Browse Catalogue</a>
          </p>
        </div>
        <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="1450" data-aos-duration="2500">
          <img
            src="https://static3.toyotabharat.com/images/showroom/fortuner/fortuner-mmc/style-to-inspire-car.png"
            alt=""
            className="fortuner"
          />
          <img src=
          {Png} alt="" className="png" />
          <img src={Png} alt="" className="pnge" />
        </div>
      </div>
    </div>
  );
}
export default Home;
