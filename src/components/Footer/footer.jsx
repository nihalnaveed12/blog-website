import React from "react";
import {Link} from 'react-router-dom'
import Logo from "../logo";

const Footer = () => {
  return (
<footer
    className=" bg-gray-400 lg:text-left">
      <div className="w-full bg-zinc-800 h-0.5"></div>
    <div className="container p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {/* <!--First links section--> */}
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
            Company
          </h5>

          <ul className="mb-0 list-none ">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              >Features</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              >Pricing</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              >Affiliate Program</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              > Press Kit</a>
            </li>
          </ul>
        </div>

        {/* <!--Second links section--> */}
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
             Support 
          </h5>

          <ul className="mb-0 list-none">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              > Account</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              >Help</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              >Contact Us</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              >Payment</a>
            </li>
          </ul>
        </div>

        {/* <!--Third links section--> */}
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
            Legals
          </h5>

          <ul className="mb-0 list-none">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              >  Terms &amp; Conditions</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              >Privacy Policy</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              >Licensing</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
              >Blog</a>
            </li>
          </ul>
        </div>       
      </div>
    </div>
    <div
      className="text-center">
      © 2024 Copyright:
      <a
        className=""
        href="https://www.linkedin.com/in/nihal-naveed/"
      >Nihal Naveed</a>
    </div>
  </footer>
  )
};

export default Footer;
