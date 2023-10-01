import React from "react";

const Features = ({ link }) => {
  return (
    <section id={link} className="px-12 sm:py-24 text-center">
      <h1 className="text-5xl my-3 font-bold text-slate-800">Features</h1>
      <p className="text-2xl font-medium text-slate-600">
        Explore the features of 7-zip. These features make it unique and useful.
      </p>
      <FeaturesGrid />
    </section>
  );
};

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-3 p-6">
      <Feature
        title={"High compression rate"}
        text={
          "High compression ratio in 7z format with LZMA and LZMA2 compression"
        }
      />
      <Feature
        title={"Encryption"}
        text={"Strong AES-256 encryption in 7z and ZIP formats"}
      />
      <Feature
        title={"Shell integration"}
        text={"Integration with Windows Shell"}
      />
      <Feature
        title={"It just works"}
        text={"Powerful File Manager and Command line version"}
      />
      <Feature
        title={"Fast"}
        text={
          "7-Zip offers a 2-10% better compression ratio for ZIP and GZIP formats compared to PKZip and WinZip."
        }
      />
      <Feature
        title={"Compatibility"}
        text={
          "7-Zip is compatible with various operating systems, including Windows 11 / 10, 8, 7, Vista and many more."
        }
      />
    </div>
  );
};

const Feature = (props) => {
  const { title, text } = props;

  return (
    <div className="bg-slate-300 p-6 rounded transition-opacity opacity-50 hover:opacity-100">
      <h1 className="font-bold text-2xl text-slate-800">{title}</h1>
      <p className="font-medium text-lg text-left text-slate-600">{text}</p>
    </div>
  );
};

export default Features;
