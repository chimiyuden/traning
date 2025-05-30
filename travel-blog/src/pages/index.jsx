import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <p>Journey Through My Travel Stories</p>
      <img
        src="https://cdn.prod.website-files.com/6364d88dd010ce5c6f8aa8fc/667159265a2c78d79e01d8d4_Phobjikha%20Valley.jpg"
        alt="Landscape"
        style={{
          width: "100%",
          borderRadius: "8px",
        }}
      />
      <img
        src="https://media.istockphoto.com/id/1183079736/photo/golden-buddha-statue-in-bhutan.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=k6tLE6ZHY9xR5TnLuOLvGrsr_gcTgbQTotgtnYzu77s="
        alt="Landscape"
        style={{
          width: "100%",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};
export default Home;
