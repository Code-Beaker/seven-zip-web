import React from "react";

const Footer = () => {
  let d = new Date();
  const CurrentYear = d.getFullYear();

  return (
    <footer className="bg-slate-800 text-center py-24 px-12">
      <p className="text-medium text-xl text-slate-100">
        Copyright {CurrentYear}, All rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
