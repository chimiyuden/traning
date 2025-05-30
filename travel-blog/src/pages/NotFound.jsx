import { Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";

const NotFound = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="*" Component={() => <div>Not found</div>} />
      </Routes>
    </div>
  );
};
export default NotFound;
