import { useEffect, useState } from "react";
import ChevronDown from "../assets/ChevronDown";
import ChevronUp from "../assets/ChevronUp";
import axios from "axios";

// STYLES ARE APPYLING FROM (checkoutDetails.scss)
const SelectCountry = () => {
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState<boolean>(false);
  const [countryName, setCountryName] = useState<string>("Select your country");

  const getCountries = async () => {
    try {
      const { data } = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,flags"
      );
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className='details__inputBox'>
      <label htmlFor='country' className='details__label'>
        Country
      </label>
      <div className='details__select'>
        <div
          className='details__selectContent'
          onClick={() => setShowCountries(!showCountries)}
        >
          <h4 className='details__countrySelected'>{countryName}</h4>
          {showCountries ? <ChevronUp /> : <ChevronDown />}
        </div>
        <div
          className={`details__countries ${
            showCountries && "details__countries--show"
          }`}
        >
          {countries.length > 0 &&
            countries.map((country) => {
              const {
                flags: { alt, png },
                name: { common },
              } = country;
              return (
                <div
                  key={common}
                  onClick={() => {
                    setCountryName(common);
                    setShowCountries(false);
                  }}
                >
                  {showCountries && (
                    <div className='details__country'>
                      <div className='details__countryImg'>
                        <img src={png} alt={alt} />
                      </div>
                      <strong className='details__label'>{common}</strong>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SelectCountry;
