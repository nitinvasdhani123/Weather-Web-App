import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [state, setstate] = useState(0);
  const [city, setcity] = useState("");
  const [data, setdata] = useState("");

  useEffect(() => {
    async function getdata() {
      try {
        let get = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=45584f79e39a4ea4ac6203007230206&q=${city}`
        );
        let response = await get.json();
        setdata(response);
      } catch (error) {
        console.log("error occured");
      }
    }
    getdata();
  }, [state]);

  return (
    <>
      <div id="container">
        <div className="search">
          <input
            type="text"
            onChange={(event) => {
              setcity(event.target.value);
            }}
          />
          <button
            onClick={() => {
              setstate(state + 1);
            }}
          >
            <i className="fa-brands fa-searchengin"></i>
          </button>
        </div>
        <div className="city">{data?.location?.name}, {data?.location?.region}, {data?.location?.country}</div>
        <img src={data?.current?.condition?.icon} alt="error"></img>
        <div className="city">{data?.current?.condition?.text}</div>

        <div className="generalinfo">
          <span className="key">Temperature : </span> <span className="value">{data?.current?.temp_c} <sup>o</sup>C</span>
        </div>
        <div className="generalinfo">
          <span className="key">Feellike : </span> <span className="value">{data?.current?.feelslike_c} <sup>o</sup>C</span>
        </div>
        <div className="generalinfo">
          <span className="key">Wind Speed : </span> <span className="value">{data?.current?.wind_kph} Km/h</span>
        </div>
        <div className="generalinfo">
          <span className="key">Gust Speed : </span> <span className="value">{data?.current?.gust_kph} Km/h</span>
        </div>
        <div className="generalinfo">
          <span className="key">Pressure : </span> <span className="value">{data?.current?.pressure_mb} mb</span>
        </div>
        <div className="generalinfo">
          <span className="key">Humidity : </span> <span className="value">{data?.current?.humidity} g.m<sup>-3</sup></span>
        </div>
        <div className="generalinfo">
          <span className="key">Precipitation : </span> <span className="value">{data?.current?.precip_mm} mm</span>
        </div>
        <div className="generalinfo">
          <span className="key">Visibility : </span> <span className="value">{data?.current?.vis_km} Km</span>
        </div>
      </div>
    </>
  );
}

export default App;
