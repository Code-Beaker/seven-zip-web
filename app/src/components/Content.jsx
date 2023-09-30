import React from "react";
import { BsGithub } from "react-icons/bs";
import DownloadSection from "./DownloadSection";

const Content = () => {
  return (
    <main>
      <About link={"about"} />
      <Downloads link={"download"} />
    </main>
  );
};

const About = ({ link }) => {
  return (
    <section className="px-12 sm:py-24 text-center" id={link}>
      <h1 className="text-5xl my-3 font-bold text-slate-800">What is 7-zip?</h1>
      <p className="text-2xl font-medium text-slate-600">
        A <span className="font-bold">Free</span> and{" "}
        <span className="font-bold">Open-source</span> archiver tool with high
        compression rates.
      </p>
      <ViewSourceButton />
    </section>
  );
};

const ViewSourceButton = () => {
  return (
    <a
      className="inline-flex text-lg my-4 font-medium gap-5 items-center px-5 py-3 border border-slate-200 rounded-full hover:bg-slate-100 transition-transform active:bg-slate-200 active:scale-95"
      href=""
    >
      View source
      <span>
        <BsGithub />
      </span>
    </a>
  );
};

const Downloads = ({ link }) => {
  return (
    <>
      <section className="text-center bg-slate-800 py-24 px-12" id={link}>
        <h1 className="text-5xl my-3 font-bold text-slate-100">
          Download 7-zip
        </h1>
        <p className="text-2xl font-medium text-slate-400">
          Download now for free. For any computer. The source is available on
          GitHub.
        </p>
        <DownloadSection />
      </section>
    </>
  );
};

export default Content;
