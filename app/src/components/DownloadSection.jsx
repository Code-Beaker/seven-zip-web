import React from "react";
import { BsDownload } from "react-icons/bs";

const DownloadSection = () => {
  return (
    <div className="grid grid-cols-3 p-8 gap-2">
      <GridItem title={Windows.title} text={Windows.text} />
      <GridItem title={Mac.title} text={Mac.text} />
      <GridItem title={Linux.title} text={Linux.text} />
    </div>
  );
};

const Windows = {
  title: "Microsoft Windows",
  text: "Download .exe installer for Windows",
};

const Mac = {
  title: "Apple MacOS",
  text: "Download dmg installer for MacOS.",
};

const Linux = {
  title: "Linux",
  text: "Download .deb installer for Debian/Ubuntu systems.",
};

const GridItem = ({ title, text }) => {
  return (
    <div className="bg-slate-200 p-6 rounded">
      <h1 className="text-slate-800 text-2xl font-bold">{title}</h1>
      <p className="text-lg font-medium text-slate-600">{text}</p>
      <DownloadButton source={""} />
    </div>
  );
};

const DownloadButton = ({ source }) => {
  return (
    <a
      className="bg-slate-300 my-3 font-medium inline-flex items-center gap-2 px-5 py-3 rounded-full hover:bg-slate-400 transition-tranform active:bg-slate-500 active:scale-95"
      href={source}
    >
      Download
      <span>
        <BsDownload />
      </span>
    </a>
  );
};

export default DownloadSection;
