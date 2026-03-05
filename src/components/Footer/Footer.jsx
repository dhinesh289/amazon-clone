import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Back to top */}
      <div
        className="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </div>

      {/* Main footer links */}
      <div className="footerLinks">

        <div className="footerColumn">
          <h3>Get to Know Us</h3>
          <p>About Amazon</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>

        <div className="footerColumn">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="footerColumn">
          <h3>Make Money with Us</h3>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
        </div>

        {/* CUSTOMER SERVICE SECTION */}
        <div id="customer-service" className="footerColumn">
          <h3>Let Us Help You</h3>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Recalls and Product Safety</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>

      </div>

      {/* Bottom footer */}
      <div className="footerBottom">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />

        <div className="footerCountry">
          <span>🌐 English</span>
          <span>🇮🇳 India</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;