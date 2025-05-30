// import Nav from "../../../components/Nav";

// const teamMembers = [
//   {
//     name: "Chimi: The Cultural Curator",
//     description: `Chimi brings a deep love for heritage, local traditions, and storytelling to every destination we visit. Whether she’s chatting with a village elder or exploring a centuries-old temple, Chimi has a gift for uncovering the heart and soul of a place. Her eye for detail and passion for culture make every journey richer, more meaningful, and unforgettable.`,
//     image:
//       "https://st2.depositphotos.com/21607914/42954/i/450/depositphotos_429540370-stock-photo-zhao-lusi-chinese-actress-shows.jpg",
//   },
//   {
//     name: "Thinley: The Visual Explorer",
//     description: `With a camera always in hand and an eye for the extraordinary, Thinley captures the beauty and spirit of our travels. From candid street moments to sweeping landscapes, her photography brings our adventures to life. Beyond the lens, she’s also a logistics wizard—turning travel plans into smooth, memorable experiences.`,
//     image:
//       "https://imgcdn.stablediffusionweb.com/2024/9/7/b1251c89-1934-478c-91e6-57f1a7de43d8.jpg",
//   },
//   {
//     name: "Choden: The Quiet Architect",
//     description: `Choden works behind the scenes with quiet brilliance. She’s the reason we never miss a bus, always find the right trail, and somehow end up in the right place at the right time. With her love for research and local insight, she crafts travel days that feel effortless—but are anything but. Her strength lies in thoughtful structure and making complex things look simple.`,
//     image:
//       "https://st2.depositphotos.com/37603430/46514/i/450/depositphotos_465144462-stock-photo-asian-beautiful-lady-dark-blue.jpg",
//   },
// ];

// const Team = () => {
//   return (
//     <div style={{ fontFamily: "monospace", padding: "20px" }}>
//       <Nav />
//       <div>
//         <h2>👣 My Travel Companions & Collaborators</h2>
//       </div>
//       {teamMembers.map((member, index) => (
//         <div
//           key={index}
//           style={{
//             display: "flex",
//             flexDirection: index % 2 === 0 ? "row" : "row-reverse",
//             alignItems: "center",
//             gap: "20px",
//             backgroundColor: "#f9f9f9",
//             borderRadius: "12px",
//             padding: "20px",
//             marginBottom: "20px",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <img
//             src={member.image}
//             alt={member.name}
//             style={{
//               width: "150px",
//               height: "195px",
//               objectFit: "cover",
//               borderRadius: "12px",
//             }}
//           />
//           <div style={{ textAlign: index % 2 !== 0 ? "right" : "left" }}>
//             <h3 style={{ margin: "0 0 10px", fontSize: "20px" }}>
//               {member.name}
//             </h3>
//             <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
//               {member.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Team;
import Nav from "../../../components/Nav";

const teamMembers = [
  {
    name: "Chimi: The Cultural Curator",
    description: `Chimi brings a deep love for heritage, local traditions, and storytelling to every destination we visit. Whether she’s chatting with a village elder or exploring a centuries-old temple, Chimi has a gift for uncovering the heart and soul of a place.`,
    image:
      "https://st2.depositphotos.com/21607914/42954/i/450/depositphotos_429540370-stock-photo-zhao-lusi-chinese-actress-shows.jpg",
  },
  {
    name: "Thinley: The Visual Explorer",
    description: `With a camera always in hand and an eye for the extraordinary, Thinley captures the beauty and spirit of our travels. Beyond the lens, she’s also a logistics wizard—turning travel plans into smooth, memorable experiences.`,
    image:
      "https://imgcdn.stablediffusionweb.com/2024/9/7/b1251c89-1934-478c-91e6-57f1a7de43d8.jpg",
  },
  {
    name: "Choden: The Quiet Architect",
    description: `Choden works behind the scenes with quiet brilliance. With her love for research and local insight, she crafts travel days that feel effortless—but are anything but.`,
    image:
      "https://st2.depositphotos.com/37603430/46514/i/450/depositphotos_465144462-stock-photo-asian-beautiful-lady-dark-blue.jpg",
  },
];

const Team = () => {
  return (
    <div style={styles.page}>
      <Nav />
      <div style={styles.header}>
        <h2 style={styles.title}>✨ Meet the Dream Team ✨</h2>
        <p style={styles.subtitle}>
          The soul sisters behind every story, shot, and step 🌸
        </p>
      </div>
      <div style={styles.teamWrapper}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              backgroundColor:
                index % 3 === 0
                  ? "#fce4ec"
                  : index % 3 === 1
                  ? "#e3f2fd"
                  : "#e8f5e9",
            }}
          >
            <img src={member.image} alt={member.name} style={styles.image} />
            <div
              style={{
                ...styles.textBox,
                textAlign: index % 2 !== 0 ? "right" : "left",
              }}
            >
              <h3 style={styles.name}>{member.name}</h3>
              <p style={styles.description}>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

const styles = {
  page: {
    fontFamily: "'Quicksand', sans-serif",
    background: "linear-gradient(to right, #fce4ec, #e3f2fd, #e8f5e9)",
    minHeight: "100vh",
    padding: "3rem 2rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.4rem",
    color: "#d81b60",
    margin: 0,
  },
  subtitle: {
    color: "#6a1b9a",
    fontSize: "1.1rem",
    marginTop: "0.5rem",
  },
  teamWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    borderRadius: "1.5rem",
    padding: "1.5rem",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "160px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "1rem",
    border: "3px solid #fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  textBox: {
    maxWidth: "600px",
  },
  name: {
    fontSize: "1.5rem",
    color: "#4a148c",
    marginBottom: "0.5rem",
  },
  description: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333",
  },
};
