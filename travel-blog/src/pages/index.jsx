// import Nav from "../components/Nav";

// const Home = () => {
//   return (
//     <div>
//       <Nav />
//       <p>Journey Through My Travel Stories</p>
//       <img
//         src="https://cdn.prod.website-files.com/6364d88dd010ce5c6f8aa8fc/667159265a2c78d79e01d8d4_Phobjikha%20Valley.jpg"
//         alt="Landscape"
//         style={{
//           width: "100%",
//           borderRadius: "8px",
//         }}
//       />
//       <img
//         src="https://media.istockphoto.com/id/1183079736/photo/golden-buddha-statue-in-bhutan.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=k6tLE6ZHY9xR5TnLuOLvGrsr_gcTgbQTotgtnYzu77s="
//         alt="Landscape"
//         style={{
//           width: "100%",
//           borderRadius: "8px",
//         }}
//       />
//     </div>
//   );
// };
// export default Home;
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div style={styles.page}>
      <Nav />
      <div style={styles.hero}>
        <h1 style={styles.heading}>🌏 Journey Through My Travel Stories</h1>
        <p style={styles.subheading}>
          From hidden temples to mountain valleys — discover places that touched
          my heart 💖
        </p>
      </div>
      <div style={styles.gallery}>
        <img
          src="https://cdn.prod.website-files.com/6364d88dd010ce5c6f8aa8fc/667159265a2c78d79e01d8d4_Phobjikha%20Valley.jpg"
          alt="Phobjikha Valley"
          style={styles.image}
        />
        <img
          src="https://media.istockphoto.com/id/1183079736/photo/golden-buddha-statue-in-bhutan.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=k6tLE6ZHY9xR5TnLuOLvGrsr_gcTgbQTotgtnYzu77s="
          alt="Golden Buddha in Bhutan"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default Home;

const styles = {
  page: {
    fontFamily: "'Quicksand', sans-serif",
    background: "linear-gradient(to right, #fce4ec, #e3f2fd)",
    minHeight: "100vh",
    padding: "2rem",
  },
  hero: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#6a1b9a",
    marginBottom: "0.5rem",
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#4a148c",
    maxWidth: "600px",
    margin: "0 auto",
  },
  gallery: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  image: {
    width: "100%",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
};
