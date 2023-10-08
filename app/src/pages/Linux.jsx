import React from "react";
import { linux } from "../data/osinfo.json";
import DownloadButton from "../components/DownloadButton";

const Linux = () => {
  return (
    <div className="bg-slate-200 p-6 rounded">
      <h1 className="text-3xl font-semibold">{linux.title}</h1>
      <p className="text-xl font-medium text-slate-500">{linux.description}</p>
      <DownloadButton text={`Download ${linux.format}`} source={linux.source} />
    </div>
  );
};

export default Linux;
