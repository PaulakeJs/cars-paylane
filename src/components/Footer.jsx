import { Button, Form, Input } from "antd";
import React from "react";

function Footer() {
  return (
    <>
    <div className="xxcv">
      <div>
        <h3 className="fh3">Join Paylane-cars</h3>
        <p className="fp3">Receive pricing updates, shopping tips & more!</p>
        <div className="inputxc">
          <input
            type="email"
            name=""
            className="finp"
            placeholder="Your email address"
          />
          <button className="fbx">Signup</button>
        </div>
      </div>
      <div className="footer">
        <div className="flinkskk">
          <h3 className="hef">Company</h3>
          <p className="fml">About Us</p>
          <p className="fml">Blog</p>
          <p className="fml">Services</p>
          <p className="fml">FAQs</p>
          <p className="fml">Terms</p>
          <p className="fml">Contact Us</p>
        </div>
        <div className="flinks2">
          <h3 className="hef">Quick Links</h3>
          <p className="fml">Get IN Touch</p>
          <p className="fml">Help center</p>
          <p className="fml">Live chat</p>
          <p className="fml">How it Works</p>
        </div>
      </div>
      <div className="footer">
        <div className="flinks">
          <h3 className="hef">Our Barnds</h3>
          <p className="fml">Toyota</p>
          <p className="fml">BMW</p>
          <p className="fml">Audi</p>
          <p className="fml">Ford</p>
          <p className="fml">Tesla</p>
          <p className="fml">Pegout</p>
        </div>
        <div className="flinks2">
          <h3 className="hef">Vehicle Type</h3>
          <p className="fml">Sedan</p>
          <p className="fml">Electric</p>
          <p className="fml">Copule</p>
          <p className="fml">Hybrid</p>
        </div>
      </div>
      <div className="end">
        <p className="endlin">
          &copy; 2023 PaylaneCars LTD. All rights reserved
        </p>
        <span className="endlin">Terms & Conditions</span> &nbsp;{" "}
        <span className="endlin">Privacy Notice</span>
      </div>
    </div>
    </>
  );
}

export default Footer;
