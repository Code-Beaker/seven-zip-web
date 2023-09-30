import React from "react";

const NavBar = () => {
  return (
    <nav className="p-4 sticky top-0 bg-slate-50 flex justify-center sm:justify-around items-center">
      <a href="index.html" className="text-3xl text-blue-950 font-bold ">
        7-zip
      </a>
      <ul className="flex">
        <li>
          <NavLink text={"About"} link={"#about"} />
        </li>
        <li>
          <NavLink text={"Download"} link={"#download"} />
        </li>
        <li>
          <NavLink text={"FAQ"} link={"#"} />
        </li>
        <li>
          <NavLink text={"Support"} link={"#"} />
        </li>
      </ul>
    </nav>
  );
};

const NavLink = (props) => {
  const { text, link } = props;

  return (
    <a
      className="sm:text-lg hidden sm:block mx-2 px-5 py-3 rounded-full hover:bg-slate-100 transition-transform active:scale-95 active:bg-slate-200"
      href={link}
    >
      {text}
    </a>
  );
};

export default NavBar;
