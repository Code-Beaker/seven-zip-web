import React from "react";
import { BsDownload } from "react-icons/bs";

const DownloadSection = () => {
  return (
    <div className="grid grid-cols-3 gap-3 p-6">
      <DownloadItem
        title={"Microsoft Windows"}
        text={"Download Windows executable file."}
        link={"#"}
      />{" "}
      <DownloadItem
        title={"Apple MacOS"}
        text={"Download MacOS disk image file."}
        link={"#"}
      />{" "}
      <DownloadItem
        title={"Linux"}
        text={"Download debian installer file."}
        link={"#"}
      />
    </div>
  );
};

const DownloadItem = (props) => {
  const { title, text, link } = props;

  return (
    <div className="bg-slate-50 rounded p-6">
      <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
      <p className="font-medium text-lg text-slate-700">{text}</p>
      <a
        className="bg-slate-200 inline-flex justify-center items-center px-5 py-2 rounded-full gap-2 hover:bg-slate-300 my-2 font-medium transition-transform active:bg-slate-400 active:scale-95"
        href={link}
      >
        Download <BsDownload />
      </a>
    </div>
  );
};

export default DownloadSection;
