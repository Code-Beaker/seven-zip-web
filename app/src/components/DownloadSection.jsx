import React from "react";
import { windows, macos, linux } from "../data/osinfo.json";
import { BsDownload } from "react-icons/bs";

const DownloadSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-6">
      <DownloadItem
        title={windows.title}
        text={windows.description}
        format={windows.format}
        link={windows.source}
      />{" "}
      <DownloadItem
        title={macos.title}
        text={macos.description}
        format={macos.format}
        link={macos.source}
      />{" "}
      <DownloadItem
        title={linux.title}
        text={linux.description}
        format={linux.format}
        link={linux.source}
      />
    </div>
  );
};

const DownloadItem = (props) => {
  const { title, text, link, format } = props;

  return (
    <div className="bg-slate-50 rounded p-6">
      <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
      <p className="font-medium text-md sm:text-lg text-slate-600">{text}</p>
      <a
        className="bg-slate-200 inline-flex justify-center items-center px-5 py-2 rounded-full gap-2 hover:bg-slate-300 my-2 font-medium transition-transform active:bg-slate-400 active:scale-95"
        href={link}
      >
        Download {format} <BsDownload />
      </a>
    </div>
  );
};

export default DownloadSection;
