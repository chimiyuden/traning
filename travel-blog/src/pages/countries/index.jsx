import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

const Country = () => {
  return (
    <div>
      <Nav />
      <h3> Places to visit in Bhutan</h3>
      {[
        { name: "Germany", path: "Germany" },
        { name: "Japan", path: "Japan" },
        { name: "China", path: "China" },
      ].map((place) => (
        <div key={place.path}>
          <Link to={`/country/${place.path}`}>{place.path}</Link>
        </div>
      ))}
    </div>
  );
};
export default Country;
