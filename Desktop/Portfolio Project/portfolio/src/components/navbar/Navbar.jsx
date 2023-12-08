import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
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
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Gudisa1" target="_blank" rel="noreferrer">
            <GitHub />
          </a>
          <a
            href="https://www.youtube.com/channel/UCiJEHEPFVt5yGpPGx0cUClQ"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
