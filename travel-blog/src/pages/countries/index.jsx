// import { Link } from "react-router-dom";
// import Nav from "../../components/Nav";

// const Country = () => {
//   return (
//     <div>
//       <Nav />
//       <h3> Places to visit in Bhutan</h3>
//       {[
//         { name: "Germany", path: "Germany" },
//         { name: "Japan", path: "Japan" },
//         { name: "China", path: "China" },
//       ].map((place) => (
//         <div key={place.path}>
//           <Link to={`/country/${place.path}`}>{place.path}</Link>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Country;
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

const countries = [
  {
    name: "Germany",
    path: "Germany",
    flag: "https://flagcdn.com/w320/de.png",
  },
  {
    name: "Japan",
    path: "Japan",
    flag: "https://flagcdn.com/w320/jp.png",
  },
  {
    name: "China",
    path: "China",
    flag: "https://flagcdn.com/w320/cn.png",
  },
];

const Country = () => {
  return (
    <div style={styles.container}>
      <Nav />
      <div style={styles.wrapper}>
        <h2 style={styles.title}>🌍 Places to Visit in the World</h2>
        <div style={styles.cardGrid}>
          {countries.map((country) => (
            <Link
              to={`/country/${country.path}`}
              key={country.path}
              style={styles.card}
            >
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                style={styles.image}
              />
              <div style={styles.cardText}>{country.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country;

const styles = {
  container: {
    background: "linear-gradient(135deg, #fce4ec, #e0f7fa, #e6f4ea)",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    paddingBottom: "3rem",
  },
  wrapper: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#7b2cbf",
    marginBottom: "2.5rem",
    fontWeight: "600",
    background: "linear-gradient(to right, #ffb6c1, #a5d6a7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },
  card: {
    background: "#fff",
    width: "220px",
    height: "280px",
    borderRadius: "20px",
    textDecoration: "none",
    color: "#444",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "16px",
    marginBottom: "1rem",
  },
  cardText: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#4a148c",
  },
};
