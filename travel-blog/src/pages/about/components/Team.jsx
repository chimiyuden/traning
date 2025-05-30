// // import Nav from "../../../components/Nav";

// // const teamMembers = [
// //   {
// //     name: "Chimi: The Cultural Curator",
// //     description: `Chimi brings a deep love for heritage, local traditions, and storytelling to every destination we visit. Whether she’s chatting with a village elder or exploring a centuries-old temple, Chimi has a gift for uncovering the heart and soul of a place. Her eye for detail and passion for culture make every journey richer, more meaningful, and unforgettable.`,
// //     image:
// //       "https://st2.depositphotos.com/21607914/42954/i/450/depositphotos_429540370-stock-photo-zhao-lusi-chinese-actress-shows.jpg",
// //   },
// //   {
// //     name: "Thinley: The Visual Explorer",
// //     description: `With a camera always in hand and an eye for the extraordinary, Thinley captures the beauty and spirit of our travels. From candid street moments to sweeping landscapes, her photography brings our adventures to life. Beyond the lens, she’s also a logistics wizard—turning travel plans into smooth, memorable experiences.`,
// //     image:
// //       "https://imgcdn.stablediffusionweb.com/2024/9/7/b1251c89-1934-478c-91e6-57f1a7de43d8.jpg",
// //   },
// //   {
// //     name: "Choden: The Quiet Architect",
// //     description: `Choden works behind the scenes with quiet brilliance. She’s the reason we never miss a bus, always find the right trail, and somehow end up in the right place at the right time. With her love for research and local insight, she crafts travel days that feel effortless—but are anything but. Her strength lies in thoughtful structure and making complex things look simple.`,
// //     image:
// //       "https://st2.depositphotos.com/37603430/46514/i/450/depositphotos_465144462-stock-photo-asian-beautiful-lady-dark-blue.jpg",
// //   },
// // ];

// // const Team = () => {
// //   return (
// //     <div style={{ fontFamily: "monospace", padding: "20px" }}>
// //       <Nav />
// //       <div>
// //         <h2>👣 My Travel Companions & Collaborators</h2>
// //       </div>
// //       {teamMembers.map((member, index) => (
// //         <div
// //           key={index}
// //           style={{
// //             display: "flex",
// //             flexDirection: index % 2 === 0 ? "row" : "row-reverse",
// //             alignItems: "center",
// //             gap: "20px",
// //             backgroundColor: "#f9f9f9",
// //             borderRadius: "12px",
// //             padding: "20px",
// //             marginBottom: "20px",
// //             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
// //           }}
// //         >
// //           <img
// //             src={member.image}
// //             alt={member.name}
// //             style={{
// //               width: "150px",
// //               height: "195px",
// //               objectFit: "cover",
// //               borderRadius: "12px",
// //             }}
// //           />
// //           <div style={{ textAlign: index % 2 !== 0 ? "right" : "left" }}>
// //             <h3 style={{ margin: "0 0 10px", fontSize: "20px" }}>
// //               {member.name}
// //             </h3>
// //             <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
// //               {member.description}
// //             </p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Team;
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
//     <div style={styles.page}>
//       <Nav />
//       <div style={styles.header}>
//         <h2 style={styles.title}>👣 My Travel Companions & Collaborators</h2>
//         <p style={styles.subtitle}>
//           Meet the voices and visions behind every magical moment.
//         </p>
//       </div>
//       <div style={styles.container}>
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.card,
//               flexDirection: index % 2 === 0 ? "row" : "row-reverse",
//               backgroundColor:
//                 index % 3 === 0
//                   ? "#fce4ec"
//                   : index % 3 === 1
//                   ? "#e8f5e9"
//                   : "#e3f2fd",
//             }}
//           >
//             <img src={member.image} alt={member.name} style={styles.image} />
//             <div
//               style={{
//                 ...styles.text,
//                 textAlign: index % 2 !== 0 ? "right" : "left",
//               }}
//             >
//               <h3 style={styles.name}>{member.name}</h3>
//               <p style={styles.description}>{member.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;

// const styles = {
//   page: {
//     fontFamily: "'Poppins', sans-serif",
//     padding: "3rem 1.5rem",
//     background: "linear-gradient(to bottom right, #fdfbfb, #ebedee)",
//     minHeight: "100vh",
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "2.5rem",
//   },
//   title: {
//     fontSize: "2.4rem",
//     fontWeight: "700",
//     margin: 0,
//     background: "linear-gradient(to right, #8e24aa, #d81b60)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   },
//   subtitle: {
//     color: "#555",
//     fontSize: "1rem",
//     marginTop: "0.5rem",
//   },
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "2rem",
//     maxWidth: "1000px",
//     margin: "0 auto",
//   },
//   card: {
//     display: "flex",
//     alignItems: "center",
//     gap: "1.5rem",
//     padding: "1.5rem",
//     borderRadius: "1.5rem",
//     boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   },
//   image: {
//     width: "160px",
//     height: "200px",
//     borderRadius: "1rem",
//     objectFit: "cover",
//     boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
//     transition: "transform 0.3s ease",
//   },
//   text: {
//     maxWidth: "600px",
//   },
//   name: {
//     fontSize: "1.4rem",
//     color: "#6a1b9a",
//     marginBottom: "0.5rem",
//   },
//   description: {
//     fontSize: "1rem",
//     color: "#333",
//     lineHeight: "1.6",
//   },
// };
import Nav from "../../../components/Nav";

const teamMembers = [
  {
    name: "Chimi: The Cultural Curator",
    description: `Chimi brings a deep love for heritage, local traditions, and storytelling to every destination we visit. Whether she’s chatting with a village elder or exploring a centuries-old temple, Chimi has a gift for uncovering the heart and soul of a place. Her eye for detail and passion for culture make every journey richer, more meaningful, and unforgettable.`,
    image:
      "https://st2.depositphotos.com/21607914/42954/i/450/depositphotos_429540370-stock-photo-zhao-lusi-chinese-actress-shows.jpg",
  },
  {
    name: "Thinley: The Visual Explorer",
    description: `With a camera always in hand and an eye for the extraordinary, Thinley captures the beauty and spirit of our travels. From candid street moments to sweeping landscapes, her photography brings our adventures to life. Beyond the lens, she’s also a logistics wizard—turning travel plans into smooth, memorable experiences.`,
    image:
      "https://imgcdn.stablediffusionweb.com/2024/9/7/b1251c89-1934-478c-91e6-57f1a7de43d8.jpg",
  },
  {
    name: "Choden: The Quiet Architect",
    description: `Choden works behind the scenes with quiet brilliance. She’s the reason we never miss a bus, always find the right trail, and somehow end up in the right place at the right time. With her love for research and local insight, she crafts travel days that feel effortless—but are anything but. Her strength lies in thoughtful structure and making complex things look simple.`,
    image:
      "https://st2.depositphotos.com/37603430/46514/i/450/depositphotos_465144462-stock-photo-asian-beautiful-lady-dark-blue.jpg",
  },
];

const Team = () => {
  return (
    <div style={styles.page}>
      <Nav />
      <header style={styles.header}>
        <h1 style={styles.heading}>✨ Meet the Team ✨</h1>
        <p style={styles.subheading}>
          These women turn wanderlust into wonder.
        </p>
      </header>
      <section style={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <img src={member.image} alt={member.name} style={styles.avatar} />
            <div style={styles.cardText}>
              <h3 style={styles.name}>{member.name}</h3>
              <p style={styles.description}>{member.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Team;

const styles = {
  page: {
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(to right, #fffbf5, #f0f4ff)",
    minHeight: "100vh",
    padding: "3rem 2rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#5e35b1",
    margin: 0,
  },
  subheading: {
    color: "#666",
    fontSize: "1.1rem",
    marginTop: "0.5rem",
  },
  teamGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    display: "flex",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    transition: "transform 0.3s ease",
  },
  avatar: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    marginRight: "1.5rem",
  },
  cardText: {
    flex: 1,
    textAlign: "left",
  },
  name: {
    fontSize: "1.5rem",
    color: "#4a148c",
    marginBottom: "0.75rem",
  },
  description: {
    fontSize: "1rem",
    color: "#444",
    lineHeight: "1.6",
  },
};
