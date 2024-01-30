import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";

const Country = () => {
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
    <div>
      <button onClick={handleReturn}>Back</button>

      <div className="flag-container">
        <img src={place.flags.png} alt={`${place.name} flag`} />
      </div>

      <div className="context">
        <div className="section-1">
          <h2>{place.name}</h2>
          <p>Native Name: {place.nativeName}</p>
          <p>Population: {place.population}</p>
          <p>Region: {place.region}</p>
          <p>Sub Region: {place.subregion}</p>
          <p>Capital: {place.capital}</p>
        </div>

        <div className="section-2">
          <p>Top Level Domain: {place.topLevelDomain}</p>
          <p>
            Currencies: {place.currencies?.map((currencies) => currencies.code)}
          </p>
          <p>
            Languages:{" "}
            {place.languages?.map((lang, index) => {
              return <span key={index}>{lang.name} </span>;
            })}
          </p>
        </div>

        <div className="section-3">
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
  );
};

export default Country;
