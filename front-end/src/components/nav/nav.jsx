import React from "react";
import style from "./nav.module.css";

const Nav = () => {
  return (
    <div className={style.bd_grid}>
      <div className={style.navbar}>
        <h2>
          <a href="/countries/1">Mondo</a>
        </h2>
        <h2>
          <a href="/addactivity">Add Activity</a>
        </h2>
      </div>
    </div>
  );
};

export default Nav;
