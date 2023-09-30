import React from "react";

const DownloadSection = () => {
  return (
    <div className="grid grid-cols-3 p-8 gap-2 text-white font-bold">
      <GridItem title={Windows.title} text={Windows.text} />
    </div>
  );
};

const Windows = {
  title: "Microsoft Windows",
  text: "Download installer",
};

const Mac = {
  title: "Apple MacOS",
  text: "Download installer",
};

const Linux = {
  title: "Linux",
  text: "Download installer",
};

const GridItem = ({ title, text }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default DownloadSection;
