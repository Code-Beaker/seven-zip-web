import React from "react";
import { BsGithub } from "react-icons/bs";

const Content = () => {
  return (
    <main>
      <About link={"about"} />
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

const Downloads = () => {
  return (
    <section>
      <h1>Download now for free.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi nemo
        quas quaerat praesentium alias et eaque sint a?
      </p>
    </section>
  );
};

export default Content;
