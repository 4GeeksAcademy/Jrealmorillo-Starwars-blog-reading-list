import React, { Component } from "react";
import stars from '../../img/bg-stars.png';


export const Footer = () => (
    <footer className="text-white py-4" style={{backgroundImage: `url(${stars})`}}>
  <div className="text-center">
    <p><b>&copy; {new Date().getFullYear()} This is Jose Real's Star Wars Blog List. All right reserved. </b>(just joking, use whatever you need if it helps)</p>
  </div>
</footer>

);

