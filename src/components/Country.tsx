import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const Country = () => {
  const thisIsTheme = useContext(ThemeContext);
  console.log(thisIsTheme);
  const { country } = useParams();
  const navigate = useNavigate();
  const place = data.find((place) => place.name == country);

  if (!place) {
    return <div>Country Not Found!</div>;
  }

  const handleReturn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    navigate("/");
  };
  return (
    <div className={thisIsTheme?.theme ? "dark-country" : "country"}>
      <button onClick={handleReturn}>
        <img src="icons/arrow-icon.svg" alt="arrow-icon" /> Back
      </button>

      <div className="main-country">
        <div className="flag-container">
          <img src={place.flags.png} alt={`${place.name} flag`} />
        </div>

        <div className="context">
          <h2>{place.name}</h2>
          <div className="section-1">
            <div className="sub-section-1">
              <p>
                Native Name: <span>{place.nativeName}</span>
              </p>
              <p>
                Population: <span>{place.population}</span>
              </p>
              <p>
                Region: <span>{place.region}</span>
              </p>
              <p>
                Sub Region: <span>{place.subregion}</span>
              </p>
              <p>
                Capital: <span>{place.capital}</span>
              </p>
            </div>

            <div className="sub-section-2">
              <p>
                Top Level Domain: <span>{place.topLevelDomain}</span>
              </p>
              <p>
                Currencies:{" "}
                {place.currencies?.map((currencies, index) => {
                  return <span key={index}>{currencies.code}</span>;
                })}
              </p>
              <p>
                Languages:{" "}
                {place.languages?.map((lang, index) => {
                  return <span key={index}>{lang.name} </span>;
                })}
              </p>
            </div>
          </div>

          <div className="section-2">
            <h2>Border Countries</h2>
            <div className="sub-country">
              <button>
                {place.languages?.map((borderCountries, index) => {
                  return <span key={index}>{borderCountries.nativeName}</span>;
                })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
