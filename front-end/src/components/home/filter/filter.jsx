import React from "react";
import style from "./filter.module.css";

class Filter extends React.Component {
  componentDidUpdate() {
    if (this.props.filterField) {
      if (this.props.filterField === "sortby") {
        window.location.href = "/countries/1";
      } else {
        window.location.href = `/countries/order/${this.props.filterField}/1`;
      }
    }
  }
  render() {
    const location = window.location.href.split("/")[5];
    const filters = {
      sortby: false,
      africa: false,
      americas: false,
      asia: false,
      europe: false,
      oceania: false,
      alpdown: false,
      popdown: false,
      popup: false,
      summer: false,
      fall: false,
      winter: false,
      spring: false,
    };

    for (const property in filters) {
      if (location === property) {
        filters[property] = true;
      }
    }
    console.log(this.props.filterField);
    return (
      <div className={style.filters}>
        <select className={style.selects} onChange={this.props.filterChange}>
          {" "}
          <option value="sortby" selected={filters.sortby}>
            All Continents
          </option>
          <option value="africa" selected={filters.africa}>
            Africa
          </option>
          <option value="americas" selected={filters.americas}>
            America
          </option>
          <option value="asia" selected={filters.asia}>
            Asia
          </option>
          <option value="europe" selected={filters.europe}>
            Europe
          </option>
          <option value="oceania" selected={filters.oceania}>
            Oceania
          </option>{" "}
        </select>{" "}
        <select className={style.selects} onChange={this.props.filterChange}>
          {" "}
          <option value="sortby" selected={filters.sortby}>
            Alphabet Up
          </option>
          <option value="alpdown" selected={filters.alpdown}>
            Alphabet Down
          </option>{" "}
          <option value="popdown" selected={filters.popdown}>
            Population Down
          </option>
          <option value="popup" selected={filters.popup}>
            Population Up
          </option>{" "}
        </select>{" "}
        <select
          className={style.selects + " " + style.last}
          onChange={this.props.filterChange}
        >
          {" "}
          <option value="sortby" selected={filters.sortby}>
            All Activities
          </option>
          <option value="summer" selected={filters.summer}>
            Summer
          </option>
          <option value="fall" selected={filters.fall}>
            Fall{" "}
          </option>
          <option value="winter" selected={filters.winter}>
            Winter{" "}
          </option>
          <option value="spring" selected={filters.spring}>
            Spring{" "}
          </option>
        </select>
      </div>
    );
  }
}

export default Filter;
