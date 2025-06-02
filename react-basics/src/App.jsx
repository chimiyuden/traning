// import "./App.css";

// const Card = () => {
//   return (
//     <div class="shadow p-2 rounded-sm">
//       <p>
//         <span class="star">★★★★★</span>
//       </p>
//       <p>
//         Nepalabs has streamlined our mobile and website development workflows,
//         saving us countless hours of manual effort.
//       </p>
//       <p class="bold">Deepak K. Jain</p>
//       <p>Product Manager, TravelKosh</p>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <Card />
//     </div>
//   );
// }

// export default App;
// import { useState, useEffect } from "react";

// const URL = `http://api.weatherapi.com/v1/current.json?key=661ba6c73ddb4389af244327250206&q=Bhutan&aqi=no`;

// function App() {
//   const [temp, setTemp] = useState(0);
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch(URL);
//       result.json().then((json) => {
//         setTemp(json.current.temp_f);
//       });
//     };
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h1>Bumthang Temp Now :{temp}F</h1>
//     </div>
//   );
// }
// export default App;
