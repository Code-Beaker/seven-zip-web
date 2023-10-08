import React from "react";
import { macos } from "../data/osinfo.json";
import DownloadButton from "../components/DownloadButton";

const Mac = () => {
  return (
    <div className="bg-slate-200 p-6 rounded">
      <h1 className="text-3xl font-semibold">{macos.title}</h1>
      <p className="text-xl font-medium text-slate-500">{macos.description}</p>
      <DownloadButton text={`Download ${macos.format}`} source={macos.source} />
    </div>
  );
};

export default Mac;
