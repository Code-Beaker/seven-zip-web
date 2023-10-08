import React from "react";
import { windows, macos, linux } from "../data/osinfo.json";
import { BsDownload } from "react-icons/bs";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Windows from "../pages/Windows";
import Mac from "../pages/Mac";
import Linux from "../pages/Linux";

// ===========================================
// The downloads merged with the master branch
// ===========================================

// const DownloadSection = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-6">
//       <DownloadItem
//         title={windows.title}
//         text={windows.description}
//         format={windows.format}
//         link={windows.source}
//       />{" "}
//       <DownloadItem
//         title={macos.title}
//         text={macos.description}
//         format={macos.format}
//         link={macos.source}
//       />{" "}
//       <DownloadItem
//         title={linux.title}
//         text={linux.description}
//         format={linux.format}
//         link={linux.source}
//       />
//     </div>
//   );
// };

// const DownloadItem = (props) => {
//   const { title, text, link, format } = props;

//   return (
//     <div className="bg-slate-50 rounded p-6">
//       <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
//       <p className="font-medium text-md sm:text-lg text-slate-600">{text}</p>
//       <a
//         className="bg-slate-200 inline-flex justify-center items-center px-5 py-2 rounded-full gap-2 hover:bg-slate-300 my-2 font-medium transition-transform active:bg-slate-400 active:scale-95"
//         href={link}
//       >
//         Download {format} <BsDownload />
//       </a>
//     </div>
//   );
// };

// ================================
// NEW DOWNLOADS WITH TAB SELECTION
// ================================
const DownloadSection = () => {
  return (
    <BrowserRouter>
      <div className="grid grid-cols-3 gap-2 pt-8">
        <DownloadWindows />
        <DownloadMac />
        <DownloadLinux />
      </div>
      <Routes>
        <Route path="downloads/windows" element={<Windows />} />
        <Route path="downloads/mac" element={<Mac />} />
        <Route path="downloads/linux" element={<Linux />} />
      </Routes>
    </BrowserRouter>
  );
};

// =================================
// SEPERATE COMPONENTS FOR DOWNLOADS
// =================================
const DownloadWindows = () => {
  return (
    <Link
      className="bg-slate-100 p-6 text-xl rounded my-2 font-medium hover:bg-slate-200"
      to="downloads/windows"
    >
      {windows.title}
    </Link>
  );
};

const DownloadMac = () => {
  return (
    <Link
      className="bg-slate-100 p-6 text-xl rounded my-2 font-medium hover:bg-slate-200"
      to="downloads/mac"
    >
      {macos.title}
    </Link>
  );
};

const DownloadLinux = () => {
  return (
    <Link
      className="bg-slate-100 p-6 text-xl rounded my-2 font-medium hover:bg-slate-200"
      to="downloads/linux"
    >
      {linux.title}
    </Link>
  );
};

export default DownloadSection;
