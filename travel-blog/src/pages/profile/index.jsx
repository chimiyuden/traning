// import Nav from "../../components/Nav";

// const Profile = () => {
//   return (
//     <div>
//       <Nav />
//       <div>Profile Page</div>
//     </div>
//   );
// };
// export default Profile;
import Nav from "../../components/Nav";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { userName } = useAuth();

  return (
    <div style={styles.page}>
      <Nav />
      <div style={styles.container}>
        <div style={styles.card}>
          <img
            src="https://i.pinimg.com/236x/7d/43/25/7d43254f80f8c5875778f0e1bfa5df33.jpg"
            alt="User Avatar"
            style={styles.avatar}
          />
          <h2 style={styles.username}>
            Hi, {userName || "Lovely Traveler"} 💖
          </h2>
          <p style={styles.bio}>
            Welcome to your cozy corner 🌿. Here's your personal travel
            dashboard.
          </p>
          <div style={styles.sections}>
            <div style={styles.sectionBox}>
              <h4>📌 Favorite Countries</h4>
              <p>Coming soon...</p>
            </div>
            <div style={styles.sectionBox}>
              <h4>⚙️ Settings</h4>
              <p>Customize your experience</p>
            </div>
            <div style={styles.sectionBox}>
              <h4>📅 Travel Plans</h4>
              <p>Add your next adventure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

const styles = {
  page: {
    background: "linear-gradient(to right, #fde2e4, #e0f7fa, #e6f4ea)",
    minHeight: "100vh",
    fontFamily: "'Quicksand', sans-serif",
    paddingTop: "5rem",
    paddingBottom: "3rem",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "2rem",
    padding: "2rem",
    boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    border: "4px solid #f8bbd0",
  },
  username: {
    fontSize: "1.8rem",
    color: "#ec407a",
    marginBottom: "0.5rem",
  },
  bio: {
    color: "#555",
    marginBottom: "1.5rem",
  },
  sections: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },
  sectionBox: {
    backgroundColor: "#f1f8e9",
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
};
