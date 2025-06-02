// // // normal
// // import { useState, useEffect } from "react";
// // import "./App.css";

// // const API_KEY = "661ba6c73ddb4389af244327250206";
// // const cities = [
// //   "Bhutan",
// //   "London",
// //   "New York",
// //   "Tokyo",
// //   "Sydney",
// //   "China",
// //   "India",
// //   "Netherland",
// // ];

// // function App() {
// //   const [city, setCity] = useState("Bhutan");
// //   const [unit, setUnit] = useState("f");
// //   const [temp, setTemp] = useState(null);

// //   useEffect(() => {
// //     fetch(
// //       `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
// //     )
// //       .then((res) => res.json())
// //       .then((data) => {
// //         const t = unit === "f" ? data.current.temp_f : data.current.temp_c;
// //         setTemp(t);
// //       })
// //       .catch((err) => console.error("Error fetching weather:", err));
// //   }, [city, unit]);

// //   return (
// //     <div className="app">
// //       <h1>Weather App</h1>

// //       <div>
// //         <select value={city} onChange={(e) => setCity(e.target.value)}>
// //           {cities.map((c) => (
// //             <option key={c}>{c}</option>
// //           ))}
// //         </select>

// //         <select value={unit} onChange={(e) => setUnit(e.target.value)}>
// //           <option value="c">°C</option>
// //           <option value="f">°F</option>
// //         </select>
// //       </div>

// //       <div>
// //         {temp !== null ? (
// //           <h2>
// //             {city}: {temp}°{unit.toUpperCase()}
// //           </h2>
// //         ) : (
// //           <p>Loading...</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// // axios
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// const API_KEY = "661ba6c73ddb4389af244327250206";

// const cities = [
//   "Bhutan",
//   "London",
//   "New York",
//   "Tokyo",
//   "Sydney",
//   "China",
//   "India",
//   "Netherland",
// ];

// function App() {
//   const [city, setCity] = useState("Bhutan");
//   const [unit, setUnit] = useState("f");
//   const [temp, setTemp] = useState(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const response = await axios.get(
//           `http://api.weatherapi.com/v1/current.json`,
//           {
//             params: {
//               key: API_KEY,
//               q: city,
//               aqi: "no",
//             },
//           }
//         );

//         const data = response.data;
//         const t = unit === "f" ? data.current.temp_f : data.current.temp_c;
//         setTemp(t);
//       } catch (error) {
//         console.error("Error fetching weather:", error);
//         setTemp(null);
//       }
//     };

//     fetchWeather();
//   }, [city, unit]);

//   return (
//     <div className="app">
//       <h1>Weather App</h1>

//       <div>
//         <select value={city} onChange={(e) => setCity(e.target.value)}>
//           {cities.map((c) => (
//             <option key={c}>{c}</option>
//           ))}
//         </select>

//         <select value={unit} onChange={(e) => setUnit(e.target.value)}>
//           <option value="c">°C</option>
//           <option value="f">°F</option>
//         </select>
//       </div>

//       <div>
//         {temp !== null ? (
//           <h2>
//             {city}: {temp}°{unit.toUpperCase()}
//           </h2>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import axios from "axios";

const countries = [
  "Bhutan",
  "India",
  "Nepal",
  "Japan",
  "Canada",
  "Australia",
  "New Zealand",
  "United States",
  "France",
  "SwitzerLand",
];

const URL = `http://api.weatherapi.com/v1/current.json?key=e2ecf16737b544e3aa745349250206`;

function App() {
  const [data, setData] = useState(null);
  const [temperatureReading, setTemperatureReading] = useState("C");
  const [country, setCountry] = useState("Bhutan");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}&q=${country}&aqi=no`);
        setData(response.data.current);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setData(null);
      }
    };

    fetchData();
  }, [country]);

  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>🌍 Weather Viewer</h1>

      <div style={styles.card}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>🌐 Select Country</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={styles.select}
          >
            {countries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>🌡️ Temperature Unit</label>
          <select
            value={temperatureReading}
            onChange={(e) => setTemperatureReading(e.target.value)}
            style={styles.select}
          >
            {["C", "F"].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.result}>
          {data ? (
            <p style={styles.tempText}>
              Current temperature in <strong>{country}</strong>:{" "}
              <span style={styles.tempValue}>
                {temperatureReading === "C" ? data.temp_c : data.temp_f}°
                {temperatureReading}
              </span>
            </p>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#d0e7ff",
    minHeight: "100vh",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  inputGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  select: {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  result: {
    marginTop: "1.5rem",
  },
  tempText: {
    fontSize: "1.2rem",
  },
  tempValue: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#0077b6",
  },
};

export default App;
