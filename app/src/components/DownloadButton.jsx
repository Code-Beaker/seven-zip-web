import React from "react";

const DownloadButton = (props) => {
  const { text, source } = props;

  return (
    <a
      className="border font-medium text-lg border-slate-400 px-5 py-3 inline-block text-slate-600 rounded-full my-3 hover:bg-slate-300 active:scale-95 active:bg-slate-400 transition-transform"
      href={source}
    >
      {text}
    </a>
  );
};

export default DownloadButton;
