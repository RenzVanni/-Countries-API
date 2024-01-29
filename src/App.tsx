import { useState, ChangeEvent, useEffect } from "react";
import data from "./data.json";

const App = () => {
  const [info, setInfo] = useState(data);
  const uniqueRegion = [...new Set(data.map((region) => region.region))];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value.toLowerCase();
    setInfo(
      data.filter((subject) =>
        subject.name == ""
          ? data
          : subject.name.toLowerCase().includes(searchInput)
      )
    );
  };

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value.toLowerCase();
    setInfo(
      data.filter((region) =>
        filterValue === "all"
          ? data
          : region.region.toLowerCase() === filterValue
      )
    );
  };
  return (
    <div>
      <div className="head">
        <h3>Where in the world?</h3>
        <div className="mode">
          <img src="icons/moon-icon.svg" alt="" />
          <span>Dark Mode</span>
        </div>
      </div>

      <div className="main">
        <div className="search">
          <div className="search-bar">
            <button>
              <img src="icons/search-icon.svg" alt="" />
            </button>
            <hr />
            <input
              onChange={handleSearch}
              type="text"
              name=""
              id=""
              placeholder="Search for a country..."
            />
          </div>

          <select name="" id="" onChange={handleFilter}>
            <option hidden>Filter by Region</option>
            <option value={"all"}>All</option>
            {uniqueRegion.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="cards">
          {info.map((data, index) => {
            return (
              <div className="card" key={index}>
                <div className="img-container">
                  <img src={data.flags.png} alt="" />
                </div>

                <div className="context">
                  <h2>{data.name}</h2>
                  <p>Population: {data.population}</p>
                  <p>Region: {data.region}</p>
                  <p>Capital: {data.capital}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
