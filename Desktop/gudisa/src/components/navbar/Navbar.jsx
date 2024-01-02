import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const items = ["Experience", "Projects", "Contact"];

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 2 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          Gudisa
        </motion.span>
        <div className="social socials">
          {items.map((item) => (
            <a key={item} href={`#${item}`} className="social">
              <p key={item}>{item}</p>
            </a>
          ))}
        </div>
        <div className="social icons">
          <a
            href="https://drive.google.com/file/d/13gJid50-g62oo7B6UfOkZDAa601WDAJ9/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/gudisa-gebi-b93001202/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/Gudisa1" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/channel/UCiJEHEPFVt5yGpPGx0cUClQ"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
