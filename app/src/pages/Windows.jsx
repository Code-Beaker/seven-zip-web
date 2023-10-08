import React from "react";
import { windows } from "../data/osinfo.json";
import DownloadButton from "../components/DownloadButton";

const Windows = () => {
  return (
    <div className="bg-slate-200 p-6 rounded">
      <h1 className="text-3xl font-semibold">{windows.title}</h1>
      <p className="text-xl font-medium text-slate-500">
        {windows.description}
      </p>
      <DownloadButton
        text={`Download ${windows.format}`}
        source={windows.source}
      />
    </div>
  );
};

export default Windows;
